import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Login from "../components/Login";
import Register from "../components/Register";
import MainBody from "../components/MainBody";
import Settings from "../components/Settings";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import SkillDetails from "../components/SkillDetails";
import Reset from "../components/Reset";
import User from "../components/User";
import PrivacyPolicy from "../components/PrivacyPolicy";
import AllCourses from "../components/AllCourses";
import BookSession from "../components/BookSession";
import BookedSessions from "../components/BookedSessions";
import HowItWorks from "../pages/HowItWorks";

const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayouts,
        children:[
            {
                path: "/",
                Component:MainBody
            },

            {
                path:"/login",
                Component:Login
            },
            {
                path:"/register",
                Component:Register
            },
            {
                path:"/settings",
                Component:Settings
            },
            {
                path:"/book",
                element:<PrivateRoutes><BookSession></BookSession></PrivateRoutes>
            },
            {
                path:"/bookedSessions",
                element:<PrivateRoutes><BookedSessions></BookedSessions></PrivateRoutes>
            },
            {
                path:"/details/:id",
                element:<PrivateRoutes><SkillDetails></SkillDetails></PrivateRoutes>
            },
            {
                path:"/reset",
                Component:Reset
            },
            {
                path:"/user",
                Component:User
            },
            {
                path:"/courses",
                Component:AllCourses
            },
            {
                path:"/privacy-policy",
                Component:PrivacyPolicy
            },
            {
                path:"/how-to-use",
                Component:HowItWorks
            },
        ]
    },
    {
        path:"*",
        Component:ErrorPage
    }

])
export default router;