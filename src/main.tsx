import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/pages/Login.tsx';
import Dashboard from './components/pages/panel/Dashboard.tsx';
import Profile from './components/pages/panel/Profile.tsx';
import Users from './components/pages/panel/admin/users/Users.tsx';
import UserSettings from './components/pages/panel/admin/users/UserSettings.tsx';
import SignUp from './components/pages/SingUp.tsx';
import Entrepreneurship from './components/pages/Entrepreneurship.tsx';
import Blogs from './components/pages/Blogs.tsx';
import TouristRoutes from './components/pages/TouristRoutes.tsx';
import { AuthProvider } from './Auth/AuthProvider.tsx';
import { ProSidebarProvider } from "react-pro-sidebar";
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes.tsx'

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
        ],
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider> 
      <ProSidebarProvider>
        <RouterProvider router={router} />
      </ProSidebarProvider>
    </AuthProvider>
  </React.StrictMode>,
)
