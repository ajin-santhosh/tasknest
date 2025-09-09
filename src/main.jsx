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
import HomePage from `./Home/HomePage.jsx`;
import AdminHeaderPage from './Admin/AdminHeaderPage.jsx';
import AdminHome from './Admin/AdminHome.jsx';
import TaskCardBox from './Admin/TaskCardBox.jsx';
import TaskCardUpdate from './Admin/task/TaskCardUpdate.jsx';
import AddTask from './Admin/task/AddTask.jsx';
import AdminVerifyUsers from './Admin/AdminVerifyUsers.jsx';
import AdminViewUsers from './Admin/AdminViewUsers.jsx';
import UserHeaderPage from './Users/UserHeaderPage.jsx';
import UserHomePage from './Users/UserHomePage.jsx';
import UserNotVerifiedPage from './Users/UserNotVerifiedPage.jsx';
import UserTaskCardBox from './Users/UserCards/UserTaskCardBox.jsx';
import UserAddTask from './Users/UserCards/UserAddTask.jsx';
import UserUpdateTask from './Users/UserCards/UserUpdateTask.jsx';

const router = createBrowserRouter([
  // Home page routing
  {
   element: <HeaderPage />,   // ✅ wraps children with Header + Footer
    children: [
      { index: true, element: <HomePage /> },      // renders at "/"
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
      {path:"task/:id", element : <TaskCardBox />},
      {path:"task/:id/taskupdate", element : <TaskCardUpdate/>},
      {path:"addtask", element : <AddTask />},
      {path:"verify_users", element : <AdminVerifyUsers />},
      {path:"view_users", element : <AdminViewUsers />},

    ],
  },
  {
    path:"/user/:userid/:name",
    element: <UserHeaderPage />,
    children:[
    {index: true, element : <UserHomePage />},
    {path:"usertask/:id", element : <UserTaskCardBox />},
    {path:"user_addtask", element : <UserAddTask />},
    {path:"usertask/:id/user_update_task", element : <UserUpdateTask/>},


    ],  

  },
  {
    path: "/user_not_verfied",element: <UserNotVerifiedPage />
  },

  
]);
// always remember to check speelling 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
