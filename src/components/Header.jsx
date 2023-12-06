import React from "react";

export default function Header({ activMenu, openCloseMenu }) {
  return (
    <div className=" flex justify-between min-w-[100vw] border-b-[0.2px] border-[rgba(255, 255, 255, 1)] pl-[10px] pr-[10px] pb-[15px] mt-[15px] md:justify-center">
      <span className=" text-[28px] font-[antonio]">THE PLANETS</span>

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
  );
}
