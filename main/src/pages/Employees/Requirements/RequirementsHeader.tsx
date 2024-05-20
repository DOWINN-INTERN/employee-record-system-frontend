import { useState } from "react";
import { MdAddBox } from "react-icons/md";
import { HiOutlineDocumentSearch } from "react-icons/hi";

function RequirementsHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col flex-grow px-4">
        <div className="flex items-center justify-center gap-8 mt-5 ">
          <div className="flex items-center justify-center w-20 h-20 bg-white border rounded-full shadow-lg">
            <HiOutlineDocumentSearch fontSize={55} className="ml-1 -mt-1 text-main" />
          </div>
          <h1 className="text-6xl font-extrabold">Requirements</h1>
        </div>
        <div className="flex flex-row ml-5">
          <div className="mr-4">
            <label
              className="block mb-2 text-sm font-semibold"
              htmlFor="search"
            >
              Search a Requirement
            </label>
            <input
              type="text"
              id="search"
              className="block border custom-login-input focus:outline-none focus:border-gray-500 hover:border-gray-500"
            />
          </div>

          <div className="flex items-center justify-center mt-6 ml-4">
            <button className="w-20 text-white rounded-lg bg-main h-9 hover:bg-prime">
              <p className="mt-1">Go</p>
            </button>
          </div>

          <div className="addBtn" onClick={openModal}>
            <MdAddBox fontSize={30} className="mr-2 text-white" />
            <button type="button" className="mt-1 text-white ">
              Add a Requirement
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 px-12 py-6 text-3xl font-bold text-center">
        <div className="mr-16">Pre-Employment</div>
        <div>Health and Medical</div>
        <div className="ml-5">Benefits</div>
        <div className="ml-14">Miscellaneous</div>
      </div>
      <div className="mt-0 border-b-2 border-gray-100"></div>

      {isModalOpen && (
        <div className="modalDiv">
          <div
            className="bg-white p-8 rounded-lg w-[20%] h-auto text-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-4xl font-extrabold text-center">
              Add Requirement
            </h2>

            <div className="mr-4">
              <label className="block text-sm">Requirement Name</label>
              <input
                type="text"
                id="search"
                className="border custom-login-input focus:outline-none focus:border-gray-500 hover:border-gray-500"
              />
              <label className="block mt-3 text-sm">Requirement Type</label>
              <select className="p-2 border border-gray-200 rounded-lg w-80 focus:outline-none focus:border-gray-500 hover:border-gray-500">
                <option>A</option>
                <option>A</option>
                <option>A</option>
              </select>
            </div>

            <div className="mt-10">
              <button
                className="w-full px-4 py-2 font-bold text-white rounded-md bg-cyan-800 hover:bg-cyan-900"
                onClick={closeModal}
              >
                Add Requirement
              </button>
            </div>

            <div className="">
              <button
                className="w-full px-4 py-2 mr-4 font-bold text-gray-800 bg-gray-300 rounded-md mt-7 hover:bg-gray-400"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RequirementsHeader;
