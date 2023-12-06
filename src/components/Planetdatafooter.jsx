import React from "react";
// import { useLocation } from "react-router-dom";

export default function ({ rotation, revolution, radius, temperature }) {
  return (
    <div className=" w-[375px] flex pl-[24px] flex-col gap-[10px] md:flex-row md:gap-[11px] md:w-[100%] md:justify-center">
      <div className=" w-[327px] h-[48px] flex items-center justify-between border-[0.3px] pl-[15px] pr-[15px] md:w-[164px] md:h-[88px] md:flex-col md:justify-around">
        <span className=" text-[8px] text-[#838391] ">ROTATION TIME</span>
        <span className=" md:text-[20px]"> {rotation} </span>
      </div>
      <div className=" w-[327px] h-[48px] flex items-center justify-between border-[0.3px] pl-[15px] pr-[15px] md:w-[164px] md:h-[88px] md:flex-col md:justify-around">
        <span className=" text-[8px] text-[#838391] ">REVOLUTION TIME</span>
        <span className=" md:text-[20px]">{revolution}</span>
      </div>
      <div className=" w-[327px] h-[48px] flex items-center justify-between border-[0.3px] pl-[15px] pr-[15px] md:w-[164px] md:h-[88px] md:flex-col md:justify-around">
        <span className=" text-[8px] text-[#838391] ">radius</span>
        <span className=" md:text-[20px]">{radius}</span>
      </div>
      <div className=" w-[327px] h-[48px] flex items-center justify-between border-[0.3px] pl-[15px] pr-[15px] md:w-[164px] md:h-[88px] md:flex-col md:justify-around">
        <span className=" text-[8px] text-[#838391] ">AVERAGE TEMP.</span>
        <span className=" md:text-[20px]">{temperature}</span>
      </div>
    </div>
  );
}
