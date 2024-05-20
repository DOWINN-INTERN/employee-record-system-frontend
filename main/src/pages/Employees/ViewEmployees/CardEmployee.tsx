import ViewEmployeesButton from "./ViewEmployeesButton";

interface Employee {
  id: number;
  name: string;
  branch: string;
  employees: number;
}

interface CardEmployeeProps {
  employee: Employee;
  color: string;
}

function CardEmployee({ employee, color }: CardEmployeeProps) {
  return (
    <div
      className={`flex flex-col p-4 text-center border rounded-lg shadow-md  h-fit hover:scale-110 transition-transform duration-400 ${color}`}
    >
      <div className="">
        <h1 className="text-2xl font-extrabold">Branch</h1>
        <h2 className="mt-1">{employee.name}</h2>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-extrabold">Department</h1>
        <h2 className="mt-1">{employee.branch}</h2>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-extrabold">Employees</h1>
        <h2 className="mt-1">{employee.employees}</h2>
      </div>
      <ViewEmployeesButton />
    </div>
  );
}

export default CardEmployee;
