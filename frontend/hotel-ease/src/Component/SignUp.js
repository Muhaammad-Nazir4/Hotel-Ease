import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const navigateInstance = useNavigate();
  const [formData, setFormData] = useState({
    UserName: "",
    Email: "",
    Password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    const url = "http://localhost:5000/user/signup";
    //Make a POST request to your API endpoint with formData
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const Data = await response.json();
      if (response.ok) {
        // Handle success, for example, redirect to another page
        alert("Sign Up Successful!");
        const id = Data.User._id;
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
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              name="UserName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigateInstance("/");
              }}
            >
              Already Have an Account
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
