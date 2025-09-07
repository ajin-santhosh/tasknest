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
      .post("http://localhost:5000/users",register)
      .then((res) => {
        console.log("user registered", res.data);
         navigate("/login"); // redirect after adding
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <div className="min-h-screen ">
        <div className="mx-80 my-20 h-160 w-200 rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-sm">
          <h2 className="text-4xl font-serif font-bold text-center  bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
            Register🪺
          </h2>
          <form
            onSubmit={handleSubmit}
            className="m-10  flex flex-col gap-3 border border-white rounded-xl p-10 mx-50 gap-10 shadow-lg shadow-slate-700"
          >
            <input
              type="text"
              name="name"
              value={register.name}
              onChange={handleChange}
              placeholder="Name"
              className="border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              value={register.email}
              onChange={handleChange}
              placeholder="email"
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={register.username}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              type="password"
              name="password"
              value={register.password}
              onChange={handleChange}
              placeholder="Password"
              className="border p-2 rounded"
            />

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </form>
          <p className="font-sans font-thin text-center">
            <span className="text-blue-600"> already have an account?</span>{" "}
            Click Here to -
            <Link to={"/login"}>
              <button
                type="button"
                className="text-blue-400 py-1 rounded hover:bg-slate-300"
              >
                {" "}
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
