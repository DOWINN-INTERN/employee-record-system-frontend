import OrgPositionHeader from "./PositionHeader";
import OrgPositionBody from "./PositionBody";
import { useEffect, useState } from "react";
import axios from "../../../api/mainkey";
import { Branch } from "../Branch/CardBranch";
import { Department } from "../Department/CardDepartment";
import { Position } from "./CardPosition";

function OrgPosition() {
  const [branch, setBranch] = useState<Branch[]>([]);
  const [department, setDepartment] = useState<Department[]>([]);
  const [position, setPosition] = useState<Position[]>([]);

  useEffect(() => {
    axios.get<Branch[]>("/branches").then((res) => {
      setBranch(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get<Department[]>("/departments").then((res) => {
      setDepartment(res.data);
      console.log(res);
    });
  }, []);

  useEffect(() => {
    axios.get<Position[]>("/positions").then((res) => {
      setPosition(res.data);
    });
  }, []);

  return (
    <div className="animate-fade-in">
      <OrgPositionHeader branches={branch} departments={department}/>
      <OrgPositionBody positions={position} />
    </div>
  );
}

export default OrgPosition;
