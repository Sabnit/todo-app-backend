import { ITodo, QueryTodo } from "../interface/todo";
import BaseModel from "./baseModel";

export default class TodoModel extends BaseModel {
  static async getTodos() {
    return this.queryBuilder()
      .select({
        id: "t.id",
        title: "title",
        completed: "completed",
        createdBy: "created_by",
        name: "u.name",
      })
      .from({ t: "tasks" })
      .leftJoin({ u: "users" }, { "t.created_by": "u.id" });
  }

  static async getTodoById(id: number, userId: number) {
    return this.queryBuilder()
      .select({
        id: "id",
        title: "title",
        completed: "completed",
        createdBy: "created_by",
      })
      .from("tasks")
      .where({ id, createdBy: userId })
      .first();
  }

  static async createTodo(todo: ITodo) {
    return this.queryBuilder().insert(todo).table("tasks");
  }

  static async updateTodo(id: number, todo: ITodo) {
    return this.queryBuilder().update(todo).table("tasks").where({ id });
  }

  static async deleteTodo(id: number) {
    return this.queryBuilder().table("tasks").where({ id }).del();
  }
}
