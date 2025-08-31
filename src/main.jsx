import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeaderPage from './Home/HeaderPage.jsx';
import ErrorPage from './ErrorPage.jsx';
import AboutPage from './Home/AboutPage.jsx';
import ContactPage from './Home/ContactPage.jsx';
import Login from './Home/Login.jsx';
import Register from './Home/Register.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Home/Homepage.jsx';
import AdminHeaderPage from './Admin/AdminHeaderPage.jsx';
import AdminHome from './Admin/AdminHome.jsx';
import TaskCardBox from './Admin/TaskCardBox.jsx';

const router = createBrowserRouter([
  // Home page routing
  {
   element: <HeaderPage />,   // ✅ wraps children with Header + Footer
    children: [
      { index: true, element: <Homepage /> },      // renders at "/"
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      {path: "login", element: <Login />},
      {path: "register", element: <Register />},
      { path: "*", element: <ErrorPage /> },    // fallback route
    ],
    
  },
  {
    path: "/admin",
    element :<AdminHeaderPage />,
    children: [
      {index: true, element : <AdminHome />},
      {path:"task", element : <TaskCardBox />},
    ],
  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
