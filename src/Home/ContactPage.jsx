import React from 'react'

function ContactPage() {
  return (
   <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6">
  <div className="bg-gray-900 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg max-w-md sm:max-w-xl md:max-w-2xl w-full">
    {/* Heading */}
    <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
      Contact Us
    </h1>
    <p className="text-center text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
      Have any questions or need support? Fill out the form below and we'll
      get back to you as soon as possible.
    </p>

    {/* Form */}
    <form className="space-y-4 sm:space-y-6">
      {/* Name */}
      <div>
        <label className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
          required
        />
      </div>

      {/* Message */}
      <div>
        <label className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium">Message</label>
        <textarea
          rows="4" 
          sm="rows-5"
          placeholder="Write your message here..."
          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-5 sm:px-6 py-2 sm:py-2.5 bg-blue-500 rounded-lg hover:bg-blue-600 font-medium text-sm sm:text-base"
        >
          Send Message
        </button>
      </div>
    </form>

    {/* Extra Info */}
    <div className="mt-6 sm:mt-8 text-center text-gray-400 text-xs sm:text-sm">
      <p>Email: support@tasknest.com</p>
      <p>Phone: +91 98765 43210</p>
    </div>
  </div>
</div>

  )
}

export default ContactPage