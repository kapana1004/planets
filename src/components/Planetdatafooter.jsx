import React from "react";
// import { useLocation } from "react-router-dom";

export default function ({ rotation, revolution, radius, temperature }) {
  return (
    <div className=" w-[375px] flex pl-[24px] flex-col gap-[10px]">
      <div className=" w-[327px] h-[48px] flex items-center justify-between border-[0.3px] pl-[15px] pr-[15px]">
        <span className=" text-[8px] text-[#838391] ">ROTATION TIME</span>
        <span> {rotation} </span>
      </div>
      <div className=" w-[327px] h-[48px] flex items-center justify-between border-[0.3px] pl-[15px] pr-[15px]">
        <span className=" text-[8px] text-[#838391] ">REVOLUTION TIME</span>
        <span>{revolution}</span>
      </div>
      <div className=" w-[327px] h-[48px] flex items-center justify-between border-[0.3px] pl-[15px] pr-[15px]">
        <span className=" text-[8px] text-[#838391] ">radius</span>
        <span>{radius}</span>
      </div>
      <div className=" w-[327px] h-[48px] flex items-center justify-between border-[0.3px] pl-[15px] pr-[15px]">
        <span className=" text-[8px] text-[#838391] ">AVERAGE TEMP.</span>
        <span>{temperature}</span>
      </div>
    </div>
  );
}
