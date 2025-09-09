import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    usertype: "",
    status: "0"
  });
  const handleChange = (e) => {
   setRegister ({...register,[e.target.name]:e.target.value})
  }
  function handleSubmit(e) {
      e.preventDefault();
      axios
      .post("https://68c048970b196b9ce1c3def3.mockapi.io/tasknest/users",register)
      .then((res) => {
        console.log("user registered", res.data);
         navigate("/login"); // redirect after adding
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
  <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm my-10">
    <h2 className="text-3xl sm:text-4xl md:text-4xl font-serif font-bold text-center bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
      Register🪺
    </h2>

    <form
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col gap-4 sm:gap-6 border border-white rounded-xl p-6 sm:p-10 shadow-lg shadow-slate-700"
    >
      <input
        type="text"
        name="name"
        value={register.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 rounded w-full"
      />
      <input
        type="email"
        name="email"
        value={register.email}
        onChange={handleChange}
        placeholder="Email"
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={register.username}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="password"
        name="password"
        value={register.password}
        onChange={handleChange}
        placeholder="Password"
        className="border p-2 rounded w-full"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 w-full"
      >
        Save
      </button>
    </form>

    <p className="font-sans font-thin text-center mt-4 text-sm sm:text-base">
      <span className="text-blue-600">Already have an account?</span> Click Here to -
      <Link to={"/login"}>
        <button
          type="button"
          className="text-blue-400 py-1 rounded hover:bg-slate-300 ml-1"
        >
          Login...
        </button>
      </Link>
    </p>
  </div>
</div>

    </>
  );
}

export default Register;
