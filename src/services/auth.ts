import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { ISignUp } from "../interface/auth";
import config from "../config";
import * as userService from "./user";
import ConflictError from "../error/conflictError";
import NotFoundError from "../error/notFoundError";
import UnauthenticatedError from "../error/unauthenticatedError";

export async function signup(body: ISignUp) {
  const user = await userService.getUserByName(body.name);

  if (user) {
    throw new ConflictError("User already exists");
  }

  const hashedPassword = await bcrypt.hash(body.password, config.saltRounds);

  await userService.createUser({
    ...body,
    password: hashedPassword,
  });

  return {
    message: "User signed up successfully",
  };
}

export async function login(body: ISignUp) {
  const userDetail = await userService.getUserByName(body.name);

  if (!userDetail) {
    throw new NotFoundError("User Not Found");
  }

  const passwordMatch = await bcrypt.compare(
    body.password,
    userDetail.password
  );

  if (!passwordMatch) {
    throw new UnauthenticatedError("name and password does not match");
  }

  const user = {
    id: userDetail.id,
    name: userDetail.name,
  };

  const accessToken = jwt.sign(user, config.jwt.accessTokenSecret!, {
    expiresIn: config.jwt.accessTokenExpiry,
  });

  const refreshToken = jwt.sign(user, config.jwt.refreshTokenSecret!, {
    expiresIn: config.jwt.refreshTokenExpiry,
  });

  // await userService.updateUser(userDetail.id, userDetail);

  return {
    accessToken,
    refreshToken,
  };
}

export async function reGenerateToken(token: string) {
  const payload: any = jwt.verify(token, config.jwt.refreshTokenSecret!);

  delete payload.iat;
  delete payload.exp;

  const accessToken = jwt.sign(payload, config.jwt.accessTokenSecret!, {
    expiresIn: config.jwt.accessTokenExpiry,
  });

  const refreshToken = jwt.sign(payload, config.jwt.refreshTokenSecret!, {
    expiresIn: config.jwt.refreshTokenExpiry,
  });

  // await userService.updateUser(payload.id, userDetail);

  return {
    message: "Token Refreshed",
    accessToken,
    refreshToken,
  };
}

export async function logout(name: string) {
  const user = await userService.getUserByName(name)!;

  if (!user) {
    throw new NotFoundError("User Not Found");
  }
}
