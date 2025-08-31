import React from 'react'
import logo from "../assets/logo.png"
import HomePage from './Homepage'
import { Outlet, Link } from "react-router-dom";

function HeaderPage() {
  return (
   <>
 <div className="bg-black text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center p-2 bg-black shadow-lg">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="TaskNest Logo" className="w-20 h-20" />
          <h1 className="text-3xl font-bold font-serif">Task Nest</h1>
        </div>
         <div className="flex gap-10 pl-[500px]">
           <Link to={``} className="hover:text-gray-400 font-bold">Home</Link>
           <Link to={`about`} className="hover:text-gray-400 font-bold">About</Link>
           <Link to={`contact`}className="hover:text-gray-400 font-bold">Contact</Link>
         </div>
        <button className="px-4 py-2 rounded-xl bg-[#00ADB5] text-black font-semibold">
          Toggle Dark/Light
        </button>
      </header>
      <hr />
    </div>
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
  )
}

export default HeaderPage