import React, { use } from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import TaskCard from './TaskCard'
import { Link } from 'react-router-dom'
import plus from "../assets/plus-square.svg";
function AdminHome() {
const [filters, setFilters] = useState("");
const [tasks, setTasks] = useState([])
const [search, setsearch] = useState("")

    useEffect(()=>{
        axios.get("https://68c048970b196b9ce1c3def3.mockapi.io/tasknest/tasks")
      .then((res) => {
        setTasks(res.data);   // ✅ res.data contains the array
      })
      .catch((err) => {
        console.error("Error fetching tasks:", err);
      });
  }, []);

       
  return (
   <>
   <section className=''>
  {/* Admin panel top controls */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 ">
    {/* Search */}
    <div className="flex justify-center p-2">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        className="w-full sm:w-5/6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Filter */}
    <div className="flex justify-center sm:justify-start">
      <select
        className="m-2 p-2 rounded-lg bg-gray-800 text-white h-min focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
        value={filters}
        onChange={(e) => setFilters(e.target.value)}
      >
        <option className="bg-gray-800 text-white" value="">
          All
        </option>
        <option className="bg-gray-800 text-white" value="low">
          Low
        </option>
        <option className="bg-gray-800 text-white" value="medium">
          Medium
        </option>
        <option className="bg-gray-800 text-white" value="high">
          High
        </option>
      </select>
    </div>

    {/* Add Task button */}
    <div className="flex justify-center sm:justify-end">
      <Link to={"addtask"}>
        <div className="flex items-center border-1 border-white-500 rounded-md w-auto m-2 hover:bg-gray-500 p-1 gap-2">
          <button className="p-2">Add Task</button>
          <img src={plus} alt="user" className="w-6 h-6" />
        </div>
      </Link>
    </div>
  </div>
</section>

<section className="bg-gray-900 m-5 rounded-md p-2">
  {/* Column Headers */}
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mx-4 my-3 justify-center items-center border rounded-lg border-gray-400">
    <h2 className="text-center text-lg font-semibold font-mono text-gray-300">
      To-Do
    </h2>
    <h2 className="text-center text-lg font-semibold font-mono text-gray-300">
      In-Progress
    </h2>
    <h2 className="text-center text-lg font-semibold font-mono text-gray-300">
      Blocked
    </h2>
    <h2 className="text-center text-lg font-semibold font-mono text-gray-300">
      Completed
    </h2>
  </div>

  {/* Task Columns */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 m-3 justify-center">
    {/* To-Do */}
    <div className="bg-gray-800 m-2 rounded-md justify-center">
      {tasks
        .filter(
          (task) =>
            task.status === "todo" &&
            (filters === "" || task.priority === filters) &&
            (search === "" ||
              task.taskname.toLowerCase().includes(search.toLowerCase()))
        )
        .map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </div>

    {/* In-Progress */}
    <div className="bg-gray-800 m-2 rounded-md justify-center">
      {tasks
        .filter(
          (task) =>
            task.status === "inprogress" &&
            (filters === "" || task.priority === filters) &&
            (search === "" ||
              task.taskname.toLowerCase().includes(search.toLowerCase()))
        )
        .map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </div>

    {/* Blocked */}
    <div className="bg-gray-800 m-2 rounded-md justify-center">
      {tasks
        .filter(
          (task) =>
            task.status === "blocked" &&
            (filters === "" || task.priority === filters) &&
            (search === "" ||
              task.taskname.toLowerCase().includes(search.toLowerCase()))
        )
        .map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </div>

    {/* Completed */}
    <div className="bg-gray-800 m-2 rounded-md justify-center">
      {tasks
        .filter(
          (task) =>
            task.status === "completed" &&
            (filters === "" || task.priority === filters) &&
            (search === "" ||
              task.taskname.toLowerCase().includes(search.toLowerCase()))
        )
        .map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </div>
  </div>
</section>

   </>
  )
}

export default AdminHome