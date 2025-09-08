import React, { use } from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import UserTaskCard from './UserCards/UserTaskCard'
import { Link } from 'react-router-dom'
import plus from "../assets/plus-square.svg";
import { useParams } from "react-router-dom";


function UserHomePage() { 
  let {name} = useParams()
const [filters, setFilters] = useState("");
const [tasks, setTasks] = useState([])
const [search, setsearch] = useState("")
  const [isOn, setIsOn] = useState(false);
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
   <section>
  {/* Admin panel top controls */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-5">
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
      <button
      type="button"
      onClick={() => setIsOn(!isOn)}
      className={`m-2 flex items-center gap-2 p-2 h-11 rounded-lg transition-colors ${
        isOn ? "bg-gray-500 text-white" : "bg-gray-800 text-white"
      }`}
    >
      <div
        className={`w-5 h-5 rounded-full bg-white transition-transform ${
          isOn ? "translate-x-1" : ""
        }`}
      ></div>
      <span className="text-sm font-medium">{isOn ? "My Board" : "Team Board"}</span>
    </button>
    </div>

    {/* Add Task button */}
    <div className="flex justify-center sm:justify-end">
      <Link to={"user_addtask"}>
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
      {isOn ? (
        tasks
        .filter(
          (task) =>
            task.status === "todo" &&
            (task.assignee === name ||
            task.owner === name) &&
            (filters === "" || task.priority === filters) &&
            (search === "" ||  task.taskname.toLowerCase().includes(search.toLowerCase()))
        )
        .map((task) => (
          <UserTaskCard key={task.id} task={task} />
        ))
      ) : (
        tasks
        .filter(
          (task) =>
            task.status === "todo" &&
            (filters === "" || task.priority === filters) &&
            (search === "" ||  task.taskname.toLowerCase().includes(search.toLowerCase()))
        )
        .map((task) => (
          <UserTaskCard key={task.id} task={task} />
        ))
      )}
      {/* {tasks
        .filter(
          (task) =>
            task.status === "todo" &&
            (filters === "" || task.priority === filters) &&
            (search === "" ||
              task.taskname.toLowerCase().includes(search.toLowerCase()))
        )
        .map((task) => (
          <UserTaskCard key={task.id} task={task} />
        ))} */}
    </div>

    {/* In-Progress */}
    <div className="bg-gray-800 m-2 rounded-md justify-center">
      {isOn ? (
        tasks
        .filter(
          (task) =>
            task.status === "inprogress" &&
            (task.assignee === name ||
            task.owner === name) &&
            (filters === "" || task.priority === filters) &&
            (search === "" ||  task.taskname.toLowerCase().includes(search.toLowerCase()))
        )
        .map((task) => (
          <UserTaskCard key={task.id} task={task} />
        ))
      ) : (
        tasks
        .filter(
          (task) =>
            task.status === "inprogress" &&
            (filters === "" || task.priority === filters) &&
            (search === "" ||  task.taskname.toLowerCase().includes(search.toLowerCase()))
        )
        .map((task) => (
          <UserTaskCard key={task.id} task={task} />
        ))
      )}
    </div>

    {/* Blocked */}
    <div className="bg-gray-800 m-2 rounded-md justify-center">
      {isOn ? (
        tasks
        .filter(
          (task) =>
            task.status === "blocked" &&
            (task.assignee === name ||
            task.owner === name) &&
            (filters === "" || task.priority === filters) &&
            (search === "" ||  task.taskname.toLowerCase().includes(search.toLowerCase()))
        )
        .map((task) => (
          <UserTaskCard key={task.id} task={task} />
        ))
      ) : (
        tasks
        .filter(
          (task) =>
            task.status === "blocked" &&
            (filters === "" || task.priority === filters) &&
            (search === "" ||  task.taskname.toLowerCase().includes(search.toLowerCase()))
        )
        .map((task) => (
          <UserTaskCard key={task.id} task={task} />
        ))
      )}
    </div>

    {/* Completed */}
    <div className="bg-gray-800 m-2 rounded-md justify-center">
      {isOn ? (
        tasks
        .filter(
          (task) =>
            task.status === "completed" &&
            (task.assignee === name ||
            task.owner === name) &&
            (filters === "" || task.priority === filters) &&
            (search === "" ||  task.taskname.toLowerCase().includes(search.toLowerCase()))
        )
        .map((task) => (
          <UserTaskCard key={task.id} task={task} />
        ))
      ) : (
        tasks
        .filter(
          (task) =>
            task.status === "completed" &&
            (filters === "" || task.priority === filters) &&
            (search === "" ||  task.taskname.toLowerCase().includes(search.toLowerCase()))
        )
        .map((task) => (
          <UserTaskCard key={task.id} task={task} />
        ))
      )}
    </div>
  </div>
</section>

   </>
  )
}

export default UserHomePage