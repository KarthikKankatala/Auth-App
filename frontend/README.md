A full-stack user authentication system with Node.js, Express, MongoDB, Google OAuth 2.0 (backend), and React.js (frontend). Features registration, login, Google Sign-In, form validation, and a modern responsive UI.

---

## Features

- User registration & login with validation and password hashing
- Google OAuth 2.0 login
- Secure user data storage (MongoDB)
- Responsive, modern UI (React + Bootstrap)
- Toast notifications for feedback

---

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB Atlas account (or local MongoDB)
- Google Cloud account (for OAuth credentials)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd First
```

### 2. Backend Setup

```bash
cd backend
npm install
```

#### Create a `.env` file in `backend/` with:

```
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback
JWT_SECRET=your_jwt_secret
```

##### How to get these URLs:

- **MONGO_URI**: Go to [MongoDB Atlas](https://cloud.mongodb.com/), create a cluster, and get the connection string from "Connect > Drivers > Node.js".
- **Google OAuth**: Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials), create OAuth 2.0 credentials. Set the callback URL to `http://localhost:5000/api/auth/google/callback`.
- **JWT_SECRET**: Any random string (for signing tokens).

### 3. Start the Backend

```bash
node server.js
```

### 4. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

---

## Testing the App

- Visit [http://localhost:3000](http://localhost:3000)
- Register a new user or login with Google
- Try invalid inputs to see validation and error toasts
- Check MongoDB to see user records

---

## Pushing to GitHub

1. Initialize git (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Replace `<your-repo-url>` with your GitHub repository URL.

---

## Project Structure

```
First/
  backend/
    models/
    routes/
    server.js
    package.json
  frontend/
    public/
    src/
    package.json
```

---

## Notes

- Never commit your `.env` file or secrets to GitHub.
- For production, set environment variables securely and use HTTPS URLs.
