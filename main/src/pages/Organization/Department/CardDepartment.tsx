import { MdEmail, MdPhone } from "react-icons/md";
import CardDepartmentButton from "./CardDepartmentButton";

export interface Department {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
  branchName: string;
  posCount: string; //Number of Positions
}

export interface Branch {
  id: number;
  name: string;
  image: string;
  address: string;
  status: string;
  deptCount: string;
}

interface DepartmentCardProps {
  department: Department;
  color: string;
  branch: Branch[];
}

function CardDepartment({ department, color, branch }: DepartmentCardProps) {
  return (
    <div
      className={`flex w-full p-4 border shadow-md rounded-2xl h-fit md:flex-col lg:flex-row sm:flex-col hover:shadow-lg sm:h-fit  sm-max:h-auto sm-max:w-fit  ${color}`}
    >
      <div className="flex flex-col justify-between ml-4 gap-y-8 sm-max:flex sm-max:flex-row">
        <div className="max-w-20 min-w-20 ">
          <h1 className="text-2xl font-extrabold">Name</h1>
          <h2 className="mt-2 text-lg">{department.name}</h2>
        </div>
        <div>
          <h1 className="text-2xl font-extrabold ">Status</h1>
          <p className="mt-2 text-lg">{department.status}</p>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(4,200px)] gap-10 ml-20 flex-1 sm-max:flex sm-max:flex-col sm-max:ml-auto">
        <div className="flex flex-col px-5">
          <h1 className="text-2xl font-extrabold">Branch</h1>
          <p className="mt-2 text-lg break-words whitespace-normal h-34">
            {department.branchName}
          </p>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-2xl font-extrabold">Department Head</h1>
          <p className="mt-2 text-lg">employeeName</p>
          <p>employeePosition</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold">Contact Details</h1>
          <div className="flex items-center ">
            <MdEmail className="mr-2" />
            <p className="overflow-visible text-lg max-w-20">
              {department.email}
            </p>
          </div>
          <div className="flex items-center">
            <MdPhone className="mr-2" />
            <p className="mt-1">{department.phone}</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-10 ml-7 sm-max:ml-auto">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Positions</h2>
            <p className="flex justify-end mt-2 text-lg">
              {department.posCount}
            </p>
          </div>
          <div className="flex flex-col ml-4">
            <h2 className="text-2xl font-bold">Employees</h2>
            <p className="flex justify-end mt-2 text-lg">{department.id}</p>
          </div>
        </div>
      </div>
      <div className="my-auto ml-auto sm:ml-1 sm-max:mx-auto">
        <CardDepartmentButton
          id={department.id}
          branches={branch}
          departmentStatus={department.status}
          departmentName={department.name}
          departmentEmail={department.email}
          departmentPhone={department.phone}
        />
      </div>
    </div>
  );
}

export default CardDepartment;
