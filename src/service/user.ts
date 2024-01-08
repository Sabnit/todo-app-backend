import { ISignUp } from "../interface/auth";
import * as userModel from "../model/users";
import NotFoundError from "../error/notFoundError";

export const getUsers = (params: Object) => {
  const user = userModel.getUsers(params);

  if (!user.length) {
    throw new NotFoundError("User list is empty");
  }

  return user;
};

export const getUserById = (id: number) => {
  const user = userModel.getUserById(id);

  if (!user) {
    throw new NotFoundError(`User data of User id:${id} not found`);
  }

  return user;
};

export function getUserByName(name: string) {
  const user = userModel.getUserByUsername(name);
  if (!user) {
    throw new NotFoundError(`User data of User name:${name} not found`);
  }

  return user;
}

export const createUser = async (body: ISignUp) => {
  return userModel.createUser(body);
};

export function updateUser(id: number, userDetail: Object) {
  const user = userModel.updateUser(id, userDetail);

  if (!user) {
    throw new NotFoundError("User Not Found");
  }

  return user;
}

export const deleteUser = (id: number) => {
  const user = userModel.deleteUser(id);

  if (!user) {
    throw new NotFoundError(`User data of User id:${id} not found`);
  }

  return user;
};

export async function updateUserById(id: number) {
  const user = userModel.updateUserById(id);

  if (!user) {
    throw new NotFoundError(`User data of User id:${id} not found`);
  }

  return user;
}
