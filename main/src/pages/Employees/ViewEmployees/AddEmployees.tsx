import { MdPersonAddAlt1 } from "react-icons/md";
import { fake } from "../../../orgDeptFake";
import AddEmployeesBody from "./ManageEmployees/AddEmployeesBody";

function AddEmployees() {
  const emp = fake[0];

  return (
    <>
      <div className="h-[945px]">
        <div className="flex flex-col w-full h-full">
          <div className="grid grid-cols-5 gap-4 px-10">
            <div className="col-span-5">
              <div className="flex items-center justify-center gap-8 mt-1">
                <div className="header-logo">
                  <MdPersonAddAlt1
                    fontSize={55}
                    className="ml-2 -mt-1 text-main"
                  />
                </div>
                <h1 className="mt-3 text-6xl font-extrabold">Add Employee</h1>
              </div>
              <div className="mt-3 ">
                <div className="flex items-center justify-center w-full h-20 rounded-lg bg-main gap-x-[50px] py-5 text-white ">
                  <h1 className="text-4xl">
                    <span className="font-extrabold">Branch: </span>
                    {emp.branch}
                  </h1>
                  <h1 className="text-4xl">
                    <span className="font-extrabold">Department: </span>
                    {emp.position}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full border-b-2 border-gray-100 mt-7"
            style={{ marginLeft: "-.5px", marginRight: "-10px" }}
          ></div>
          <AddEmployeesBody />
        </div>
      </div>
    </>
  );
}

export default AddEmployees;
