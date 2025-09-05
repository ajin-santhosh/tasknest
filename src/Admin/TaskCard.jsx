import React from "react";
import pen from "../assets/pen.svg";
import { Link } from 'react-router-dom'


function TaskCard({ task }) {
  const statusColors = {
  todo: "text-gray-400",
  inprogress : "text-yellow-600",
  completed: "text-green-600",
  blocked: "text-red-600", // 👈 your 4th status
};

  return (
    <><Link to={`task/${task.id}`}>

     <div className="bg-white dark:bg-slate-900 rounded-xl px-6 py-8 ring-1 ring-slate-900/5 shadow-xl m-2 min-h-[250px] hover:bg-slate-800 transition cursor-pointer">
  <div className="flex justify-between items-start">
    <h3 className="text-slate-900 dark:text-white text-lg font-sans tracking-tight">
      {task.taskname}
    </h3>
    
      <img src={pen} alt="pen" className="w-6 h-6 cursor-pointer" />
    
  </div>

  <hr className="my-2" />

  <h5 className={` mt-2 text-base px-2 py-1 w-40  rounded-lg bg-gray-700 text- font-semibold ${
    statusColors[task.status] || "text-gray-500"
  }`}>
    <span className="text-gray-400">Status:</span> {task.status}
  </h5>
  <h5 className="text-slate-900 dark:text-white mt-1 text-base font-mono">
    Priority: {task.priority}
  </h5>
  <h5 className="text-slate-900 dark:text-white mt-1 text-base font-mono">
    End Date: {task.enddate}
  </h5>
  <h5 className="text-slate-900 dark:text-white mt-1 text-base font-mono">
    Assignee: {task.owner}
  </h5>

  <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm clamp-2 ">
    <span className="font-semibold">Description:</span> {task.discription}
  </p>

  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm font-mono">
    Started date: {task.createddate}
  </p>
  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm font-mono">
    Total effort:
  </p>
  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm font-mono">
    Created by:
  </p>
</div>
</Link>
    </>
  );
}

export default TaskCard;
