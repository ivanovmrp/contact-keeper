import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';


const PrivateRoute = ({component: Component, ...rest}) => {

    const authContext = useContext(AuthContext);
    const { isAuthenticated, loading } = authContext;

    if (!isAuthenticated && !loading) {
        return <Navigate to='/login'/>;
    }

    return <Outlet/>;
}

export default PrivateRoute
