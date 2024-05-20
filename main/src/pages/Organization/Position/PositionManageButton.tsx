import { useState } from "react";
import { MdAddBox } from "react-icons/md";

function PositionManageButton() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openModal = () => {
    setIsAddModalOpen(true);
  };
  const closeModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <>
      <div
        className="flex items-center justify-center w-16 h-16 p-1 text-4xl text-white border cursor-pointer rounded-r-3xl bg-facebook"
        onClick={openModal}
      >
        <MdAddBox />
      </div>

      {isAddModalOpen && (
        <div className="modalDiv">
          <div className="bg-white p-8 rounded-lg w-[20%] h-auto text-xl">
            <h2 className="mb-4 text-4xl font-extrabold text-center">
              Add Position
            </h2>
            <div className="relative"></div>
            <div className="grid grid-flow-row gap-y-5">
              <div className="flex flex-col">
                <label>Position Name</label>
                <input
                  type="text"
                  placeholder="  Position Name"
                  className="py-2 border-gray-lg"
                />
              </div>
            </div>

            <div className="mt-10">
              <button
                className="w-full px-4 py-2 font-bold text-white rounded-md bg-cyan-800 hover:bg-cyan-900"
                onClick={closeModal}
              >
                Add Position
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

export default PositionManageButton;
