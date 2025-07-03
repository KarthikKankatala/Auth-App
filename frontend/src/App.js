import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

function App() {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    // Check for token in URL (after Google OAuth)
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      setUserToken(token);
      localStorage.setItem("token", token);
      // Optionally, remove token from URL
      window.history.replaceState({}, document.title, "/");
    }
  }, []);

  if (userToken) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 className="text-2xl font-bold mb-4">Welcome! You are logged in.</h1>
        <button
          onClick={() => {
            setUserToken(null);
            localStorage.removeItem("token");
          }}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    );
  }

  // Enhanced Navbar component
  const Navbar = () => {
    const location = useLocation();
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top shadow-sm mb-0"
        style={{
          borderRadius: "0 0 1.5rem 1.5rem",
          background: "rgba(255,255,255,0.95)",
          padding: "1rem 0.5rem",
          boxShadow: "0 4px 24px 0 rgba(31, 38, 135, 0.13)",
        }}
      >
        <div
          className="container d-flex justify-content-between align-items-center"
          style={{ maxWidth: 600 }}
        >
          <div className="d-flex align-items-center gap-2">
            <span
              style={{
                fontWeight: 900,
                fontSize: 28,
                color: "#11998e",
                letterSpacing: 2,
                marginRight: 12,
              }}
            >
              <span role="img" aria-label="logo">
                🔒
              </span>{" "}
              AuthApp
            </span>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <Link
              to="/login"
              className={`btn px-4 fw-bold ${
                location.pathname === "/login" || location.pathname === "/"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              style={{
                borderRadius: "2rem",
                fontSize: "1.1rem",
                letterSpacing: 1,
                fontWeight: 600,
                background:
                  location.pathname === "/login" || location.pathname === "/"
                    ? "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)"
                    : "",
                border:
                  location.pathname === "/login" || location.pathname === "/"
                    ? "none"
                    : "",
                color:
                  location.pathname === "/login" || location.pathname === "/"
                    ? "#fff"
                    : "",
                boxShadow:
                  location.pathname === "/login" || location.pathname === "/"
                    ? "0 2px 8px 0 rgba(56,239,125,0.15)"
                    : "",
                transition: "all 0.2s",
              }}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={`btn px-4 fw-bold ${
                location.pathname === "/register"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              style={{
                borderRadius: "2rem",
                fontSize: "1.1rem",
                letterSpacing: 1,
                fontWeight: 600,
                background:
                  location.pathname === "/register"
                    ? "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)"
                    : "",
                border: location.pathname === "/register" ? "none" : "",
                color: location.pathname === "/register" ? "#fff" : "",
                boxShadow:
                  location.pathname === "/register"
                    ? "0 2px 8px 0 rgba(56,239,125,0.15)"
                    : "",
                transition: "all 0.2s",
              }}
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <Router>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Navbar />
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(120deg, #f8ffae 0%, #43c6ac 100%)",
          }}
        >
          <div style={{ width: "100%", maxWidth: 420 }}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
