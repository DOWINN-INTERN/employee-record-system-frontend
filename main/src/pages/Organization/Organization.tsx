import { LuNetwork } from "react-icons/lu";
import Card from "../../Card";
import {  FaUsers, FaUserTie } from "react-icons/fa";

function Organization() {
  return (
    <div className="flex gap-40 p-10 my-40 ml-28 animate-fade-in">
      <Card
        title="Branches"
        icon={<LuNetwork size={300} />}
        to="/branches"
      />
      <Card
        title="Departments"
        icon={<FaUsers size={300} />}
        to="/departments"
      />
      <Card
        title="Positions"
        icon={<FaUserTie size={300} />}
        to="/positions"
      />
    </div>
  );
}

export default Organization;
