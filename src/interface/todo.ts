import { PaginationQuery } from "./pagination";

export interface ITodo extends PaginationQuery {
  title: string;
  completed?: boolean;
  createdBy: number;
}
