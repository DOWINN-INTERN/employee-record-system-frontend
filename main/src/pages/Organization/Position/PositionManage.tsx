import { RiUserSettingsFill } from "react-icons/ri";
import { fake } from "../../../orgDeptFake";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import PositionManageCard from "./PositionManageCard";

function PositionManage() {
  const data = fake[7];

  return (
    <div className="flex flex-col flex-grow overflow-y-auto animate-fade-in">
      <div className="flex items-center justify-center gap-8 mt-5 ">
        <div className="header-logo">
          <RiUserSettingsFill fontSize={55} className="-mt-1 text-main" />
        </div>
        <h1 className="text-6xl font-extrabold">Manage Positions</h1>
      </div>
      <div className="w-full h-20 px-8 mt-6 ">
        <div className="w-full h-full rounded-lg bg-main">
          <div className="flex items-center justify-center gap-x-[50px] py-5 text-white">
            <h1 className="text-4xl font-extralight">
              <span className="text-4xl font-extrabold">Branch: </span>
              {data.branch}
            </h1>
            <h1 className="text-4xl font-extralight">
              <span className="text-4xl font-extrabold">Department: </span>
              {data.name}
            </h1>
          </div>
          <div className="flex items-center justify-between mt-5 ">
            <Link to="/positions">
              <div className="flex items-center w-24 rounded-lg bg-slate-100 hover:bg-slate-300 ">
                <IoIosArrowRoundBack
                  fontSize={30}
                  color="black"
                  className="ml-2"
                />
                <span className="mt-1 text-xl">Back</span>
              </div>
            </Link>
            <h1 className="ml-24 text-3xl font-extrabold text-center">
              Position Hierarchy
            </h1>
            <h1 className="text-lg italic">click a position name to edit</h1>
          </div>
        </div>
      </div>
      <div className="mt-20 border-b-2 border-gray-100"></div>
      <div className="h-[659px] p-8 overflow-y-auto">
        <div className="grid grid-rows-5 gap-10">
          {fake.map((position, index) =>
            index % 2 === 0 ? (
              <PositionManageCard key={position.id} position={position} color="bg-oddOne"/>
            ) : (
              <PositionManageCard key={position.id} position={position} color="bg-evenOne"/>
            )
          )}
        </div>
        
      </div>
    </div>
  );
}

export default PositionManage;
