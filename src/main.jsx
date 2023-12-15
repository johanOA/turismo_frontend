import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/pages/Login.jsx';
import Dashboard from './components/pages/panel/Dashboard.jsx';
import Profile from './components/pages/panel/Profile.jsx';
import Users from './components/pages/panel/admin/users/Users.jsx';
import MicroSite from './components/pages/panel/admin/MicroSites/MicroSite.jsx'
import UserSettings from './components/pages/panel/admin/users/UserSettings.jsx';
import SignUp from './components/pages/SingUp.jsx';
import Entrepreneurship from './components/pages/Entrepreneurship.jsx';
import Blogs from './components/pages/Blogs.jsx';
import TouristRoutes from './components/pages/TouristRoutes.jsx';
import { ProSidebarProvider } from "react-pro-sidebar";
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes.jsx'
import EmailConfirmation from './components/pages/EmailConfirmation.jsx';
import ResetPasswordComponent from './components/pages/RecoverPassword.jsx';
import EmailConfirmationRegister from './components/pages/EmailConfirmationRegister.jsx';
import PlaceDetailPage from './components/MicrositeDetail/PlaceDetailPage.jsx';

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
        element: <TouristRoutes/>,
      },
      {
        path: "/TouristRoutes/ViewTour",
        element: <PlaceDetailPage/>
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
          path: "microSite",
          element: <MicroSite />
        },
        ],
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProSidebarProvider>
      <RouterProvider router={router} />
    </ProSidebarProvider>
  </React.StrictMode>,
)
