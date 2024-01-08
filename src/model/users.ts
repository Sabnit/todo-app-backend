import { ISignUp } from "../interface/auth";

export const users = [
  {
    id: 1,
    name: "User 1",
    email: "user1@mail.com",
    password: "$2b$10$NR8NrniMBO0u7N80NGV8EOXf1rKpuI8plQFh5eA5k13aWsfzLhJKW", // test1
  },
  {
    id: 2,
    name: "User 2",
    email: "user2@mail.com",
    password: "$2b$10$4PhEGg3ikxZ9SRGq9cvjSeSyl.jz1L.R4gE/LeEDzL/b/xm7bAe3G", // test2
  },
  {
    id: 3,
    name: "User 3",
    email: "user3@mail.com",
    password: "$2b$10$NnO1dDjtrYizPzb05P8fiem5jxUek7rJc7.YCg0STF13uv.99An3e", // test3
  },
];

export const addUser = (body: ISignUp) => {
  const newUser = {
    id: users.length + 1,
    ...body,
  };

  users.push(newUser); // Add the new user to the users array
};

export const getUsers = (params: any) => {
  let data = users.map((user) => ({ id: user.id, name: user.name }));

  if (params.name) {
    data = data.filter(({ name }) => name === params.name);
  }

  return data;
};

export const getUserById = (id: number) => {
  const user = users
    .map((user) => ({ id: user.id, name: user.name }))
    .find(({ id: userId }) => userId === id);
  return user;
};
