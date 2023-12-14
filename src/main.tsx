import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/pages/Login.tsx';
import Dashboard from './components/pages/panel/Dashboard.tsx';
import Profile from './components/pages/panel/Profile.tsx';
import Users from './components/pages/panel/admin/users/Users.tsx';
import MicroSites from './components/pages/panel/admin/MicroSites/MicroSite.tsx'
import UserSettings from './components/pages/panel/admin/users/UserSettings.tsx';
import SignUp from './components/pages/SingUp.tsx';
import Entrepreneurship from './components/pages/Entrepreneurship.tsx';
import Blogs from './components/pages/Blogs.tsx';
import TouristRoutes from './components/pages/TouristRoutes.tsx';
import { ProSidebarProvider } from "react-pro-sidebar";
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes.tsx'
import EmailConfirmation from './components/pages/EmailConfirmation.tsx';
import ResetPasswordComponent from './components/pages/RecoverPassword.tsx';
import EmailConfirmationRegister from './components/pages/EmailConfirmationRegister.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp/>
      },
      {
        path: "/Entrepreneurship",
        element: <Entrepreneurship/>
      },
      {
        path: "/Blogs",
        element: <Blogs/>
      },
      {
        path: "/TouristRoutes",
        element: <TouristRoutes/>
      },
      {
        path: "/EmailConfirmation",
        element: <EmailConfirmation/>
      },
      {
        path: "/RecoverPassword/:token",
        element: <ResetPasswordComponent />
      },
      {
        path: "/VerifyEmail/:token",
        element: <EmailConfirmationRegister />
      },
      {
        path: "/EmailConfirmation",
        element: <EmailConfirmation/>
      }
    ]
  },
  {
    path: "/panel",
    element: <ProtectedRoutes/>,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "admin",
        children: [
        {
          path: "users",
          element: <Users />
        },
        {
          path: "userSettings",
          element: <UserSettings />
        },
        {
          path: "microSites",
          element: <MicroSites />
        },
        ],
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProSidebarProvider>
      <RouterProvider router={router} />
    </ProSidebarProvider>
  </React.StrictMode>,
)
