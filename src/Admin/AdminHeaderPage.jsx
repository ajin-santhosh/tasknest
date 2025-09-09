import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import img1 from "../assets/user (1).svg";
import bell from "../assets/bell.svg";
import plus from "../assets/plus-square.svg";
import img2 from "../assets/users.svg"
import { useNavigate } from "react-router-dom";


function AdminHeaderPage() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/login");             
  }
  return (
    <>
      <div className="bg-black text-white">
  {/* Navbar */}
  <header className="flex flex-col md:flex-row justify-between items-center p-2 bg-black shadow-lg gap-3 md:gap-0">
    {/* Logo + Title */}
    <div className="flex items-center space-x-3">
      <img src={logo} alt="TaskNest Logo" className="w-20 h-20" />
      <h1 className="text-2xl sm:text-3xl font-bold font-serif">Task Nest</h1>
    </div>

    {/* Right Side Buttons */}
    <div className="flex flex-wrap justify-center md:justify-end gap-2 items-center">
      <Link to={`verify_users`}>
        <div className="flex items-center border-1 border-white-500 rounded-md w-auto md:w-33 m-2 hover:bg-gray-500 p-1 gap-2">
          <p className="text-sm sm:text-base">Verify Users</p>
          <img src={img2} alt="user" className="w-6 h-8" />
        </div>
      </Link>

      {/* <button className="px-3 sm:px-4 py-2 rounded-xl bg-[#00ADB5] text-black font-semibold text-sm sm:text-base">
        Dark/Light
      </button> */}
      <button 
      onClick={handleLogout} 
      className="border-1 border-white-500 rounded-md w-auto md:w-20 m-2 hover:bg-red-700 p-1 h-10"
    >
      Logout
    </button>
          <img src={bell} alt="user" className="w-6 sm:w-7 h-6 sm:h-7" />

    </div>
  </header>

  <hr />
</div>
<section className="bg-gray-950">
  <Outlet />
</section>


{/* Footer */}
<footer className="border-t border-gray-800">
  <div className="container mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between text-gray-500 gap-4">
    <span className="text-sm">
      © {new Date().getFullYear()} TaskNest, Inc.
    </span>
    <div className="flex flex-wrap gap-4 text-sm justify-center md:justify-end">
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
