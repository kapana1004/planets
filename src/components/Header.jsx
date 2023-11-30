import React from "react";

export default function Header({ activMenu, setActivMenu, openCloseMenu }) {
  return (
    <div className=" flex justify-between min-w-[100vw] border-b border-[rgba(255, 255, 255, 1)] pl-[10px] pr-[10px] pb-[15px] mt-[15px] ">
      <span className=" text-[28px] font-[antonio]">THE PLANETS</span>
      {/* <img
      className=" w-[24px] h-[17px] mt-[10px]"
      src={menuIcon}
      alt="menu"
    /> */}
      <svg
        onClick={openCloseMenu}
        className=" w-[24px] h-[17px] mt-[10px]"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="17"
      >
        <g fill={activMenu ? "gray" : "white"} fill-rule="evenodd">
          <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
        </g>
      </svg>
    </div>
  );
}
