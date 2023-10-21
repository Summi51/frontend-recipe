import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const data = JSON.parse(localStorage.getItem('oath'))
    if(!data){
        return <Navigate to='/'/>
    }
    return children
}

export default PrivateRoute