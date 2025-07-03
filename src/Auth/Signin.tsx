import { NavLink } from "react-router-dom"

const Signin = () => {
  return (
    <div className="w-full h-screen bg-gray-500 flex items-center justify-center">
        <div className="w-[60%] h-[70%] bg-[#2C2638] rounded-2xl flex items-center justify-around">
            <img src="public/images/trail1.jpeg" alt="" className="w-90 h-110  rounded-2xl" />
            <div className="w-90 flex flex-col gap-6 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white">Create an account</h2>

            <p className="text-sm text-gray-400">
                Already have an account? <NavLink to="/login"><u className="cursor-pointer">Log in</u></NavLink> 
            </p>

            <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
                type="text"
                placeholder="First Name"
                className="p-3 bg-[#5b556b] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
                type="text"
                placeholder="Last Name"
                className="p-3 bg-[#514b63] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            </div>

            <input
            type="email"
            placeholder="Email"
            className="p-3 bg-[#514b63] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />

            <input
                type="password"
                placeholder="Enter your password"
                className="p-3 bg-[#514b63] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />

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