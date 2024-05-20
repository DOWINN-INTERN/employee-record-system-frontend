import CardEmployee from "./CardEmployee";
import { fake } from "../../../orgDeptFake";


function ViewEmployeesBody() {
  return (
    <div className="overflow-y-auto h-[730px] p-8">
      <div className="grid grid-cols-5 gap-10">
        {fake.map((employee, index) =>
          index % 2 === 0 ? (
            <CardEmployee key={employee.id} employee={employee} color="bg-teal-50"/>
          ) : (
            <CardEmployee key={employee.id} employee={employee} color="bg-yellow-100"/>
          )
        )}
      </div>
    </div>
  )
}

export default ViewEmployeesBody