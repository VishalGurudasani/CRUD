

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

npm run start
The server will start running on http://localhost:3000.

API Endpoints
Users
GET /users: Get all users.
GET /users/
: Get a user by ID.
POST /users: Create a new user.
PUT /users/
: Update a user by ID.
DELETE /users/
: Delete a user by ID.
Wallet Addresses
GET /wallet-addresses: Get all wallet addresses.
GET /wallet-addresses/
: Get a wallet address by ID.
POST /wallet-addresses: Create a new wallet address.
PUT /wallet-addresses/
: Update a wallet address by ID.
DELETE /wallet-addresses/
: Delete a wallet address by ID.
Testing
You can test the API endpoints using tools like Postman. Here are some example requests:

Create a user:

POST http://localhost:3000/users
Content-Type: application/json

{
  "name": "xyz",
  "email": "xyz@gmail.com",
  "password": "12345"
}
Get all users:

GET http://localhost:3000/users
Update a user:

PUT http://localhost:3000/users/1
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "password": "new_password"
}
Delete a user:

DELETE http://localhost:3000/users/1
