# 📘 Node.js CRUD API with TypeScript

A simple and clean RESTful CRUD API built using **Node.js**, **Express**, and **TypeScript**. This project demonstrates how to structure a TypeScript-based Express API with modular routing, models, controllers, and types.

---

## 🚀 Features

- 🔧 Written in **TypeScript**
- 🧩 Modular project structure
- 📦 Uses **Express.js**
- ✍️ Type-safe request/response handling
- 📁 Basic CRUD operations (Create, Read, Update, Delete)
- ✅ Easy to scale and extend

---

## 📂 Project Structure

```

ts-node-api/
├── src/
│   ├── controllers/         # Handles business logic
│   │   └── user.controller.ts
│   ├── models/              # In-memory data access
│   │   └── user.model.ts
│   ├── routes/              # Route definitions
│   │   └── user.routes.ts
│   ├── types/               # TypeScript interfaces/types
│   │   └── user.type.ts
│   └── index.ts             # Entry point of the app
├── tsconfig.json            # TypeScript config
├── package.json             # Project metadata & dependencies
└── README.md                # You're here!

````

---

## 🧱 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Naveen3873/nodejs-ts.git
cd ts-node
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm run dev
```

Server will run on:

```
http://localhost:3000/api/users
```

---

## 📮 API Endpoints

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | `/api/users`     | Get all users   |
| GET    | `/api/users/:id` | Get user by ID  |
| POST   | `/api/users`     | Create new user |
| PUT    | `/api/users/:id` | Update user     |
| DELETE | `/api/users/:id` | Delete user     |

---

## 🧪 Sample Payload

### Create User

```json
POST /api/users
{
  "id": 1,
  "name": "Vicky",
  "email": "vicky@example.com"
}
```

---

## 🛠️ Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start dev server (ts-node) |
| `npm run build` | Compile TypeScript to JS   |
| `npm start`     | Run compiled JS app        |

---

## 🧾 License

MIT License. Free to use and modify.

---

## 🙋‍♂️ Author

Made with ❤️ by **Naveen K**
📧 \[[naveenbe3873@gmail.com](mailto:naveenbe3873@gmail.com)]

```
