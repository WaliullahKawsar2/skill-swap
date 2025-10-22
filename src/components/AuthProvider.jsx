import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  const logOut = ()=>{
    return signOut(auth);
  }

  const resetPassword = (email) =>{   
  return sendPasswordResetEmail(auth, email)
  }

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  
  const provider = new GoogleAuthProvider();

  const googleSignUp = () => {
    return signInWithPopup(auth, provider)
    
  }

  const authInfo = {
    createUser,
    logInUser,
    logOut,
    user,
    googleSignUp,
    loading,
    resetPassword,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
