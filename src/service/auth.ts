import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import config from "../config";
import { users } from "../model/users";
import { ILogIn, ISignUp } from "../interface/auth";
import { ACCESS_TOKEN_EXPIRY, REFRESH_TOKEN_EXPIRY } from "../constant/jwt";
import * as userService from "./user";

import ConflictError from "../error/conflictError";
import NotFoundError from "../error/notFoundError";
import UnauthenticatedError from "../error/unauthenticatedError";

export const signup = async (body: ISignUp) => {
  const user = await userService.getUserByName(body.name);

  if (user) {
    throw new ConflictError("User already exists");
  }

  const hashPassword = await bcrypt.hash(body.password, config.saltRounds);

  userService.createUser({
    ...body,
    password: hashPassword,
  });

  return hashPassword;
};

export const login = async (body: ILogIn) => {
  const user = users.find(({ email }) => email === body.email)!;

  if (!user) {
    throw new NotFoundError("User does not match");
  }

  const passwordMatch = await bcrypt.compare(body.password, user.password);

  if (!passwordMatch) {
    throw new UnauthenticatedError("Password does not match");
  }

  const accessToken = jwt.sign(user, config.jwt.accessTokenSecret!, {
    expiresIn: ACCESS_TOKEN_EXPIRY,
  });

  const refreshToken = jwt.sign(user, config.jwt.refreshTokenSecret!, {
    expiresIn: REFRESH_TOKEN_EXPIRY,
  });

  console.log({ accessToken, refreshToken });

  return {
    accessToken,
    refreshToken,
  };
};

export async function reGenerateToken(token: string) {
  const payload: any = jwt.verify(token, config.jwt.refreshTokenSecret!);
  const userDetail = userService.getUserByName(payload.username)!;

  if (!userDetail) {
    throw new NotFoundError("User Not Found");
  }

  if (!payload || payload.tokenType !== "refreshToken") {
    throw new NotFoundError("Invalid token");
  }

  if (userDetail.refreshToken !== token) {
    throw new NotFoundError("Invalid token");
  }

  delete payload.iat;
  delete payload.exp;
  delete payload.tokenType;

  payload.tokenType = "accessToken";
  const accessToken = jwt.sign(payload, config.jwt.accessTokenSecret!, {
    expiresIn: ACCESS_TOKEN_EXPIRY,
  });

  payload.tokenType = "refreshToken";
  const refreshToken = jwt.sign(payload, config.jwt.refreshTokenSecret!, {
    expiresIn: REFRESH_TOKEN_EXPIRY,
  });

  userDetail.accessToken = accessToken;
  userDetail.refreshToken = refreshToken;

  userService.updateUser(payload.id, userDetail);

  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
    message: "Token Refreshed",
  };
}
