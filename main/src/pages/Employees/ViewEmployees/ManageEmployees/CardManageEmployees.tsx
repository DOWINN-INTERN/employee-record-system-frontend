import { MdEmail, MdPhone } from "react-icons/md";
import CardManageEmployeeButton from "./CardManageEmployeeButton";
import defaultImage from "../../../../assets/emp.png"

interface ManageEmployees {
  id: number;
  name: string;
  status: string;
  branch: string;
  departmentHead: string;
  position: string;
  contactDetails: string;
  number: string;
  positions: number;
  employees: number;
}

interface ManageEmployeesProps {
  employees: ManageEmployees;
  color: string;
}

function CardManageEmployees({ employees, color }: ManageEmployeesProps) {
  return (
    <div
      className={`flex w-full p-4 gap-10 border shadow-md rounded-2xl h-fit max-h-52  md:flex-col lg:flex-row sm:flex-col hover:shadow-lg ${color}`}
    >
      <div className="mx-auto mt-6 bg-cover rounded-full md:min-w-28 md:max-w-32 md:max-h-32 ">
        <img src={defaultImage} className="rounded-full" />
      </div>

      <div className="flex flex-col justify-between ml-4 gap-y-8">
        <div>
          <h1 className="text-2xl font-extrabold">Employee ID</h1>
          <h2 className="mt-2 text-lg">{employees.id}</h2>
          </div>
        <div>
          <h1 className="text-2xl font-extrabold ">Status</h1>
          <p className="mt-1 text-lg">{employees.status}</p>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(4,200px)] gap-10  flex-1">
        <div className="flex flex-col px-5">
          <h1 className="text-2xl font-extrabold">Name</h1>
          <p className="mt-2 text-lg break-words whitespace-normal h-34">
            {employees.departmentHead}
          </p>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-2xl font-extrabold">Position</h1>
          <p>{employees.position}</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold">Contact Details</h1>
          <div className="flex items-center ">
            <MdEmail className="mr-2" />
            <p className="mt-2 overflow-visible text-lg max-w-20">
              {employees.contactDetails}
            </p>
          </div>
          <div className="flex items-center">
            <MdPhone className="mr-2" />
            <p>{employees.number}</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-10 ml-7">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Work Status</h2>
            <p className="flex justify-end mt-2 text-lg">
              {employees.status}
            </p>
          </div>
        </div>
      </div>
      <div className="my-auto ml-auto sm:ml-1 h-fit">
        <CardManageEmployeeButton />
      </div>
    </div>
  );
}

export default CardManageEmployees;
