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
      const res = await axios.get(`http://localhost:5000/users?username=${loginData.username}&password=${loginData.password}`)
      
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
    <div className='min-h-screen'>
      <div className="mx-80 my-20 h-130 w-200 rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-sm">
        <h2 className="text-4xl font-serif font-bold text-center bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
          Login🪺
        </h2>
        
        <form 
          className="m-10 flex flex-col gap-3 border border-white rounded-xl p-10 mx-50 gap-10 shadow-lg shadow-slate-700"
          onSubmit={LoginSubmit}
        >
          <input 
            type="text"
            name="username"
            value={loginData.username}
            onChange={HandleChange}
            placeholder="Username" 
            className="border p-2 rounded"
            required
          />
          <input 
            type="password" 
            name="password"
            value={loginData.password}
            onChange={HandleChange}
            placeholder="Password" 
            className="border p-2 rounded"
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button 
            type="submit" 
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        <p className='font-sans font-thin text-center'>
          <span className='text-blue-600'>Don’t have an account?</span> Click Here to - 
          <Link to={"/register"}>
            <button className='text-blue-400 py-1 rounded hover:bg-slate-300'> Register...</button>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
