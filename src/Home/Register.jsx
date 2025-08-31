import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
    <div className='min-h-screen '>
  <div className="mx-80 my-20 h-160 w-200 rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-sm">
     <h2 className="text-4xl font-serif font-bold text-center  bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
            Register🪺
          </h2>
     <form className="m-10  flex flex-col gap-3 border border-white rounded-xl p-10 mx-50 gap-10 shadow-lg shadow-slate-700">
        
        <input 
            type="text" 
            placeholder="Name" 
            className="border p-2 rounded"
          />
          <input 
            type="email" 
            placeholder="email" 
            className="border p-2 rounded"
          />
          <input 
            type="text" 
            placeholder="Username" 
            className="border p-2 rounded"
          />
          <input 
            type="password" 
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
        <p className='font-sans font-thin text-center'><span className='text-blue-600'> already have an account?</span> Click Here to -
            <Link to={"/login"}>
            <button type="button" className='text-blue-400 py-1 rounded hover:bg-slate-300'> Login...</button>
            </Link>
            </p>
            
  </div>
  
  </div>
    </>
  )
}

export default Register