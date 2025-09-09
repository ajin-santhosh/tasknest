import React from 'react'
import { Link } from 'react-router-dom'

function UserNotVerifiedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Card */}
      <div className="bg-gray-800 rounded-2xl shadow-lg p-10 text-center max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-600 rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4a2 2 0 00-3.464 0L4.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-2xl font-bold mb-4">User Not Verified By Admin</h1>
        <p className="text-gray-300 mb-6">
          Your account has not been verified yet.  
          Please contact the administrator or try again later.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <Link to="/login">
            <button className="px-5 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
              Back to Login
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-5 py-2 bg-gray-600 rounded-lg hover:bg-gray-700">
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserNotVerifiedPage