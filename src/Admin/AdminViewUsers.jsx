import React from 'react'
import img1 from "../assets/user (1).svg";
import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow-left-circle.svg"
import img2 from "../assets/users.svg"

function AdminViewUsers() {

    const [user, setUser] = useState([])

    useEffect(() => {
    axios
      .get(`http://localhost:5000/users?status=1`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Error fetching task:", err));
  }, []);

  
  function Deleteuser(id){
          axios.delete(`http://localhost:5000/users/${id}`)
    .then(() => {
      console.log("user deleted!");
      alert("User deleted successfully!");
      setUser((prev) => prev.filter((u) => u.id !== id));


    })
    .catch(err => {
      console.error("Error deleting task:", err);
    });
  }
  return (
    <>
    
            <div className="grid grid-cols-2  items-center p-1 "> 
               <Link to={'/admin'}>           
            <img src={arrow} alt="user" className="w-8 h-9 border-1 border-white-500 rounded-md w-10 m-2 hover:bg-gray-500 p-1" />
            </Link>
            <Link to={'/admin/verify_users'}>
             <div className="flex  items-center border-1 border-white-500 rounded-md w-40 m-2 hover:bg-gray-500 gap-2 p-1 justify-self-end">
                <p>Verify Users</p>
               <img src={img2} alt="user" className="w-6 h-8" />

             </div>
            </Link>
            

            </div>
           
    { user.map((use)=>(
      <div className="bg-white dark:bg-slate-900 rounded-xl px-6 py-8 ring-1 ring-slate-900/5 shadow-xl m-2"
      key={use.id}>
        <div className="flex gap-2 items-center">
            <img src={img1} alt="img1" />
            <h3 className="text-slate-900 dark:text-white text-xl font-sans tracking-tightt font-bold" >
          {use.name}
        </h3>
            </div>

        <h3 className="text-slate-900 dark:text-white mt-5 text-lg font-sans tracking-tight"></h3>
        <hr />
        <h5 className=" mt-2 text-base px-2 py-1 w-40  rounded-lg bg-gray-700 text- font-semibold text-gray-500">
          <span className="text-gray-400">Status: {use.status}</span>
        </h5>
        <h5 className="text-slate-900 dark:text-white mt-1 text-base font-mono tracking-tight" key={use.id}>
          User Name:{use.username}
        </h5>
        <h5 className="text-slate-900 dark:text-white mt-1 text-base font-mono tracking-tight">
          Email:{use.email}
        </h5>
        <div className="flex sm:flex-row sm:items-center gap-2 sm:gap-4 ">
          {" "}
          <h5 className="text-slate-900 dark:text-white mt-1 text-base font-mono tracking-tight">
            User Type: {use.usertype}
          </h5>
        
        </div>
    

        <div className="p-2 flex gap-9 my-4">
            
          <button class=" my-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-800" onClick={()=>Deleteuser(use.id)}>
            Delete
          </button>

          
        </div>
      </div>
     ))}
     
    </>
  )
}

export default AdminViewUsers