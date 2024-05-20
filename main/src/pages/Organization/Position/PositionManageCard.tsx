import { RiUserSettingsLine } from "react-icons/ri";

import PositionManageButton from "./PositionManageButton";

interface PositionManage {
  id: number;
  position: string;
}

interface PositionManageProps {
  position: PositionManage;
  color: string;
}

function PositionManageCard({ position, color }: PositionManageProps) {
  return (
    <div
      className={`flex w-full p-4 border rounded-2xl shadow-md h-fit hover:shadow-lg gap-7 ${color}`}
    >
      <div className="flex items-center justify-center w-16 h-16 p-1 text-4xl text-white border rounded-l-3xl bg-google">
        <span className="mt-2">{position.id}</span>
      </div>

      <div className="flex items-center justify-center h-16 bg-gray-200 border w-fit rounded-2xl">
        <div className="flex items-center justify-start w-12 h-full rounded-l-2xl bg-prime">
          <RiUserSettingsLine fontSize={30} className="mx-auto text-black" />
        </div>
        <span className="text-gray-600 ">{position.position}</span>
      </div>

      <PositionManageButton />
    </div>
  );
}

export default PositionManageCard;
