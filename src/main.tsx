import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/pages/Login.tsx';
<<<<<<< HEAD
import SignUp from './components/pages/SingUp.tsx'
=======
import Register from './components/pages/Register.tsx'
>>>>>>> 8e9cb59c26844cee567859014310ee1c6939f7ad
// import { AuthProvider } from './Auth/AuthProvider.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
<<<<<<< HEAD
    path: "/signup",
    element: <SignUp/>
=======
    path: "/Register",
    element: <Register />
>>>>>>> 8e9cb59c26844cee567859014310ee1c6939f7ad
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
      <RouterProvider router={router} />
    {/* </AuthProvider> */}
  </React.StrictMode>,
)
