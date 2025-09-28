# MERN FOOD DEL - Installation & Setup Guide

This project is a full-stack MERN (MongoDB, Express, React, Node.js) Food Delivery application, consisting of three main parts:

- **Backend** (Node.js/Express API)
- **Frontend** (React Client)
- **Admin Panel** (React Admin Dashboard)

---

## Prerequisites

- [Node.js & npm](https://nodejs.org/) (v16 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (local or cloud, e.g., MongoDB Atlas)

---

## 1. Backend Setup

**Location:** `Backend/`

### Installation

```bash
cd Backend
npm install
```

### Environment Variables

Create a `.env` file in the `Backend/` directory with the following (example):

```env
MONGODB_URL=mongodb://localhost:27017/food-delivery
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Running the Backend

```bash
npm start
# or for development with auto-reload:
npm run dev
```

The backend server will run on `http://localhost:5000` by default.

---

## 2. Frontend Setup

**Location:** `Frontend/`

### Installation

```bash
cd Frontend
npm install
```

### Environment Variables

Create a `.env` file in the `Frontend/` directory if you need to specify the backend API URL (optional):

```env
VITE_API_URL=http://localhost:5000
```

### Running the Frontend

```bash
npm run dev
```

The frontend will run on `http://localhost:5173` by default.

---

## 3. Admin Panel Setup

**Location:** `admin/`

### Installation

```bash
cd admin
npm install
```

### Environment Variables

Create a `.env` file in the `admin/` directory if you need to specify the backend API URL (optional):

```env
VITE_API_URL=http://localhost:5000
```

### Running the Admin Panel

```bash
npm run dev
```

The admin panel will run on `http://localhost:5173` by default (or another port if 5173 is in use).

---

## 4. Additional Notes

- Make sure MongoDB is running before starting the backend.
- If using MongoDB Atlas, update the `MONGODB_URL` in your `.env` accordingly.
- For production, build the frontend/admin with `npm run build` and serve the static files as needed.

---

## 5. Project Structure

```
Food Delivery App/
│
├── Backend/      # Node.js/Express API
├── Frontend/     # React Client
└── admin/        # React Admin Dashboard
```

---

## 6. Scripts Reference

Each part supports these npm scripts:

- `npm install` – Install dependencies
- `npm start` or `npm run dev` – Start development server
- `npm run build` – Build for production (frontend/admin)

---

## 7. Contact

For any issues, please open an issue in this repository.
