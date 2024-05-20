import { fake } from "../../../../orgDeptFake";
import CardManageEmployees from "./CardManageEmployees";

function ManageEmployeeBody() {
  return (
    <div className="overflow-y-auto h-[675px] p-2">
    <div className="grid grid-flow-row gap-8 p-7 animate-fade-in">
      {fake.map((employee, index) =>
        index % 2 === 0 ? (
          <CardManageEmployees
            key={employee.id}
            employees={employee}
            color="bg-gradient-to-b from-white to-amber-100"
          />
        ) : (
          <CardManageEmployees
            key={employee.id}
            employees={employee}
            color="bg-gradient-to-b from-white to-teal-50"
          />
        )
      )}
    </div>
  </div>
  )
}

export default ManageEmployeeBody