import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigateInstance = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    console.log(email, password);
    e.preventDefault();
    const url = "http://localhost:5000/user/signin";
    //Make a POST request to your API endpoint with formData
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const Data = await response.json();
      if (response.ok) {
        // Handle success, for example, redirect to another page
        alert("Sign Up Successful!");
        const id = Data.userid;
        console.log(id);
        navigateInstance(`/home/${id}`);
      } else {
        alert(Data.err);
        console.error("Failed to submit the form");
      }
    } catch (error) {
      alert("Sign Up Failed! 2");
      console.error("Error:", error);
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigateInstance("/sign-up");
              }}
            >
              Create an Account
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
