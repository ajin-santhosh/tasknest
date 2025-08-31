import React from "react";
import logo from "./assets/logo.png"

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
    <div className="min-h-screen">
      
    <div className="flex flex-col justify-center items-center h-140 bg-[#121212] text-white  text-center border border-white rounded-xl m-20">
      {/* Big 404 */}
       <div className="flex items-center space-x-3 p-20">
                <img src={logo} alt="TaskNest Logo" className="w-20 h-20" />
                <h1 className="text-3xl font-bold font-serif">Task Nest</h1>
              </div>
      <h1 className="text-5xl font-extrabold text-shadow-sky-300 ">404</h1>

      {/* Message */}
      <h2 className="text-3xl mt-6 font-bold">Page Not Found</h2>
      <p className="text-gray-400 mt-2 max-w-md">
        Oops! The page you’re looking for doesn’t exist or may have been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-8 px-6 py-3 rounded-xl bg-[#00ADB5] text-black font-semibold hover:scale-105 transition"
      >
        Go Back Home
      </Link>
    </div>
    </div>
    </>
  );
};

export default ErrorPage;