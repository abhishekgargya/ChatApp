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

1️. Clone the Repository
git clone https://github.com/abhishekgargya/ChatApp.git
cd ChatApp

2️. Backend Setup
cd server
npm install

3. Create a .env file inside server/
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run backend

npm run dev

Backend will run on:

http://localhost:5000

3️. Frontend Setup

Open a new terminal:

cd client
npm install

Create a .env file inside client/
VITE_BACKEND_URL=http://localhost:5000

Run frontend
npm run dev

Frontend will run on:
http://localhost:5173


->Run Order:

Start MongoDB
Start Backend
Start Frontend