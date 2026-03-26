import React, { Children } from 'react'
import Unauthorized from "../../pages/Auth/Unauthorized"
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({children, allowedRoles}) => {

  // login from token/localstorage/api
const user = {login:true,role:'admin'}

// 401
if(!user.login){
return <Navigate to="/login" replace/>
}

//403
if(user.role!=='admin'){
return <Unauthorized/>
}

  return children
}

export default ProtectedRoute