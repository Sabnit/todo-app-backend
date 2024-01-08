import { ISignUp } from "../interface/auth";

export const users = [
  {
    id: 1,
    name: "User 1",
    email: "user1@mail.com",
    password: "$2b$10$W./GL4g9fKuIyLYzH6BsQe7LzvX2l.uEcintM5LyhQN4miHPfHlwa", // test1
    accessToken: "",
    refreshToken: "",
  },
  {
    id: 2,
    name: "User 2",
    email: "user2@mail.com",
    password: "$2b$10$sPJYyf75p6V/GPfxBhmNL.vqIlY.o65IYk4CWfpXQWnoW8AIffCEe", // test2
    accessToken: "",
    refreshToken: "",
  },
  {
    id: 3,
    name: "User 3",
    email: "user3@mail.com",
    password: "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW", // test3
    accessToken: "",
    refreshToken: "",
  },
];

export const createUser = (body: ISignUp) => {
  const newUser = {
    id: users.length + 1,
    ...body,
    accessToken: "",
    refreshToken: "",
  };

  users.push(newUser); // Add the new user to the users array
  console.log(users);
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

export function getUserByUsername(name: string) {
  const user = users.find(({ name: userName }) => userName === name);
  return user;
}

export function updateUserById(id: number) {
  const user = getUserById(id);
  if (!user) return null;

  return user;
}

export function updateUser(id: number, userDetail: any) {
  let user = users.find(({ id: userId }) => userId === id);
  user = userDetail;

  return user;
}

export const deleteUser = (id: number) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    const deletedUser = users.splice(index, 1)[0];
    return deletedUser;
  }

  return null;
};
