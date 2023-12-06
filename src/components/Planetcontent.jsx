import React from "react";
import Planetstructuremediatablet from "./Planetstructuremediatablet";

export default function Planetcontent({
  planetImage,
  surfaceImageActive,
  surfaceImage,
  currentText,
  currentSource,
  shapeIcon,
  planet,
  overviewColorActive,
  structureColorActive,
  surfaceColorAcrive,
  borderColor,
  handleOverviewText,
  handleStructureText,
  handleSurfaceText,
}) {
  return (
    <>
      <div className=" flex relative">
        <img
          className=" w-[111px] h-[111px] mt-[100px] mb-[100px] "
          src={planetImage}
          alt="planet"
        />

        {surfaceImageActive ? (
          <img
            className="w-[65px] h-[65px] absolute top-[60%] left-[22%]"
            src={surfaceImage}
            alt="geology"
          />
        ) : null}
      </div>
      <div className=" flex  justify-center md:flex-row w-[100%]  md:ml-[28px] ">
        <div>
          <h1 className=" text-white text-[40px] md:pb-[20px] ">
            {planet.name.toUpperCase()}
          </h1>
          <p className=" w-[327px] text-[11px] leading-[22px] pb-[30px] md:w-[339px]">
            {currentText}
          </p>
          <div className=" flex flex-row mb-[28px] items-center">
            <span className=" pr-[5px] text-[#838391]">Source:</span>
            <a className=" text-[#838391] pr-[5px]" href={currentSource}>
              Wikkipedia
            </a>
            <img className=" w-[12px] h-[12px]" src={shapeIcon} alt="shape" />
          </div>
        </div>

        <div className=" flex flex-col ">
          <Planetstructuremediatablet
            overviewColorActive={overviewColorActive}
            structureColorActive={structureColorActive}
            surfaceColorAcrive={surfaceColorAcrive}
            borderColor={borderColor}
            handleOverviewText={handleOverviewText}
            handleStructureText={handleStructureText}
            handleSurfaceText={handleSurfaceText}
          />
        </div>
      </div>
    </>
  );
}
