import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Incidents from "./components/Incidents";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/incidents",
        element: <Incidents></Incidents>
    }
])


export default router;