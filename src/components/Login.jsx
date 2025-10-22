import { Link, useLocation, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "./AuthContext";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import GoogleSignup from "./GoogleSignup";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { logInUser } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;

    logInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Login Successful");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-base-content px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <img alt="Skill Swap" src={logo} className="mx-auto h-20 w-auto" />
        <h2 className="mt-6 text-2xl font-bold">Sign in to your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleLogIn}
          className="card bg-base-100 shadow-lg p-6 space-y-6 border border-base-300"
        >
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="label">
              <span className="label-text font-medium">Email Address</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full outline-none"
              autoComplete="email"
            />
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <button
                type="button"
                onClick={() => navigate("/reset", { state: { email } })}
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="input input-bordered w-full pr-10 outline-none "
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-base-content/60 hover:text-primary cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="btn btn-primary w-full">
              Sign In
            </button>
            <div className="mt-3">
              <GoogleSignup />
            </div>
          </div>
        </form>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
