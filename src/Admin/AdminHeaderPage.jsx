import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import img1 from "../assets/user (1).svg";
import bell from "../assets/bell.svg";
import plus from "../assets/plus-square.svg";
import img2 from "../assets/users.svg"


function AdminHeaderPage() {
  return (
    <>
      <div className="bg-black text-white">
        {/* Navbar */}
        <header className="flex justify-between items-center p-2 bg-black shadow-lg">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="TaskNest Logo" className="w-20 h-20" />
            <h1 className="text-3xl font-bold font-serif">Task Nest</h1>
          </div>
          <div className="flex gap-2 items-center">
            <h3>Admin</h3>
            <div>
              <button className="border-1 border-indigo-500 rounded-md p-1">
                <img src={img1} alt="user" className="w-8 h-8" />
              </button>
            </div>
            <button className="px-4 py-2 rounded-xl bg-[#00ADB5] text-black font-semibold">
              Dark/Light
            </button>
            <img src={bell} alt="user" className="w-7 h-7" />
          </div>
        </header>
        <hr />
      </div>
      <section> {/* admin panle */}
        <div className="grid grid-cols-4 gap-4">
          <div class="flex justify-center p-2">
            <input
              type="text"
              placeholder="Search..."
              class="w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button class="ml-2 px-4 py-2 bg-[#00ADB5] text-white rounded-lg hover:bg-blue-400">
              Search
            </button>
          </div>
          <select class="m-2 p-2 rounded-lg bg-gray-800 text-white h-min focus:outline-none focus:ring-2 focus:ring-blue-500 w-48">
            <option class="bg-gray-800 text-white" value="tech">
              Tech
            </option>
            <option class="bg-gray-800 text-white" value="fashion">
              Fashion
            </option>
            <option class="bg-gray-800 text-white" value="books">
              Books
            </option>
          </select>
          <div className="flex  items-center border-1 border-white-500 rounded-md w-30 m-2 hover:bg-gray-500 "> 
          <button className="p-2">
            Add Task
              </button>
              <img src={plus} alt="user" className="w-6 h-6" />
            </div>
            <div className="flex  items-center border-1 border-white-500 rounded-md w-33 m-2 hover:bg-gray-500 justify-self-end  p-1 gap-2"> 
             <p>Verify Users</p>
              <img src={img2} alt="user" className="w-6 h-6" />
            </div>
        </div>
      </section>
      <Outlet />
      

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between text-gray-500 gap-4">
          <span className="text-sm">
            © {new Date().getFullYear()} TaskNest, Inc.
          </span>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-gray-300">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default AdminHeaderPage;
