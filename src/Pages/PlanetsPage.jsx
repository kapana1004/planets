import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import shapeIcon from "../../public/assets/Shape.svg";

export default function PlanetsPage({ planetsData }) {
  const location = useLocation();

  const { nameId } = useParams();

  const planet = planetsData.find(
    (planet) => planet.name.toLowerCase() === nameId
  );
  const [currentText, setCurrentText] = useState(planet.overview.content);
  const [currentSource, setCurrentSource] = useState(planet.overview.content);
  useEffect(() => {
    const newPlanet = planetsData.find(
      (planet) => planet.name.toLowerCase() === nameId
    );

    setCurrentText(newPlanet.overview.content);
    setCurrentSource(newPlanet.overview.source);
  }, [location.pathname]);

  const handleStructureText = () => {
    setCurrentText(planet.structure.content);
  };
  const handleSurfaceText = () => {
    setCurrentText(planet.geology.content);
  };

  const handleOverviewText = () => {
    setCurrentText(planet.overview.content);
  };

  return (
    <div className=" flex flex-col justify-center items-center">
      <div className=" w-[100%] pt-[15px] pb-[15px] flex flex-row justify-around border-b border-[rgba(255, 255, 255, 1)]">
        <span
          onClick={handleOverviewText}
          className=" text-[9px] hover:font-bold cursor-pointer "
        >
          OVERVIEW
        </span>
        <span
          onClick={handleStructureText}
          className=" text-[9px] hover:font-bold cursor-pointer "
        >
          STRUCTURE
        </span>
        <span
          onClick={handleSurfaceText}
          className=" text-[9px] hover:font-bold  cursor-pointer"
        >
          SURFACE{" "}
        </span>
      </div>
      <img
        className=" w-[111px] h-[111px] mt-[100px] mb-[100px] "
        src={planet.images.planet}
        alt="planet"
      />
      <h1 className=" text-white text-[40px] ">{planet.name.toUpperCase()}</h1>
      <p className=" w-[327px] text-[11px] leading-[22px] pb-[30px]">
        {" "}
        {currentText}{" "}
      </p>
      <div className=" flex flex-row mb-[20]">
        <span className=" pr-[5px] text-[#838391]">Source:</span>
        <a className=" text-[#838391] pr-[5px]" href={currentSource}>
          {" "}
          Wikkipedia{" "}
        </a>
        <img src={shapeIcon} alt="shape" />
      </div>
    </div>
  );
}
