# 🚀 Full Stack Authentication System (Node.js + MongoDB + JWT)

## 📌 Project Overview

This project is a complete _secure authentication system_ built with:

- Signup
- Login
- Password hashing (bcrypt)
- JWT authentication
- Protected routes
- Frontend + Backend integration

---

## 🧱 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Bcrypt (password security)
- JSON Web Token (JWT)
- HTML, CSS, JavaScript
- Git & GitHub

---

## ✅ Features Implemented

### 🔐 Authentication (Backend)

- User Signup (stored in MongoDB)
- Password hashing using bcrypt
- Secure Login with bcrypt.compare
- JWT token generation on login
- Protected routes using middleware
- Duplicate user prevention

### 🔒 Protected Routes

- /dashboard (requires token)
- /profile (requires token)

### 🖥️ Frontend

- Login page (index.html)
- Dashboard (dashboard.html)
- Token stored in localStorage
- Auto login (skip login page if already logged in)
- Logout system (token removed)
- Protected dashboard (no direct access)

### 🧪 Testing

- API tested using Thunder Client
- Browser-based login + dashboard working

---

## 📁 Project Structure

## project-folder/ │ ├── controllers/ │ └── authController.js │ ├── routes/ │ └── authRoutes.js │ ├── middleware/ │ └── authMiddleware.js │ ├── public/ │ ├── index.html │ ├── dashboard.html │ ├── script.js │ └── style.css │ ├── User.js ├── server.js ├── package.json ├── .env └── README.md

## 🔌 API Endpoints

### Signup

POST /signup

### Login

POST /login  
Returns JWT token

### Protected Routes

GET /dashboard  
GET /profile

(Header required)
Authorization: Bearer TOKEN

---

## 🔐 Security Features

- Password hashing (bcrypt)
- JWT authentication
- Protected routes
- Token-based access control
- Frontend route protection

---

## 🧠 Concepts Learned

- Express routing & middleware
- MongoDB & Mongoose
- Authentication systems
- JWT token handling
- Async/Await
- Debugging real errors
- Git workflow

---

## ⚠️ Current Limitations

- No token expiration handling on frontend
- No refresh tokens
- Basic UI only

---

## 🚀 Next Improvements

- Token expiry auto logout
- Show username on dashboard
- Better UI/UX
- Deploy to cloud (Render / Vercel)

---

## 👨‍💻 Author

Built as part of learning journey toward becoming a full stack & AI-first developer(Muhammad Saqib).
