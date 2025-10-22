import React, { useState } from "react";

const PasswordInput = ({ onChange }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  
  const validatePassword = (value) => {
    if (!/[A-Z]/.test(value)) {
      setError("Password must contain at least one uppercase letter.");
      return false;
    }
    if (!/[a-z]/.test(value)) {
      setError("Password must contain at least one lowercase letter.");
      return false;
    }
    if (value.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    setError(""); 
    return true;
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
    onChange && onChange(newPassword);
  };

  return (
    <div className="w-full">
      <label className="label">
        <span className="label-text font-medium">Password</span>
      </label>

      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
        className={`input input-bordered w-full ${error ? "border-error" : ""}`}
      />

      {error && <p className="text-error text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PasswordInput;
