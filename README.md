# ChatApp – Run Locally

## Prerequisites
Make sure you have installed:
- Node.js (v18+ recommended)
- npm
- MongoDB (local or Atlas)

---

## Project Structure
```bash
ChatApp/
├── client/
├── server/
└── .gitignore
```

---

## 1️. Clone the Repository
```bash
git clone https://github.com/abhishekgargya/ChatApp.git
cd ChatApp
```

---

## 2️. Backend Setup
```bash
cd server
npm install
```

### Create a `.env` file inside `server/`
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run backend
```bash
npm run dev
```

Backend will run on:
```text
http://localhost:5000
```

---

## 3️. Frontend Setup
Open a new terminal:
```bash
cd client
npm install
```

### Create a `.env` file inside `client/`
```env
VITE_BACKEND_URL=http://localhost:5000
```

### Run frontend
```bash
npm run dev
```

Frontend will run on:
```text
http://localhost:5173
```

---

## Run Order (Important)
1. Start MongoDB  
2. Start Backend  
3. Start Frontend  
