import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
const Private = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
   if(loading){
    return  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
   }
    if(user){
     return children
    }
    return (
        <Navigate state={{from: location}} to='/logIn' replace></Navigate>
    );
};

export default Private;