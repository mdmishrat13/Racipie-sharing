import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout/PublicLayout";
import Home from "../pages/public/home/home";
import Login from "../pages/public/Login/Login";
import Register from "../pages/public/Register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/login",
        element:<Login/>
      },
      {
        path: "/register",
        element:<Register/>
      }
    ]
  },
]);

export default router
