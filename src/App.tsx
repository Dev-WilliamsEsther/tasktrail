import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signin from "./Auth/Signin"
import Login from "./Auth/Login"
import Dashboard from "./pages/Dashboard"
import Task from "./pages/Task"
import Progress from "./pages/Progress"
import Priority from "./pages/Priority"
import Duedate from "./pages/Duedate"
import Completed from "./pages/Completed"

const App = () => {
  const route = createBrowserRouter([
    {path:"/", element:<Signin/>},
    {path:"/login", element:<Login/>},
    {
      path:"/dashboard",
      element:<Dashboard/>,
      children:[
        {path:"task", element:<Task/>},
        {path:"progress", element:<Progress/>},
        {path:"priority", element:<Priority/>},
        {path:"duedate", element:<Duedate/>},
        {path:"completed", element:<Completed/>}
      ]
    }
  ])
  return (
    <RouterProvider router={route} />
  )
}

export default App