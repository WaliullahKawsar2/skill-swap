import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/Routes.jsx";
import AuthProvider from "./components/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./components/UserContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <UserProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="bottom-center" reverseOrder={false} />
      </UserProvider>
    </AuthProvider>
  </StrictMode>
);
