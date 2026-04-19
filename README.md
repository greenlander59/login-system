# 🔐 Login System (Node.js + JWT + MongoDB)

A complete authentication system with login, register, JWT session, and protected dashboard.

---

## 🚀 Features

- User Registration
- User Login
- Password Hashing (bcrypt)
- JWT Authentication
- Protected Dashboard
- Auto Login (token check)
- Logout System
- Session Expiry Handling
- Clean UI with Loader

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcrypt

---

## 📁 Project Structure

login-system/ │ ├── controllers/ │ └── authController.js │ ├── middleware/ │ └── authMiddleware.js │ ├── models/ │ └── user.js │ ├── routes/ │ └── authRoutes.js │ ├── public/ │ ├── index.html │ ├── dashboard.html │ ├── script.js │ └── style.css │ ├── .env ├── server.js ├── package.json └── README.md

---

## ⚙️ Installation

### 1. Clone repo

```bash
git clone https://github.com/YOUR-USERNAME/login-system.git
cd login-system
2. Install dependencies
Bash
npm install
3. Create .env file
Environment
PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
4. Run server
Bash
node server.js
🌐 Usage
Open browser:

http://localhost:3000
Register new user
Login
Access dashboard
🔐 Security
Passwords are hashed using bcrypt
JWT used for authentication
Protected routes with middleware
📸 Screenshots
(Add your screenshots here later)
📌 Future Improvements
Add Email field
Add User Roles (Admin/User)
Add Profile Page
Deploy online
👨‍💻 Author
Developed by YOU 🚀
⭐ License
Free to use and modify

---
```
