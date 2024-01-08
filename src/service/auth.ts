import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import config from "../config";
import { users, addUser } from "../model/users";
import { ILogIn, ISignUp } from "../interface/auth";
import { ACCESS_TOKEN_EXPIRY, REFRESH_TOKEN_EXPIRY } from "../constant/jwt";
import * as userService from "./user";

const SALT_ROUNDS = 10;

export const signup = async (body: ISignUp) => {
  const hashPassword = await bcrypt.hash(body.password, SALT_ROUNDS);

  userService.createUser({
    ...body,
    password: hashPassword,
  });

  return hashPassword;
};

export const login = async (body: ILogIn) => {
  const user = users.find(({ email }) => email === body.email)!;

  const passwordMatch = await bcrypt.compare(body.password, user.password);

  if (!passwordMatch) {
    throw new Error("Unauthorized");
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
