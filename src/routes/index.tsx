import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"*",
        element: <ErrorPage/>
    }

])

export default router;