import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [loginData, setLoginData] = useState({ username: "", password: "" })
  const [error, setError] = useState("")
  const navigate = useNavigate()

  function HandleChange(e) {
    const { name, value } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }

  async function LoginSubmit(e) {
    e.preventDefault()
    setError("")

    try {
      // ✅ Check user credentials from JSON server
      const res = await axios.get(`https://68c048970b196b9ce1c3def3.mockapi.io/tasknest/users?username=${loginData.username}&password=${loginData.password}`)
      
      if (res.data.length > 0) {
        const user = res.data[0]

        // ✅ Navigate based on user type
        if (user.usertype === "admin") {
          navigate("/admin")
        } else if (user.usertype === "user") {
          navigate(`/user/${user.id}/${user.name}`)
        }
        else if (user.usertype === "") {
          navigate("/user_not_verfied")
        } else {
          setError("Invalid user type.")
        }
      } else {
        setError("Invalid username or password.")
      }
    } catch (err) {
      console.error("Login error:", err)
      setError("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
  <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm my-10">
    <h2 className="text-3xl sm:text-4xl md:text-4xl font-serif font-bold text-center bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
      Login🪺
    </h2>

    <form 
      className="mt-6 flex flex-col gap-4 sm:gap-6 border border-white rounded-xl p-6 sm:p-10 shadow-lg shadow-slate-700"
      onSubmit={LoginSubmit}
    >
      <input 
        type="text"
        name="username"
        value={loginData.username}
        onChange={HandleChange}
        placeholder="Username" 
        className="border p-2 rounded w-full"
        required
      />
      <input 
        type="password" 
        name="password"
        value={loginData.password}
        onChange={HandleChange}
        placeholder="Password" 
        className="border p-2 rounded w-full"
        required
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button 
        type="submit" 
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 w-full"
      >
        Login
      </button>
    </form>

    <p className="font-sans font-thin text-center mt-4 text-sm sm:text-base">
      <span className="text-blue-600">Don’t have an account?</span> Click Here to - 
      <Link to={"/register"}>
        <button className="text-blue-400 py-1 rounded hover:bg-slate-300 ml-1"> Register...</button>
      </Link>
    </p>

    <div className="text-xs sm:text-sm text-gray-400 p-2 text-center mt-4">
      <p> 
        For testing Purpose use cred <br /> 
        Admin = username - admin, psw - admin@123<br />
        User = username - ajin, psw - ajin@123 <br />
        User = username - manu, psw - manu@123 <br />
        Note ---- Newly registered users are only able to login after admin verify them
      </p>
    </div>
  </div>
</div>

  )
}

export default Login
