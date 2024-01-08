
# Backend Implementation of User Signup and Login

## Implementation of User endpoints with respective HTTP methods
## API Request
### Base URL
```
http://localhost:8000/auth
```

### Login
>Endpoint: /login

>Method: POST

### Signup/Create User

>Endpoint: /signup

>Method: POST

### Get Users

>Endpoint: /users

>Method: GET

### Get User by id

>Endpoint: /users/{id}

>Method: GET

### Update User by id

>Endpoint: /users/{id}

>Method: PUT


### Delete User by id

>Endpoint: /users/{id}

>Method: DELETE


# Backend Implementation of Todo App

## Implementation of Todo endpoints with respective HTTP methods

## API Request
### Base URL
```
http://localhost:8000/auth
```


### **Get Todos**
>Endpoint: /todos

>Method: GET


### Get Todo by id
>Endpoint: /todos/{id}

>Method: GET


### Create Todo
>Endpoint: /todos

>Method: POST


### Update Todo by id

>Endpoint: /todos/{id}

>Method: PUT


### Delete Todo by id

>Endpoint: /todos/{id}

>Method: DELETE





## Installation Steps

1. **Clone the Repository:**

   ```
   git clone https://github.com/Sabnit/todo-app-backend.git
   git checkout assignment-01
   ```

2. **Navigate to the Project Directory:**

   ```
   cd your_repo
   ```

3. **_ Set Environment variables _**
   
   Create a .env file in the root directory.
   ```
   SERVER_PORT=8000
   SALT_ROUNDS = 10
   ACCESS_TOKEN_SECRET='access_token_secret'
   REFRESH_TOKEN_SECRET='refresh_token_secret'
   ```

5. **Install Dependencies**

   ```
   npm install
   ```

6. **Start Server**
   ```
   npm start
   ```
