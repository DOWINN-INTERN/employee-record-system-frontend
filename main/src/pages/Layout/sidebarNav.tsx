import { CiMemoPad } from "react-icons/ci";
import { GiEntryDoor } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { HiBuildingOffice } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";
import { PiHandHeartThin } from "react-icons/pi";
import { RiUserSettingsLine } from "react-icons/ri";

export const SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <MdDashboard />,
  },
  {
    key: "organization",
    label: "Organization",
    path: "/organization",
    icon: <HiBuildingOffice />,
  },
  {
    key: "employees",
    label: "Employees",
    path: "/employees",
    icon: <GrGroup />,
  },
  {
    key: "leaves",
    label: "Leaves",
    path: "/leaves",
    icon: <GiEntryDoor />,
  },
  {
    key: "benefits",
    label: "Benefits",
    path: "/benefits",
    icon: <PiHandHeartThin />,
  },
  {
    key: "memo",
    label: "Memo",
    path: "/memo",
    icon: <CiMemoPad />,
  },
  {
    key: "users",
    label: "Users",
    path: "/users",
    icon: <RiUserSettingsLine />,
  },
];
