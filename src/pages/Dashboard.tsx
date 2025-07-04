import Header from "../Components/Header"
import Sidebar from "../Components/Sidebar"

const Dashboard = () => {
  return (
    <div className="flex-1">
      <Header/>
      <div className="flex">
        <Sidebar/>
      </div>
    </div>
  )
}

export default Dashboard