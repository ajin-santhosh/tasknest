import React from 'react'
import logo from "../assets/logo.png"
import HomePage from './HomePage'
import { Outlet, Link } from "react-router-dom";

function HeaderPage() {
  return (
   <>
<div className="bg-black text-white">
  {/* Navbar in home page*/}
  <header className="flex flex-wrap justify-between items-center p-2 bg-black shadow-lg">
    <div className="flex items-center space-x-3">
      <img src={logo} alt="TaskNest Logo" className="w-16 h-16 md:w-20 md:h-20" />
      <h1 className="text-2xl md:text-3xl font-bold font-serif">Task Nest</h1>
    </div>

    {/* Links */}
    <div className="flex gap-6 md:gap-10 md:pl-0 pl-0 w-full md:w-auto justify-center md:justify-start mt-3 md:mt-0">
      <Link to={``} className="hover:text-gray-400 font-bold">Home</Link>
      <Link to={`about`} className="hover:text-gray-400 font-bold">About</Link>
      <Link to={`contact`} className="hover:text-gray-400 font-bold">Contact</Link>
    </div>

    {/* Toggle Button */}
    <button className="px-4 py-2 rounded-xl bg-[#00ADB5] text-black font-semibold mt-3 md:mt-0">
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
      <a href="#" className="hover:text-gray-300">Privacy</a>
      <a href="#" className="hover:text-gray-300">Terms</a>
      <a href="#" className="hover:text-gray-300">Contact us</a>
    </div>
  </div>
</footer>

   </>
  )
}

export default HeaderPage