# 🔐 Node.js Role-Based Auth API with Image Upload

A secure, modular REST API built with **Node.js**, **Express**, and **MongoDB** that supports:

- ✅ User authentication & registration
- 🔒 JWT-based authentication
- 🧑‍⚖️ Role-based access control (Admin & User)
- 📤 Cloudinary image upload
- 🧱 Scalable, modular folder structure

---

## 📁 Project Structure
```
NODEJS-AUTH/
├── config/
│ └── cloudinary.js
├── controllers/
│ ├── auth-controller.js
│ └── image-controller.js
├── database/
│ └── db.js
├── helpers/
│ └── cloudinaryHelper.js
├── middleware/
│ ├── admin-middleware.js
│ ├── auth-middleware.js
│ └── upload-middleware.js
├── models/
│ ├── Image.js
│ └── User.js
├── routes/
│ ├── admin-routes.js
│ ├── auth-routes.js
│ ├── home-routes.js
│ └── image-routes.js
├── uploads/
│ └── image-*.png
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```


---

## 🚀 Features

- 🔑 Secure JWT authentication
- 🧾 User registration and login
- 🧑‍💼 Admin/User role access
- 🖼️ Image upload with Cloudinary
- 🧱 Modular codebase
- 🌐 RESTful API ready for frontend

---

## 🧰 Tech Stack

- **Node.js**, **Express.js**
- **MongoDB** + **Mongoose**
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Multer** for file uploads
- **Cloudinary** for image hosting
- **dotenv** for config management

---

## 📦 Getting Started

### 1. Clone the repository
cd NODEJS-AUTH

2. Install dependencies
npm install

3. Create a .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

## 📬 Postman Collection

You can use the Postman collection below to test all API endpoints:

👉 [Download Postman Collection](./NodeJS-Auth-API.postman_collection.json)

> Import the file into Postman using `File > Import` or drag-and-drop it into your Postman workspace.

