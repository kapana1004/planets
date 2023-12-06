import React from "react";

export default function Planetsstructure({
  overviewColorActive,
  structureColorActive,
  surfaceColorAcrive,
  borderColor,
  handleOverviewText,
  handleStructureText,
  handleSurfaceText,
}) {
  return (
    <div className=" w-[100%] pt-[15px]  flex flex-row justify-around border-b-[0.4px] md:hidden ">
      <div
        className={` w-[100%] pl-[35px] pb-[20px]`}
        style={
          overviewColorActive
            ? { borderBottom: `3px solid ${borderColor.current}` }
            : null
        }
      >
        <span
          onClick={handleOverviewText}
          className=" text-[9px] hover:font-bold cursor-pointer "
        >
          OVERVIEW
        </span>
      </div>

      <div
        className=" w-[100%] pl-[35px]"
        style={
          structureColorActive
            ? { borderBottom: `3px solid ${borderColor.current}` }
            : null
        }
      >
        <span
          onClick={handleStructureText}
          className=" text-[9px] hover:font-bold cursor-pointer "
        >
          STRUCTURE
        </span>
      </div>
      <div
        className=" w-[100%] pl-[35px]"
        style={
          surfaceColorAcrive
            ? { borderBottom: `3px solid ${borderColor.current}` }
            : null
        }
      >
        <span
          onClick={handleSurfaceText}
          className=" text-[9px] hover:font-bold  cursor-pointer"
        >
          SURFACE{" "}
        </span>
      </div>
    </div>
  );
}
