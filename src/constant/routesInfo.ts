export const TOP_LEVEL_ROUTES = {
  message: "List of top level routes",
  "/users": "User routes",

  "/todos": "Todo routes",
};

export const USER_ROUTES = {
  "/": {
    GET: "Retrieve list of users",
    "/:id": {
      GET: "Retrieve user by ID",
      PUT: "Update existing user using ID",
      DELETE: "Delete existing user using ID",
    },
  },
};
