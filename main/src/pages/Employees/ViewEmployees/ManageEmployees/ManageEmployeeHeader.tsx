import { Link } from "react-router-dom";
import { fake } from "../../../../orgDeptFake";
import { LiaUsersCogSolid } from "react-icons/lia";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdAddBox } from "react-icons/md";

function ManageEmployeeHeader() {
  const data = fake[0];

  return (
    <>
      <div className="flex flex-col overflow-y-auto animate-fade-in">
        <div className="flex items-center justify-center gap-8 mt-2 ">
          <div className="flex items-center justify-center w-20 h-20 bg-white border rounded-full shadow-lg ">
            <LiaUsersCogSolid fontSize={55} className="-mt-1 text-main" />
          </div>
          <h1 className="text-6xl font-extrabold">Manage Employees</h1>
        </div>
        <div className="w-full h-20 px-10 mt-3">
          <div className="w-full h-full rounded-lg bg-main">
            <div className="flex items-center justify-center gap-x-[50px] py-5 text-white ">
              <h1 className="text-4xl font-extralight">
                <span className="text-4xl font-extrabold">Branch: </span>
                {data.branch}
              </h1>
              <h1 className="text-4xl font-extralight">
                <span className="text-4xl font-extrabold">Department: </span>
                {data.name}
              </h1>
            </div>
            <div className="flex items-center justify-between">
              <Link to="/view-employees">
                <div className="flex items-center w-24 mt-3 rounded-lg bg-slate-100 hover:bg-slate-300">
                  <IoIosArrowRoundBack
                    fontSize={30}
                    color="black"
                    className="ml-2"
                  />
                  <span className="mt-1 text-xl">Back</span>
                </div>
              </Link>
              <div className="flex flex-row flex-1 mt-2 ml-24">
                <div className="mr-4">
                  <label
                    className="block text-sm font-semibold"
                    htmlFor="search"
                  >
                    Search an Employee
                  </label>
                  <input
                    placeholder="Employee name or ID"
                    type="text"
                    id="search"
                    className="block border custom-login-input focus:outline-none focus:border-gray-500 hover:border-gray-500"
                  />
                </div>
                <div className="mr-4">
                  <label
                    className="block text-sm font-semibold"
                    htmlFor="filter"
                  >
                    Filter by Branch
                  </label>
                  <select
                    id="filter"
                    className="block px-4 py-2 border border-gray-200 rounded-lg w-72 focus:outline-none hover:border-gray-500"
                  >
                    {fake.map((branch) => (
                      <option key={branch.id} value={branch.branch}>
                        {branch.branch}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mr-4">
                  <label
                    className="block text-sm font-semibold"
                    htmlFor="filter"
                  >
                    Filter by Status
                  </label>
                  <select
                    id="filter"
                    className="block w-40 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none hover:border-gray-500"
                  >
                    <option value="All">All</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="flex items-center justify-center mt-5 ml-4">
                  <button className="w-20 text-white rounded-lg bg-main h-9 hover:bg-prime ">
                    <p className="mt-1">Go</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/add-employees" className="addBtn">
          <MdAddBox fontSize={30} className="mr-2 text-white" />
          <button type="button" className="mt-1 text-white ">
            Add Employee
          </button>
        </Link>
        <div className="mt-4 border-b-2 border-gray-100"></div>
      </div>
    </>
  );
}

export default ManageEmployeeHeader;
