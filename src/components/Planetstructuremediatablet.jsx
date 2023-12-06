import React from "react";

export default function Planetstructuremediatablet({
  overviewColorActive,
  structureColorActive,
  surfaceColorAcrive,
  borderColor,
  handleOverviewText,
  handleStructureText,
  handleSurfaceText,
}) {
  return (
    <div className=" hidden  md:flex md:flex-col  md:w-[281px] md:gap-[16px] md:pt-[50px] md:ml-[70px] ">
      <div
        onClick={handleOverviewText}
        className={` w-[100%] h-[40px] border-[0.4px]  flex items-center cursor-pointer`}
        style={
          overviewColorActive
            ? { backgroundColor: ` ${borderColor.current}` }
            : null
        }
      >
        <span className=" mr-[10px] text-[12px] pl-[20px] font-bold">01</span>
        <span className=" text-[12px] hover:font-bold cursor-pointer font-bold">
          OVERVIEW
        </span>
      </div>

      <div
        onClick={handleStructureText}
        className=" w-[100%] h-[40px] border-[0.4px] flex items-center cursor-pointer"
        style={
          structureColorActive
            ? { backgroundColor: ` ${borderColor.current}` }
            : null
        }
      >
        <span className=" mr-[10px] text-[12px] pl-[20px] font-bold">02</span>
        <span className=" text-[12px] hover:font-bold cursor-pointer font-bold ">
          STRUCTURE
        </span>
      </div>
      <div
        onClick={handleSurfaceText}
        className=" w-[100%] h-[40px] border-[0.4px] flex items-center cursor-pointer"
        style={
          surfaceColorAcrive
            ? { backgroundColor: ` ${borderColor.current}` }
            : null
        }
      >
        <span className=" mr-[10px] text-[12px] pl-[20px] font-bold">03</span>
        <span className=" text-[12px] hover:font-bold   font-bold">
          SURFACE{" "}
        </span>
      </div>
    </div>
  );
}
