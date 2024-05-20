import { LiaUsersCogSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function ViewEmployeesButton() {
  return (
    <div className="w-full mt-3 text-white border rounded-lg bg-cyan-800 h-fit">
    <Link to="/manage-employees"><div className="flex py-2">
      <LiaUsersCogSolid color="white" fontSize={30} className="mx-auto"/>
      <h1 className="mr-auto text-lg">Manage Employees</h1>
    </div></Link>
  </div>
  )
}

export default ViewEmployeesButton