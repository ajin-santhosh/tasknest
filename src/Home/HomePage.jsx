import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div className="bbg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-3xl md:text-5xl">
          Organize Your Day To Day Work{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
            with TaskNest 🪺
          </span>
        </h2>

        <p className="mt-4 text-gray-400 text-lg">
          A simple, modern todo app to keep you focused.
        </p>

        <Link to={"login"}>
          <button className="mt-6 px-6 py-3 rounded-xl bg-[#00ADB5] text-black font-semibold hover:scale-105 transition">
            Login
          </button>
        </Link>
      </section>
      <section>
        <div className="flex flex-row justify-center items-center border border-white rounded-xl p-10 mx-50 gap-10 shadow-lg shadow-slate-700">
          <div className="basis-1/3 flex justify-center">
            <img src={logo} alt="TaskNest Logo" className="bject-contain" />
          </div>
          <div className="basis-2/3">
            <p className="font-serif text-lg leading-relaxed text-gray-300 text-center ">
              TaskNest is a modern task management app designed for both
              individuals and teams. It helps you stay organized by managing
              tasks with different stages, priorities, and statuses. Whether
              you’re handling personal to-dos or collaborating on team projects,
              TaskNest makes it easy to track progress, set priorities, and
              complete tasks efficiently — all in one clean, dark-mode enabled
              workspace.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-10">
        {[
          "Add, edit, delete tasks easily",
          "Dark mode enabled",
          "Track completed tasks",
          "Stay organized and productive",
        ].map((feature, index) => (
          <div key={index} className="bg-[#1E1E1E] p-6 rounded-2xl shadow-md">
            <p className="text-lg">{feature}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Homepage;
