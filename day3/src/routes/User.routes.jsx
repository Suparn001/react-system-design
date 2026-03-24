import { lazy } from "react";

// ✅ Normal imports (lightweight components)
import UserAdd from "../pages/User/UserAdd";
import UserDelete from "../pages/User/UserDelete";
import UserUpdate from "../pages/User/UserUpdate";

// ✅ Lazy load heavy component (code splitting)
// This will load ONLY when user visits `/user-list`
const UserList = lazy(() => import("../pages/User/UserList"));

/*
|--------------------------------------------------------------------------
| User Routes Configuration
|--------------------------------------------------------------------------
| Each object represents a route for react-router
|
| path   → URL path
| element → Component to render
|
| NOTE:
| - Lazy loaded components MUST be wrapped inside <Suspense> in parent
|   (usually in App.js)
|
*/

const UserRoutes = [
  {
    path: "user-add",
    element: <UserAdd />, // Lightweight → direct import
  },
  {
    path: "user-update",
    element: <UserUpdate />,
  },
  {
    path: "user-list",
    element: <UserList />, // Lazy loaded → improves performance
  },
  {
    path: "user-delete",
    element: <UserDelete />,
  },
];

export default UserRoutes;