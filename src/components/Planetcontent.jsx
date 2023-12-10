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
    <div className=" md:max-h-[600px] lg:flex lg:flex-row lg:justify-evenly lg:min-w-[100vw] lg:pl-[40px] lg:max-h-[650px] ">
      <div className=" flex justify-center relative pt-[30px] pb-[30px] lg:items-center lg:pl-[100px]">
        <img
          className=" max-w-[180px] md:max-w-[300px] lg:max-w-[370px] "
          src={planetImage}
          alt="planet"
        />

        {surfaceImageActive ? (
          <img
            className="w-[65px] h-[65px] absolute top-[75%] left-[40%] md:max-w-[129px] md:left-[45%] lg:left-[54%] lg:top-[65%] lg:h-[80px]"
            src={surfaceImage}
            alt="geology"
          />
        ) : null}
      </div>
      <div className=" flex  justify-center md:flex-row w-[100%]  md:ml-[10px] lg:flex-col lg:w-[350px] lg:pt-[126px]">
        <div className=" flex flex-col items-center">
          <h1 className=" text-white text-[40px] md:pb-[20px] ">
            {planet.name.toUpperCase()}
          </h1>
          <p className=" w-[327px] text-[11px] leading-[22px] pb-[20px] md:w-[339px]">
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

        <div className=" flex flex-col lg:pb-[86px]">
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
    </div>
  );
}
