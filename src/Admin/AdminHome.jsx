import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import TaskCard from './TaskCard'

function AdminHome() {

    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/tasks")
      .then((res) => {
        setTasks(res.data);   // ✅ res.data contains the array
      })
      .catch((err) => {
        console.error("Error fetching tasks:", err);
      });
  }, []);

  return (
   <>
   <section className="bg-gray-700 m-5 rounded-md p-2"> {/*  */}
         <div class="grid grid-cols-4 gap-2 mx-4 m justify-center  items-center border rounded-lg border-gray-400">
            <h2 className='text-center text-lg font-semibold font-mono text-gray-300	'>To-Do</h2>
            <h2 className='text-center text-lg font-semibold font-mono text-gray-300	'>In-Progress</h2>

            <h2 className='text-center text-lg font-semibold font-mono text-gray-300	'>Blocked</h2>
            <h2 className='text-center text-lg font-semibold font-mono text-gray-300'>Completed</h2>

         </div>
         
        <div class="grid grid-cols-4 gap-2 m-3 justify-center">
           
      <div className='bg-gray-800 m-2 rounded-md justify-center'>
        
        {
           tasks.filter((task) =>task.status === "todo")
           .map((task)=>(
            <TaskCard key={task.id} task={task} />
           ))
        }
      </div>
      <div className='bg-gray-800 m-2 rounded-md justify-center'>

        {
           tasks.filter((task) =>task.status === "inprogress")
           .map((task)=>(
            <TaskCard key={task.id} task={task} />
           ))
        }
      </div>
      <div className='bg-gray-800 m-2 rounded-md justify-center'>
        {
           tasks.filter((task) =>task.status === "blocked")
           .map((task)=>(
            <TaskCard key={task.id} task={task} />
           ))
        }
      </div>
      <div className='bg-gray-800 m-2 rounded-md justify-center'>
        {
           tasks.filter((task) =>task.status === "completed")
           .map((task)=>(
            <TaskCard key={task.id} task={task} />
           ))
        }
      </div>
  </div>
      </section>
   </>
  )
}

export default AdminHome