
# Library Management System

A full-stack Library Management System built using the MERN (MongoDB, Express, React, Node.js) stack. This application allows users to view, borrow, and return books from a library with a limit of 2 books per user at any given time.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation And Run Locally](#installation)
- [API Endpoints](#api-endpoints)

## Features

- **User Authentication:** Users can register and log in to access the library.
- **View Books:** Users can browse available books in the library.
- **Borrow Books:** Users can borrow up to 2 books at a time.
- **Return Books:** Users can return borrowed books to the library.

## Tech Stack

- **Frontend:** React.js, HTML, CSS, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Other Libraries:** Mongoose, bcrypt

## Installation

### Prerequisites
- Node.js (v14 or above)
- MongoDB (local or cloud instance)

### Steps
 - `git clone https://github.com/laveshgaurav/library-management.git`
 - `cd backend`
 - `npm install or yarn`
 - `node index`
 - `Backend will start running on localhost:8000`
 - `Open a new terminal and don't close backend terminal`
 - `cd frontend`
 - `npm install or yarn`
 - `npm run dev`
 - `Frontend will start on localhost:5173`
 - `You're good to go`
 - `Login Cred 1 {email : lavesh@gmail.com, password : 12345678}`
 - `Login Cred 2 {email : gaurav@gmail.com, password : 12345678}`

## API Endpoints
# Library Management System

This is a MERN stack-based library management system that allows users to view, borrow, and return books.

## API Documentation

This section provides examples of how to interact with the library management system's API using `axios`. Below is a sample API request to register a new user.

### Register a New User

**Endpoint:** `POST /user/register`

Registers a new user with the system.

- **URL:** `localhost:8000/user/register`
- **Method:** `POST`
- **Content-Type:** `application/json`
- **Request Body:**
  - `name` (string): Name of the user
  - `email` (string): Email of the user
  - `password` (string): Password for the user account

**Sample Request:**

```javascript
const axios = require('axios');

// Define the data for the new user
let data = JSON.stringify({
  "name": "Lavesh",
  "email": "lavesh@gmail.com",
  "password": "12345678"
});

// Configuration for the request
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:8000/user/register',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

// Make the request using axios
axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```
### User Login

**Endpoint:** `POST /user/login`

Logs in a user to the system and returns a token for authentication.

- **URL:** `localhost:8000/user/login`
- **Method:** `POST`
- **Content-Type:** `application/json`
- **Request Body:**
  - `email` (string): Email of the user
  - `password` (string): Password for the user account

**Sample Request:**

```javascript
const axios = require('axios');

// Define the login data
let data = JSON.stringify({
  "email": "lavesh@gmail.com",
  "password": "12345678"
});

// Configuration for the request
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:8000/user/login',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

// Make the request using axios
axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```
### Fetch Books

**Endpoint:** `GET /book`

Retrieves the list of books present in the library.

- **URL:** `localhost:8000/book`
- **Method:** `GET`
- **Content-Type:** `application/json`
- **Request Body:** N/A

**Sample Request:**

```javascript
const axios = require('axios');

// No request body required for a GET request
let data = '';

// Configuration for the GET request
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8000/book',
  headers: { },
  data : data
};

// Make the GET request using axios
axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```
### Fetch Borrowed Books

**Endpoint:** `GET /user/borrowed-books`

Retrieves the list of books that the authenticated user has borrowed from the library.

- **URL:** `localhost:8000/user/borrowed-books`
- **Method:** `GET`
- **Headers:**
  - `Authorization`: A Bearer token that authenticates the user
- **Request Body:** N/A

**Sample Request:**

```javascript
const axios = require('axios');

// Configuration for the GET request with authorization
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8000/user/borrowed-books',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM2MWRmOWVlODU1NjY4YzdmYjZjMTAiLCJpYXQiOjE3MjQyNTk4Mzl9.a--GKbsl9ozhB9lNn7v83moBPHKpE7yTwtAIgpYmMXM'
  }
};

// Make the GET request using axios
axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

### Borrow a Book

**Endpoint:** `POST /user/borrow-book/:bookId`

Allows the authenticated user to borrow a book from the library.

- **URL:** `localhost:8000/user/borrow-book/66c61a0f424c694c625a2d7e`
- **Method:** `POST`
- **Headers:**
  - `Authorization`: A Bearer token that authenticates the user
- **Request Body:** N/A

**Sample Request:**

```javascript
const axios = require('axios');

// Configuration for the POST request with authorization
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:8000/user/borrow-book/66c61a0f424c694c625a2d7e', // bookId is passed in the URL
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM2MWRmOWVlODU1NjY4YzdmYjZjMTAiLCJpYXQiOjE3MjQyNTk4Mzl9.a--GKbsl9ozhB9lNn7v83moBPHKpE7yTwtAIgpYmMXM' // Bearer token
  }
};

// Make the POST request using axios
axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```
### Return a Book

**Endpoint:** `POST /user/return/:bookId`

Allows the authenticated user to return a book they have borrowed.

- **URL:** `localhost:8000/user/return/66c61a0f424c694c625a2d7e`
- **Method:** `POST`
- **Headers:**
  - `Authorization`: A Bearer token that authenticates the user
- **Request Body:** N/A

**Sample Request:**

```javascript
const axios = require('axios');

// Configuration for the POST request with authorization
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:8000/user/return/66c61a0f424c694c625a2d7e', // bookId is passed in the URL
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM2MWRmOWVlODU1NjY4YzdmYjZjMTAiLCJpYXQiOjE3MjQyNTk4Mzl9.a--GKbsl9ozhB9lNn7v83moBPHKpE7yTwtAIgpYmMXM' // Bearer token
  }
};

// Make the POST request using axios
axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```


