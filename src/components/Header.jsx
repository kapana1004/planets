import React from "react";
import Tabletheader from "./Tabletheader";
import Desktopheader from "./Desktopheader";

export default function Header({
  activMenu,
  openCloseMenu,
  planetsData,
  borderColor,
  overviewColorActive,
}) {
  console.log(planetsData.name);
  return (
    <>
      <Desktopheader
        planetsData={planetsData}
        borderColor={borderColor}
        overviewColorActive={overviewColorActive}
      />

      <div className=" lg:hidden flex justify-between min-w-[100vw] border-b-[0.2px] border-[rgba(255, 255, 255, 1)] pl-[10px] pr-[10px] pb-[15px] mt-[15px] md:justify-center md:flex-col md:items-center md:border-b-0">
        <span className=" text-[28px] font-[antonio] md:mb-[20px]">
          THE PLANETS
        </span>
        <Tabletheader />

        <svg
          onClick={openCloseMenu}
          className=" w-[24px] h-[17px] mt-[10px] md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="17"
        >
          <g fill={activMenu ? "gray" : "white"} fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg>
      </div>
    </>
  );
}
