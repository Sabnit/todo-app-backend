import { Knex } from "knex";
import { ITodo } from "../interface/todo";
import BaseModel from "./baseModel";

export default class TodoModel extends BaseModel {
  private static injectFilter(query: Knex.QueryBuilder, params: any) {
    if (params.completed) {
      query.where({
        completed: params.completed,
      });
    }
  }

  static async getTodos(params: any) {
    const query = this.queryBuilder()
      .select({
        id: "todo.id",
        title: "title",
        completed: "completed",
        createdBy: "created_by",
        name: "u.name",
      })
      .from({ t: "tasks" })
      .leftJoin({ u: "users" }, { "t.created_by": "u.id" });

    this.injectFilter(query, params);

    query.offset(params.offset).limit(params.limit);

    return query;
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

  static countAll(params: any) {
    const query = this.queryBuilder()
      .table("tasks")
      .where({ Created_by: params.createdBy })
      .count({ count: "tasks.id" })
      .first();

    this.injectFilter(query, params);

    return query;
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
