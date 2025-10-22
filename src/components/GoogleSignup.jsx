import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const GoogleSignup = () => {
const { googleSignUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignup = () => {
    googleSignUp()
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Login Successful");
        navigate(`${location.state? location.state : "/"}`); // navigate here
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
    
    return (
        <div className="flex flex-col items-center space-y-2 mt-4">
            <p>Or Continue with</p>
            <FcGoogle onClick={handleGoogleSignup} className="cursor-pointer text-3xl" />
          </div>
    );
};

export default GoogleSignup;