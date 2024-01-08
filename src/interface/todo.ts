export interface ITodo {
  title: string;
  completed?: boolean;
  createdBy: number;
}

export interface QueryTodo {
  search?: string;
  completed?: boolean;
}
