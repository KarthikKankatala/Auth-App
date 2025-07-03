import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("All fields are required.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format.");
      return;
    }
    const passwordRegex = /^(?=.*[0-9!@#$%^&*])(?=.{6,})/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters and include a number or special character."
      );
      return;
    }
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      toast.success("Registration successful! You can now log in.");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed.");
    }
    setLoading(false);
  };

  return (
    <div
      className="card shadow-lg border-0 mx-auto d-flex flex-column justify-content-center align-items-center"
      style={{
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(12px)",
        borderRadius: "2rem",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        border: "1px solid rgba(255,255,255,0.18)",
        maxWidth: 500,
        width: "100%",
        minHeight: "60vh",
        padding: "2.5rem 2rem",
        margin: "2rem auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="w-100" style={{ maxWidth: 340 }}>
        <h2
          className="mb-4 text-center"
          style={{ color: "#11998e", fontWeight: 800, letterSpacing: 1 }}
        >
          Register
        </h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Name 🧑"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control form-control-lg border-info shadow-sm"
              style={{
                fontSize: "1.1rem",
                borderRadius: "1rem",
                transition: "box-shadow 0.2s",
                marginBottom: "1rem",
              }}
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email ✉️"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control form-control-lg border-info shadow-sm"
              style={{
                fontSize: "1.1rem",
                borderRadius: "1rem",
                transition: "box-shadow 0.2s",
                marginBottom: "1rem",
              }}
            />
          </div>
          <div className="mb-3 input-group align-items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder={showPassword ? "Password 👁️" : "Password 🙈"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control form-control-lg border-info shadow-sm"
              style={{
                fontSize: "1.1rem",
                borderRadius: "1rem",
                transition: "box-shadow 0.2s",
              }}
            />
            <button
              type="button"
              className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
              style={{
                fontSize: "1.5rem",
                border: "none",
                background: "transparent",
                transition: "transform 0.2s",
                marginLeft: "-2.5rem",
              }}
              aria-label="Toggle password visibility"
            >
              <span
                style={{
                  transition: "opacity 0.2s, transform 0.2s",
                  opacity: 1,
                  transform: showPassword ? "scale(1.2)" : "scale(1)",
                }}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </button>
          </div>
          <button
            type="submit"
            className="btn w-100 mt-2 shadow-lg"
            style={{
              background: "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)",
              border: "none",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "#fff",
              borderRadius: "1rem",
              boxShadow: "0 4px 16px 0 rgba(56,239,125,0.15)",
              marginTop: "1.2rem",
            }}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Register;
