import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/pages/Login.tsx';
import SignUp from './components/pages/SingUp.tsx'
// import { AuthProvider } from './Auth/AuthProvider.tsx';

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
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
      <RouterProvider router={router} />
    {/* </AuthProvider> */}
  </React.StrictMode>,
)
