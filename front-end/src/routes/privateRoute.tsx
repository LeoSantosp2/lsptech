import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface Children {
    children: any;
}

export default function PrivateRoute(_children: Children) {
    const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

    return isLoggedIn ? _children.children : <Navigate to={'/login'} />;
}
