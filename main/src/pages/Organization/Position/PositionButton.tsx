import { RiUserSettingsFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function OrgPositionButton() {
  return (
    <div className="w-full mt-3 text-white border rounded-lg bg-cyan-800 h-fit">
      <Link to="/manage-position"><div className="flex py-2">
        <RiUserSettingsFill color="white" fontSize={30} className="mx-auto"/>
        <h1 className="mr-auto text-lg">Manage Positions</h1>
      </div></Link>
    </div>
  );
}

export default OrgPositionButton;
