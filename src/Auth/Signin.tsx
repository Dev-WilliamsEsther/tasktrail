import { useState } from "react"
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { NavLink } from "react-router-dom"

const Signin = () => {
    const[showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full h-screen bg-gray-500 flex items-center justify-center px-4">
  <div className="w-full max-w-4xl h-auto md:h-[70%] bg-[#2C2638] rounded-2xl flex flex-col md:flex-row items-center justify-around p-4 md:p-6">
    <img
      src="public/images/trail1.jpeg"
      alt=""
      className="w-full md:w-1/2 h-auto rounded-2xl mb-8 md:mb-0 object-cover"
    />

    <div className="w-full md:w-1/2 flex flex-col gap-6 p-4 md:p-8 rounded-lg">
      <h2 className="text-2xl font-bold text-white">Create an account</h2>

      <p className="text-sm text-gray-400">
        Already have an account?{" "}
        <NavLink to="/login">
          <u className="cursor-pointer">Log in</u>
        </NavLink>
      </p>

      <form className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="p-3 bg-[#5b556b] rounded-md border border-gray-300"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-3 bg-[#514b63] rounded-md border border-gray-300  "
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          className="p-3 bg-[#514b63] rounded-md border border-gray-300"
        />

        <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="w-full p-3 bg-[#514b63] rounded-md border border-gray-300  pr-10"
        />

        <span
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-3 cursor-pointer text-gray-500"
      >
        {showPassword ?  <FaEye size={20} /> : <IoMdEyeOff size={20}/>}
      </span>
        </div>
        

        <button
          type="submit"
          className="mt-2 bg-[#5d4e87] text-white p-3 rounded-md hover:bg-[#756d86] transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
</div>

  )
}

export default Signin