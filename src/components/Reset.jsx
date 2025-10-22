import React, { useContext } from "react";
import { Link, useLocation } from "react-router";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";

const Reset = () => {
  const location = useLocation();
  const emailFromLogin = location.state?.email || "";
  const { resetPassword } = useContext(AuthContext);

  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    resetPassword(email)
      .then(() => toast.success("Reset password link has been sent to your email"))
      .catch((error) => toast.error(error.message));

    e.target.email.value = "";
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-base-200 text-base-content">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight">
          Forgot Password?
        </h2>
        <p className="text-sm text-base-content/60 text-center mt-2">
          Provide the email address associated with your account to recover your password
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleReset} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                defaultValue={emailFromLogin}
                className="block w-full rounded-md bg-base-300 px-3 py-2 text-sm text-base-content placeholder:text-base-content/60 focus:outline-2 focus:outline-primary focus:outline-offset-2"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-content hover:bg-primary-focus focus:outline-2 focus:outline-offset-2 focus:outline-primary cursor-pointer"
            >
              Send Password Reset Email
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-base-content/60">
            Remember your password?{" "}
            <Link
              to="/login"
              className="font-semibold text-primary hover:text-primary-focus"
            >
              Log in here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Reset;
