import NotFoundError from "../error/notFoundError";
import { ISignUp } from "../interface/auth";
import UserModel from "../model/user";

export async function getUsers() {
  return UserModel.getUsers();
}

export async function getUserById(id: number) {
  const user = UserModel.getUserById(id);

  if (!user) {
    throw new NotFoundError("User Not Found");
  }

  return user;
}

export async function getUserByName(name: string) {
  return UserModel.getUserByName(name);
}

export async function createUser(user: ISignUp) {
  return UserModel.createUser(user);
}

export async function updateUser(id: number, userDetail: ISignUp) {
  const user = UserModel.getUserById(id);

  if (!user) {
    throw new NotFoundError("User Not Found");
  }

  await UserModel.updateUser(id, userDetail);

  const updatedUser = await UserModel.getUserById(id);

  return updatedUser;
}

export async function deleteUser(id: number) {
  const user = UserModel.getUserById(id);

  if (!user) {
    throw new NotFoundError("User Not Found");
  }

  await UserModel.deleteUser(id);
}
