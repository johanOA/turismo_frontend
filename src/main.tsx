import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/pages/Login.tsx';
import Panel from './components/pages/panel/Panel.tsx';
import SignUp from './components/pages/SingUp.tsx'
 import { AuthProvider } from './Auth/AuthProvider.tsx';
 import { ProSidebarProvider } from "react-pro-sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/panel",
    element: <Panel/>
  }
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
