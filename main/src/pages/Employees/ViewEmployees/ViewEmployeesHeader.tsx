import { fake } from "../../../orgDeptFake";
import { LiaUsersCogSolid } from "react-icons/lia";

function ViewEmployeesHeader() {
  return (
    <>
      <div className="flex flex-col flex-grow px-4">
        <div className="flex items-center justify-center gap-8 mt-5">
          <div className="flex items-center justify-center w-20 h-20 bg-white border rounded-full shadow-lg ">
            <LiaUsersCogSolid fontSize={55} className="text-main" />
          </div>
          <h1 className="text-6xl font-bold">Employees</h1>
        </div>
        <div className="flex flex-row mt-5 ml-5">
          <div className="mr-4">
            <label
              className="block mb-2 text-sm font-semibold"
              htmlFor="filter"
            >
              Filter by Branch
            </label>
            <select
              id="filter"
              className="block px-4 py-2 border border-gray-200 rounded-lg w-72 focus:outline-none hover:border-gray-500"
            >
              {fake.map((branch) => (
                <option key={branch.id} value={branch.name}>
                  {branch.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mr-4">
            <label
              className="block mb-2 text-sm font-semibold"
              htmlFor="filter"
            >
              Filter by Department
            </label>
            <select
              id="filter"
              className="block w-40 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none hover:border-gray-500"
            >
              {fake.map((department) => (
                <option key={department.id} value={department.branch}>
                  {department.branch}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-center ml-4 mt-7">
            <button className="w-20 text-white rounded-lg bg-main h-9 hover:bg-prime ">
              <p className="mt-1">Go</p>
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-100 mt-7"></div>
    </>
  );
}

export default ViewEmployeesHeader;
