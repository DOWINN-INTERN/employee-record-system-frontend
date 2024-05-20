import { Link } from "react-router-dom";
import EmployementInformation from './EmploymentInformation';
import Address from './Address';
import EmergencyContact from './EmergencyContact';
import PersonalInformation from "./PersonalInformation";

function AddEmployeesBody() {
  return (
    <div className="grid w-full h-full grid-cols-5 grid-rows-5 px-1 mt-7 ">
      <EmployementInformation />
      <div className="flex flex-col col-span-3 col-start-3 row-span-5 row-start-1 h-[699px] overflow-auto no-scrollbar">
        <div className="flex flex-col ">
          <PersonalInformation />
        </div>
        <Address />
        <EmergencyContact />
        <div className="flex justify-between mt-10 mb-5 mr-[85px]">
          <Link to="/manage-employees">
            <button className="w-32 py-1 font-bold rounded-lg bg-slate-200 hover:bg-slate-300">
             Cancel
            </button>
          </Link>
          <button type="submit" className="w-32 font-bold text-white bg-red-600 rounded-lg hover:bg-red-500">
            Add Employee
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEmployeesBody;
