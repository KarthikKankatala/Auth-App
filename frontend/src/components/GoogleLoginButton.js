import React from "react";

function GoogleLoginButton() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full bg-red-500 text-white p-2 rounded flex items-center justify-center gap-2"
    >
      <svg width="20" height="20" viewBox="0 0 48 48">
        <g>
          <path
            fill="#4285F4"
            d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C35.64 2.36 30.13 0 24 0 14.82 0 6.73 5.8 2.69 14.09l7.98 6.2C12.33 13.13 17.68 9.5 24 9.5z"
          />
          <path
            fill="#34A853"
            d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.01l7.19 5.59C43.98 37.13 46.1 31.3 46.1 24.55z"
          />
          <path
            fill="#FBBC05"
            d="M9.67 28.29c-1.13-3.36-1.13-6.93 0-10.29l-7.98-6.2C-1.13 17.07-1.13 30.93 1.69 37.91l7.98-6.2z"
          />
          <path
            fill="#EA4335"
            d="M24 46c6.13 0 11.64-2.36 15.85-6.44l-7.19-5.59c-2.01 1.35-4.6 2.13-7.66 2.13-6.32 0-11.67-3.63-13.33-8.59l-7.98 6.2C6.73 42.2 14.82 46 24 46z"
          />
          <path fill="none" d="M0 0h48v48H0z" />
        </g>
      </svg>
      Sign in with Google
    </button>
  );
}

export default GoogleLoginButton;
