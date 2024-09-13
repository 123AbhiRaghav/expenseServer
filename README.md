# Expense Management System (MERN Stack)
This is a full-stack Expense Management System built using MongoDB, Express.js, React.js, and Node.js (MERN). The application allows users to register, log in, add, edit, delete expenses, view a list of expenses, and reset their password. It also features JWT authentication for secure access and ensures users can only manage their own expenses.

# Features
User Registration and Login with JWT Authentication
Add, Edit, Delete Expenses
View all expenses in a table format
Total Expense Calculation
Password Reset functionality
Responsive UI built with Tailwind CSS
Secure API with token verification
Error handling (CORS, authentication errors)
Seamless API performance on both frontend and backend

# Tech Stack
Frontend: React, Tailwind CSS, Axios
Backend: Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs
Database: MongoDB (NoSQL)
Authentication: JWT (JSON Web Token)

# Prerequisites
Node.js: Install Node.js
MongoDB: Install MongoDB


# Installation
1. Clone the repository

git clone <your-repo-url>
2. Install Frontend and Backend dependencies
Navigate to the root folder and run the following commands for both the frontend and backend.

# For Frontend:
cd frontend
npm install

# For Backend:
cd backend
npm install
Environment Variables
Create a .env file in the backend folder and add the following variables:


MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret>

Create a .env file in the frontend folder and add the following variable:

REACT_APP_BACKEND_URL=<Your Backend URL>
Running the Application

Start the Backend Server
# Navigate to the backend folder:
cd backend

# Start the server:

npm start
The server will run on http://localhost:5000.