import ForgetPassword from "../pages/Auth/ForgetPassword";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";

const AuthRoutes=[
    {path:"login",element:<Login/>},
    {path:"forgot-password",element:<ForgetPassword/>},
    {path:"signup",element:<SignUp/>},
]

export default AuthRoutes;