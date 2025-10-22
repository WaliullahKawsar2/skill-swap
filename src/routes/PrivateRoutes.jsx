import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { UserContext } from '../components/UserContext';
import Loader from '../components/Loader';

const PrivateRoutes = ({children}) => {
     const { loading: courseLoading } = useContext(UserContext);
  const { loading: authLoading  } = useContext(AuthContext)

  const location = useLocation()
  const {user} = useContext(AuthContext)
  if(user) return children
  if(authLoading || courseLoading) return(<Loader></Loader>)
    return (
        <Navigate state={location.pathname} to={"/login"}></Navigate>
    );
};

export default PrivateRoutes;