import { useNavigate } from "react-router-dom"

const Login = () => {

  const nav = useNavigate()

  const handledash = () => {
    nav("/dashboard")
  }
  return (
    <div className="w-full h-screen bg-gray-400 flex justify-center items-center">
      <div className="w-[35%] h-[70%] bg-white flex flex-col gap-6 p-9">
        <h2>Welcome back</h2>
      <p>Enter to get  unlimited access to data and information.</p>
      <form className="flex flex-col gap-4">
      <input
          type="email"
          placeholder="Email"
          className="p-3 bg-[#74717b] rounded-md border border-gray-300"
        />
        <input
          type="email"
          placeholder="Password"
          className="p-3 bg-[#74717b] rounded-md border border-gray-300"
        />
        <button
        onClick={handledash}
          type="submit"
          className="mt-2 bg-[#5d4e87] text-white p-3 rounded-md hover:bg-[#756d86] transition"
        >
         Log in
        </button>

        <p>Don't have an account? <u className="text-blue-400">Register here</u></p>
      </form>
      </div>
      <div className="w-[35%] h-[70%] ">
        <img src="public/images/trail2.jpeg" alt="" className="w-100 h-124 md:mb-0 object-cover"/>
      </div>
    </div>
  )
}

export default Login