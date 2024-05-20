import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { SIDEBAR_LINKS } from "./sidebarNav";
import { CiLogout } from "react-icons/ci";

function Sidebar() {
  return (
    <div className="flex flex-col h-screen p-4 text-2xl text-white bg-main">
      <div className="flex justify-center">
        <img src={logo} className="w-56 h-24" alt="Logo" />
      </div>
      <div
        className="mx-auto mt-6 bg-cover rounded-full md:min-w-24 md:min-h-24 "
        style={{
          backgroundImage: 'url("https://source.unsplash.com/80x80?face")',
        }}
      ></div>
      <p className="mt-1 text-center">Edwin Calmado Jr.</p>
      <p className="text-sm text-center">Secret Agent</p>

      <div className="w-full mx-auto mt-12 border-b-4 border-white md:w-4/5"></div>

      <div className="flex flex-col gap-3 mt-8 animate-fade-in">
        {SIDEBAR_LINKS.map((i) => (
          <SidebarLinks key={i.key} i={i} />
        ))}
      </div>
      <div className="w-full mx-auto mt-8 mb-16 border-t-4 border-white md:w-4/5"></div>

      <Link to="Login">
        <div className="flex items-center justify-center cursor-pointer sidebar md:justify-start hover:text-red-600">
          <CiLogout className="ml-4 text-3xl md:ml-10" />
          <span className="pl-2 md:pl-4">Log Out</span>
        </div>
      </Link>
    </div>
  );
}

//@ts-expect-error jsx
function SidebarLinks({ i }) {
  const { pathname } = useLocation();
  const isActive = pathname === i.path;

  return (
    <Link
      to={i.path}
      className={`flex items-center sidebar ${
        isActive ? "bg-white text-black rounded-xl" : ""
      }`}
    >
      <span className="pl-4 text-3xl md:pl-10">{i.icon}</span>
      <span className="pl-2 md:pl-4 text-1xl">{i.label}</span>
    </Link>
  );
}

export default Sidebar;
