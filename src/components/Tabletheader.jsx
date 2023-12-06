import React from "react";
import { Link } from "react-router-dom";

export default function Tabletheader({}) {
  return (
    <div className=" hidden md:flex md:flex-row md:gap-[33px] md:pb-[27px] md:border-b-[0.1px] md:justify-center md:w-[100%]">
      <Link to="/mercury">
        <span className=" text-[11px] text-white font-bold">MERCURY</span>
      </Link>
      <Link to="/venus">
        {" "}
        <span className=" text-[11px] text-white font-bold">VENUS</span>
      </Link>
      <Link to="/earth">
        {" "}
        <span className=" text-[11px] text-white font-bold">EARTH</span>
      </Link>
      <Link to="/mars">
        <span className=" text-[11px] text-white font-bold">MARS</span>
      </Link>
      <Link to="/jupiter">
        <span className=" text-[11px] text-white font-bold">JUPITER</span>{" "}
      </Link>
      <Link to="/saturn">
        {" "}
        <span className=" text-[11px] text-white font-bold">SATURN</span>
      </Link>
      <Link to="/neptune">
        <span className=" text-[11px] text-white font-bold">NEPTUNE</span>
      </Link>
      <Link to="/uranus">
        <span className=" text-[11px] text-white font-bold">URANUS</span>
      </Link>
    </div>
  );
}
