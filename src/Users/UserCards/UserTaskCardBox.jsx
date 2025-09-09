import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import pen from "../../assets/pen.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UsertaskCardBox() {
  const navigate = useNavigate();
  let { id } = useParams();
  let { userid,name } = useParams();
//   console.log(userid);
  const statusColors = {
    todo: "text-gray-400",
    inprogress: "text-yellow-700",
    completed: "text-green-700",
    blocked: "text-red-700",
  };
  const [task, setTask] = useState(null);
   const [user, setUser] = useState(null)
  useEffect(() => {
    axios
      .get(`https://68c048970b196b9ce1c3def3.mockapi.io/tasknest/tasks/${id}`)
      .then((res) => setTask(res.data))
      .catch((err) => console.error("Error fetching task:", err));
  }, [id])

   useEffect(() => {
    axios
      .get(`https://68c048970b196b9ce1c3def3.mockapi.io/tasknest/users/${userid}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Error fetching task:", err));
  }, [userid]);
if (!user) {
  return <p>Loading...</p>;   // or spinner
}
   
  
  function deleteTask() {
    axios
      .delete(`https://68c048970b196b9ce1c3def3.mockapi.io/tasknest/tasks/${id}`)
      .then(() => {
        console.log("Task deleted!");
        alert("Task deleted successfully!");
      })
      .catch((err) => {
        console.error("Error deleting task:", err);
      });
  }
  return (
    <>
      {task && (
        <div className="bg-white dark:bg-slate-900 rounded-xl px-6 py-8 ring-1 ring-slate-900/5 shadow-xl min-h-screen m-2">
          <button>
            <img src={pen} alt="pen" />
          </button>
          <h3 className="text-slate-900 dark:text-white mt-5 text-lg font-sans tracking-tight">
            {task.taskname}
          </h3>
          <hr />
          <h5
            className={` mt-2 text-base px-2 py-1 w-40  rounded-lg bg-gray-700 text- font-semibold ${
              statusColors[task.status] || "text-gray-500"
            }`}
          >
            <span className="text-gray-400">Status:</span> {task.status}
          </h5>
          <h5 className="text-slate-900 dark:text-white mt-1 text-base font-mono tracking-tight">
            Priority: {task.priority}
          </h5>
          <h5 className="text-slate-900 dark:text-white mt-1 text-base font-mono tracking-tight">
            End Date: {task.enddate}
          </h5>
          <h5 className="text-slate-900 dark:text-white mt-1 text-base font-mono tracking-tight">
            Assignee : {task.assignee}{" "}
          </h5>
          <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm text-base px-2 py-1   rounded-lg bg-gray-800">
            <span className="font-semibold">Description:</span> <br />
            {task.discription}
          </p>

          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            {task.description}
          </p>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm font-mono">
            Started date: {task.createddate}
          </p>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm font-mono">
            {" "}
            Total effort :
          </p>

          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm font-mono">
            {" "}
            Created by:{task.owner}
          </p>
          <div className="p-2 flex gap-9">
            <Link to={`/user/${userid}/${name}`}>
              <button class=" my-2 px-4 py-2 bg-[#00ADB5] text-white rounded-lg hover:bg-blue-400">
                Back
              </button>
            </Link>

             { (user.name === task.owner || user.name === task.assignee) &&(

                <button
              class=" my-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-800"
              onClick={deleteTask}
            >
              Delete
            </button>
              )

              }
              {(user.name ===task.assignee)&&(
              <Link to={`user_update_task`}>
              <button class=" my-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400">
                Update
              </button>
            </Link>
              )
                
              }
            
          </div>
        </div>
      )}
    </>
  );
}

export default UsertaskCardBox;
