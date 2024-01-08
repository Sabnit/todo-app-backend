import { ISignUp } from "../interface/auth";
import * as userModel from "../model/users";

export const getUsers = (params: Object) => {
  const data = userModel.getUsers(params);

  return data;
};

export const getUserById = (id: number) => {
  const data = userModel.getUserById(id);

  return data;
};

export const createUser = async (body: ISignUp) => {
  console.log(body);
  const newUser = userModel.addUser(body);

  return newUser;
};
