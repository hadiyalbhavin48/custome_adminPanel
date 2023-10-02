import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {

    let loggin = false;

    if (loggin) {
        return <Outlet />
    }
    else {
        return <Navigate to={"/login"} />
    }
    // return (
    //     <div>
    //         <h1>privateRoute</h1>

    //         <Outlet />
    //     </div>
    // )
}

export default PrivateRoute