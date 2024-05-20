import { BsToggles } from "react-icons/bs";
import { IoDocumentsOutline } from "react-icons/io5";
import { LuView } from "react-icons/lu";

function CardManageEmployeeButton() {
  return (
    <div className="flex flex-col my-auto gap-y-4">
      <button
        type="button"
        className="flex items-center w-32 h-12 mr-2 text-xl text-white duration-300 ease-in-out delay-75 rounded-lg bg-editBtn hover:scale-110"
      >
        <LuView fontSize={25} className="mx-auto text-white" />
        <span className="mt-1.5 mr-auto">View</span>
      </button>

      <button
        type="button"
        className="flex items-center w-32 h-12 text-xl text-white duration-300 ease-in-out delay-75 rounded-lg bg-stsBtn hover:scale-110"
      >
        <BsToggles fontSize={25} className="mx-auto text-white" />
        <span className="mt-1.5 mr-auto">Status</span>
      </button>
      <button
        type="button"
        className="flex items-center w-32 h-12 text-xl text-white duration-300 ease-in-out delay-75 rounded-lg bg-docBtn hover:scale-110"
      >
        <IoDocumentsOutline fontSize={25} className="mx-auto text-white" />
        <span className="mt-1.5 mr-auto">Documents</span>
      </button>
    </div>
  );
}

export default CardManageEmployeeButton;
