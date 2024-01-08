import BaseModel from "./baseModel";
import { ISignUp } from "../interface/auth";

export default class UserModel extends BaseModel {
  static async getUsers() {
    return this.queryBuilder()
      .select({
        id: "id",
        name: "name",
      })
      .from("users");
  }

  static async getUserById(id: number) {
    return this.queryBuilder()
      .select({
        id: "id",
        name: "name",
      })
      .from("users")
      .where({ id })
      .first();
  }

  static async getUserByName(name: string) {
    const user = await this.queryBuilder()
      .select({
        id: "id",
        name: "name",
        password: "password",
      })
      .from("users")
      .where({ name });

    return user?.[0];
  }

  static async createUser(user: ISignUp) {
    return this.queryBuilder().insert(user).table("users");
  }

  static async updateUser(id: number, user: ISignUp) {
    return this.queryBuilder().update(user).table("users").where({ id });
  }

  static async deleteUser(id: number) {
    return this.queryBuilder().table("users").where({ id }).del();
  }
}
