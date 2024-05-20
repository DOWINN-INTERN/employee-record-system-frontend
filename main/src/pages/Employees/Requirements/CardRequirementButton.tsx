import { useState } from "react";
import { FaEdit } from "react-icons/fa";

function CardRequirementButton() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col gap-10 my-auto">
        <button
          type="button"
          onClick={openEditModal}
          className="flex items-center w-32 h-12 mr-2 text-xl text-white duration-300 ease-in-out delay-150 rounded-lg bg-editBtn hover:scale-110"
        >
          <FaEdit fontSize={25} className="mx-auto text-white" />
          <span className="mt-1.5 mr-auto">Edit</span>
        </button>
      </div>

      {isEditModalOpen && (
        <div className="modalDiv">
          <div className="bg-white p-8 rounded-lg w-[20%] h-auto text-xl">
            <h2 className="mb-4 text-4xl font-extrabold text-center">
              Edit Requirement
            </h2>
            <div className="relative">
             
            </div>
          
            <div className="">
              <label className="flex text-sm">Requirement Name</label>
              <input
                type="text"
                id="search"
                className="block border custom-login-input focus:outline-none focus:border-gray-500 hover:border-gray-500"
              />
              <label className="flex mt-3 text-sm ">Requirement Type</label>
              <input
                type="text"
                id="search"
                className="block border custom-login-input focus:outline-none focus:border-gray-500 hover:border-gray-500"
              />
            </div>

            <div className="mt-10">
              <button
                className="w-full px-4 py-2 font-bold text-white rounded-md bg-cyan-800 hover:bg-cyan-900"
                onClick={closeEditModal}
              >
                Save Changes
              </button>
            </div>

            <div className="">
              <button
                className="w-full px-4 py-2 mr-4 font-bold text-gray-800 bg-gray-300 rounded-md mt-7 hover:bg-gray-400"
                onClick={closeEditModal}
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

export default CardRequirementButton;
