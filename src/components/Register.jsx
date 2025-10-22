import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import logo from "../assets/logo.png";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";
import GoogleSignup from "./GoogleSignup";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();
  
  const validatePassword = (value) => {
    if (value.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    if (!/[A-Z]/.test(value)) {
      setError("Password must contain at least one uppercase letter.");
      return false;
    }
    if (!/[a-z]/.test(value)) {
      setError("Password must contain at least one lowercase letter.");
      return false;
    }
    setError("");
    return true;
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photUrl.value;

    if (!validatePassword(password)) return;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.photoURL = photoUrl;
        user.displayName = name;
        toast.success("Registration Successful");
        navigate("/login")
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-base-content px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <img alt="Skill Swap" src={logo} className="mx-auto h-20 w-auto" />
        <h2 className="mt-6 text-2xl font-bold">Sign up to your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleRegister}
          className="card bg-base-100 shadow-lg p-6 space-y-6 border border-base-300"
        >
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              name="name"
              type="text"
              required
            
              className="input input-bordered w-full"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <input
              name="photUrl"
              type="text"
              required
            
              className="input input-bordered w-full"
            />
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Email Address</span>
            </label>
            <input
              name="email"
              type="email"
              required
            
              autoComplete="email"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handleChange}
              
                className={`input input-bordered w-full pr-10 ${error ? "border-error" : ""}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-base-content/60 hover:text-primary cursor-pointer z-5"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>


            {error && <p className="text-error text-sm mt-1">{error}</p>}
          </div>


          <div>
            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </div>
        </form>

        <div className="mt-3">
          <GoogleSignup />
        </div>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
