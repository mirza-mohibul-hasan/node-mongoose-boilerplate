# Node-Mongoose-Boilerplate

This project is a Node.js boilerplate for building web applications with Express, MongoDB, and JWT authentication. It provides a simple and extendable structure for building RESTful APIs with user registration, login, and protected routes. This project is ideal for developers who want a starting point for building their own full-stack web applications.

## Features

- User Authentication with JWT (JSON Web Tokens)
- User Registration with password hashing
- User Login to generate JWT token
- Protected Routes requiring JWT authentication
- MongoDB integration with Mongoose
- Error Handling Middleware
- Environment Variable Support with dotenv

## Requirements

- Node.js (v14 or higher)
- MongoDB (local or Atlas cluster)
- Postman for testing the API

## Installation

Clone the repository:

```bash
git clone https://github.com/mirza-mohibul-hasan/node-mongoose-boilerplate.git
cd node-mongoose-boilerplate
```

Install dependencies:

```bash
npm install
```

Set up environment variables:

Create a `.env` file in the root directory and add the following:

```env
MONGO_URI=mongodb://localhost:27017/myapp
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

Replace `your_jwt_secret_key` with a strong, random secret key for signing JWT tokens.

Start the server:

```bash
npm run dev
```

The server will be running on [http://localhost:3000](http://localhost:3000).

## API Endpoints

### 1. POST /api/v1/users/register

Registers a new user with name, email, and password.

**Body:**

```json
{
  "name": "Mirza",
  "email": "mirza@gmail.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "message": "User created successfully"
}
```

### 2. POST /api/v1/users/login

Logs in an existing user and generates a JWT token.

**Body:**

```json
{
{
  "email": "mirza@gmail.com",
  "password": "123456"
}
}
```

**Response:**

```json
{
  "token": "your-jwt-token-here"
}
```

### 3. GET /api/v1/users/profile (Protected Route)

Retrieves the user profile. Requires a valid JWT token in the header.

**Headers:**

```json
{
  "Content-Type": "application/json",
  "x-auth-token": "your-jwt-token-here"
}
```

**Response:**

```json
{
  "message": "This is a protected route"
}
```

## Error Handling

### Invalid credentials:

```json
{
  "message": "Invalid credentials"
}
```

### Authorization denied (missing or invalid token):

```json
{
  "message": "Authorization denied"
}
```

## Contribution Guidelines

We welcome contributions to this project! Please follow these guidelines to contribute effectively:

1. Fork the repository:
   Click on the Fork button at the top-right corner of this page.
2. Clone your fork:
   Clone the forked repository to your local machine:

   ```bash
   git clone https://github.com/mirza-mohibul-hasan/node-mongoose-boilerplate.git
   ```

3. Create a new branch:
   Create a branch for your feature or bugfix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. Make your changes:
   Edit the files and make your changes. Make sure to write clear and meaningful commit messages (e.g., `feat(routes): add user profile route`).

5. Run Tests:
   If you have added new functionality, make sure to write tests (if applicable) and run them:

   ```bash
   npm run test
   ```

6. Commit your changes:
   After making your changes, commit them with a meaningful commit message:

   ```bash
   git commit -m "feat(routes): add user profile route"
   ```

7. Push your changes:
   Push your changes to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

8. Create a Pull Request:
   Go to your fork on GitHub.
   Click on Compare & Pull Request.
   Provide a clear description of the changes you’ve made.
   Submit the pull request.

## Issues & Bugs

If you find a bug or have an issue, please open an issue with the following details:

- Steps to reproduce
- Expected behavior
- Actual behavior

## License

This project is licensed under the MIT License - see the LICENSE file for details.
