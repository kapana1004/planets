import React from "react";
import { useLocation } from "react-router-dom";

export default function ({ planetsData }) {
  const location = useLocation();

  console.log(location);

  return (
    <div className=" w-[375px] flex pl-[24px] flex-col">
      <div className=" w-[327px] h-[48px] flex items-center">
        <span className=" text-[8px] text-[#838391] ">ROTATION TIME</span>
        <span> </span>
      </div>
      <div className=" w-[327px] h-[48px] flex items-center">
        <span className=" text-[8px] text-[#838391] ">REVOLUTION TIME</span>
      </div>
      <div className=" w-[327px] h-[48px] flex items-center">
        <span className=" text-[8px] text-[#838391] ">radius</span>
      </div>
      <div className=" w-[327px] h-[48px] flex items-center">
        <span className=" text-[8px] text-[#838391] ">AVERAGE TEMP.</span>
      </div>
    </div>
  );
}
