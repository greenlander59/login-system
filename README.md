# 🚀 Full Stack Login System (Node.js + MongoDB)

## 📌 Project Overview

This project is a complete authentication system with:

- Signup
- Login
- Password hashing (bcrypt)
- MongoDB database
- Frontend + Backend integration

---

## 🧱 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Bcrypt (password security)
- HTML, CSS, JavaScript (frontend)
- Git & GitHub

---

## ✅ Features Implemented

### 🔐 Authentication

- User Signup (stored in MongoDB)
- Password hashing using bcrypt
- Secure Login with bcrypt.compare
- Duplicate user prevention

### 🖥️ Frontend

- Login page (index.html)
- Dashboard (dashboard.html)
- Session handling using localStorage
- Protected route (no direct dashboard access)

### 🧪 Testing

- API tested using Thunder Client
- Browser-based login working

---

## 📁 Project Structure

project-folder/ │ ├── server.js # Main backend server ├── User.js # User model (Mongoose schema) ├── users.json # Old file-based DB (deprecated) ├── index.html # Login page ├── dashboard.html # Protected dashboard ├── script.js # Frontend logic ├── style.css # Styling ├── package.json # Dependencies └── README.md # Project documentation

---

## 🔌 API Endpoints

### Signup

POST /signup

Body:
{
"username": "user",
"password": "1234"
}

Response:
User saved securely ✅

---

### Login

POST /login

Body:
{
"username": "user",
"password": "1234"
}

Response:
Login successful ✅

---

## 🧠 Important Concepts Learned

- Express server setup
- MongoDB connection
- Mongoose schema & model
- Async/Await handling
- Password hashing (bcrypt)
- API creation & testing
- Debugging real errors
- Git & GitHub workflow

---

## ⚠️ Current Limitations

- No JWT authentication yet
- No input validation
- No environment variables (.env)
- Basic frontend only

---

## 🚀 Next Steps (Planned)

- Project folder structure (MVC)
- Separate routes & controllers
- Add .env for security
- JWT authentication (tokens)
- Better UI/UX

---

## 👨‍💻 Author

Built as part of learning journey toward becoming an AI-first full stack developer.
