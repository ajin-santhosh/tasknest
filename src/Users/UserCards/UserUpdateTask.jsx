import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function UserUpdateTask() {
    const { id } = useParams();
    let {userid,name} = useParams()
    
  const navigate = useNavigate();

  // State for the form fields
  const [form, setForm] = useState({
    taskname: "",
    status:"",
    priority: "Medium",
    enddate: null,
    // assignee: "",
    discription: "",
  });

  // Fetch task from server on mount
  useEffect(() => {
    axios
      .get(`https://68c048970b196b9ce1c3def3.mockapi.io/tasknest/tasks/${id}`)
      .then((res) => {
        const data = res.data;
        setForm({
          taskname: data.taskname || "",
          status: data.status || "",
          priority: data.priority || "Medium",
          enddate: data.enddate ? new Date(data.enddate) : null,
        //   assignee: data.assignee || "",
          discription: data.discription || "",
        });
      })
      .catch((err) => console.error("Error fetching task:", err));
  }, [id]);

  // Handle input/select/textarea changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle date change
  const handleDateChange = (date) => {
    setForm({ ...form, enddate: date });
  };

  // Handle form submit to update task
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`https://68c048970b196b9ce1c3def3.mockapi.io/tasknest/tasks/${id}`, {
        ...form,
        enddate: form.enddate ? form.enddate.toISOString() : null,
      })
      .then(() => {
        alert("Task updated successfully!");
        navigate(`/user/${userid}/${name}`);
      })
      .catch((err) => console.error("Error updating task:", err));
  };
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl px-6 py-8 ring-1 ring-slate-900/5 shadow-xl min-h-screen">
          <form
            onSubmit={handleSubmit}
            className="m-3 flex flex-col gap-6 border border-white rounded-xl p-6 shadow-lg shadow-slate-800 max-w-2xl mx-auto w-full"
          >
            <h2 className="text-xl font-serif font-bold text-center bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Update Task
            </h2>
    
            {/* Title */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <label htmlFor="taskname" className="sm:w-32 font-medium">
                Title
              </label>
              <input
                type="text"
                name="taskname"
                value={form.taskname}
                onChange={handleChange}
                placeholder="Enter title"
                className="border p-2 rounded flex-1"
              />
            </div>
             <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <label className="sm:w-32 font-medium">Status</label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="border p-2 rounded flex-1 bg-gray-200 text-black"
              >
                <option>todo</option>
                <option>inprogress</option>
                <option>blocked</option>
                            <option>completed</option>
    
              </select>
            </div>
            {/* Priority */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <label className="sm:w-32 font-medium">Priority</label>
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className="border p-2 rounded flex-1 bg-gray-200 text-black"
              >
                <option>high</option>
                <option>medium</option>
                <option>low</option>
              </select>
            </div>
    
            {/* End Date */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <label className="sm:w-32 font-medium">End Date</label>
              <DatePicker
                selected={form.enddate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                className="border p-2 rounded flex-1"
                placeholderText="Select a date"
              />
            </div>
    
            {/* Assignee */}
            {/* <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <label className="sm:w-32 font-medium">Assignee</label>
              <select
                name="assignee"
                value={form.assignee}
                onChange={handleChange}
                className="border p-2 rounded flex-1 bg-gray-200 text-black"
              >
                <option>John</option>
                <option>Sarah</option>
                <option>Mike</option>
              </select>
            </div> */}
    
            {/* Description */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
              <label htmlFor="discription" className="sm:w-32 font-medium">
                Description
              </label>
              <textarea
                name="discription"
                value={form.discription}
                onChange={handleChange}
                className="border p-2 rounded flex-1 h-28"
                placeholder="Enter description"
              ></textarea>
            </div>
    
            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <Link to={`/user/${userid}/${name}`}>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                >
                  Back
                </button>
              </Link>
              <button
                type="submit"
                className="px-4 py-2 bg-[#00ADB5] text-white rounded-lg hover:bg-blue-400"
              >
                Save
              </button>
              
            </div>
          </form>
        </div>
  )
}

export default UserUpdateTask
