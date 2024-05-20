/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  icon: any;
  to: string;
}

function Card({ title, icon, to }: CardProps) {
  return (
    <div className="relative w-[300px] h-[500px]">
      <Link to={to} className="hover:shadow-2xl hover:bg-gray-200">
        <div className="flex flex-col items-center justify-center h-full p-10 transition-transform duration-300 bg-white border shadow-2xl rounded-2xl w-fit transform-gpu hover:text-main hover:-translate-y-10">
          <h2 className="mb-4 text-4xl font-bold">{title}</h2>
          <div className="flex items-center justify-center flex-grow">
            {React.cloneElement(icon, {
              className: "text-black hover:text-main",
            })}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
