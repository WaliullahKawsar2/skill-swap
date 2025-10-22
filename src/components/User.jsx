import React, { useEffect, useContext } from "react";
import "tippy.js/dist/tippy.css";
import tippy from "tippy.js";
import { AuthContext } from "./AuthContext";
import { Link } from "react-router";

const User = () => {
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    tippy(".link", { placement: "bottom" });
  }, []);


  if (loading)
    return <div className="text-center text-base-content mt-20">Loading...</div>;

  if (!user)
    return (
      <div className="text-center text-base-content mt-20">
        Please log in to view your profile.
      </div>
    );

  

  return (
    <div className="font-sans antialiased leading-normal tracking-wider min-h-screen transition-all duration-500">
      <div className="max-w-4xl flex flex-col lg:flex-row items-center h-auto lg:h-screen mx-auto my-32 relative gap-6">
        {/* Left Side */}
        <div className="w-full lg:w-3/5 rounded-lg shadow-2xl mx-6 lg:mx-0 bg-base-200 text-base-content p-6 md:p-12 text-center lg:text-left transition-colors duration-500">

          

          {/* Profile Picture - Mobile */}
          <div
            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
            style={{
              backgroundImage: `url(${
                user?.photoURL || "https://source.unsplash.com/MP0IUfwrn0A"
              })`,
            }}
          ></div>

          {/* Name */}
          <h1 className="text-3xl font-bold pt-4 lg:pt-0">{user?.displayName || "Your Name"}</h1>

          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-primary opacity-25"></div>

          {/* Profile Info */}
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            Web Developer
          </p>

          <p className="pt-2 text-sm flex items-center justify-center lg:justify-start text-muted">
            {user?.email || "you@example.com"}
          </p>

          <p className="pt-4 text-sm">
            Passionate about technology, creativity, and problem-solving.
          </p>

          <div className="pt-8 pb-4">
            <Link to={"/settings"} className="btn btn-success btn-outline">
              Update your profile
            </Link>
          </div>
        </div>

        {/* Right Side - Desktop Profile Image */}
        <div className="w-full lg:w-2/5">
          <img
            src={user?.photoURL || "https://source.unsplash.com/MP0IUfwrn0A"}
            alt="Profile"
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default User;
