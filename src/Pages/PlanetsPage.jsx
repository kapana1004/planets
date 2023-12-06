import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import shapeIcon from "/assets/icon-source.svg";
import Planetdatafooter from "../components/Planetdatafooter";

export default function PlanetsPage({ planetsData, activMenu, setActivMenu }) {
  const location = useLocation();

  const { nameId } = useParams();

  const planet = planetsData.find(
    (planet) => planet.name.toLowerCase() === nameId
  );
  const [currentText, setCurrentText] = useState(planet.overview.content);
  const [currentSource, setCurrentSource] = useState(planet.overview.content);
  const [planetImage, setPlanetImage] = useState(planet.images.planet);
  const [surfaceImage, setSurfaceImage] = useState(planet.images.geology);
  const [surfaceImageActive, setSurfaceImageActive] = useState(false);
  const [rotation, setRotation] = useState(planet.rotation);
  const [revolution, setRevolution] = useState(planet.revolution);
  const [radius, setRadius] = useState(planet.radius);
  const [temperature, setTemperature] = useState(planet.temperature);
  const [overviewColorActive, setOverviewColorActive] = useState(true);
  const [structureColorActive, setStructureColorActive] = useState(false);
  const [surfaceColorAcrive, setSurfaceColorActive] = useState(false);
  let borderColor = useRef("");

  useEffect(() => {
    const newPlanet = planetsData.find(
      (planet) => planet.name.toLowerCase() === nameId
    );
    borderColor.current = planet.color;

    setCurrentText(newPlanet.overview.content);
    setCurrentSource(newPlanet.overview.source);
    setPlanetImage(planet.images.planet);
    setRotation(planet.rotation);
    setRevolution(planet.revolution);
    setRadius(planet.radius);
    setTemperature(planet.temperature);
  }, [location.pathname]);

  const handleStructureText = () => {
    setCurrentText(planet.structure.content);
    setPlanetImage(planet.images.internal);
    setSurfaceImageActive(false);
    setSurfaceImageActive(false);
    setStructureColorActive(true);
    setSurfaceColorActive(false);
    setOverviewColorActive(false);
  };
  const handleSurfaceText = () => {
    setCurrentText(planet.geology.content);
    setPlanetImage(planet.images.planet);
    setSurfaceImage(planet.images.geology);
    setSurfaceImageActive(true);
    setStructureColorActive(false);
    setOverviewColorActive(false);
    setSurfaceColorActive(true);
  };

  const handleOverviewText = () => {
    setCurrentText(planet.overview.content);
    setPlanetImage(planet.images.planet);
    setSurfaceImageActive(false);
    setOverviewColorActive(true);
    setSurfaceColorActive(false);
    setStructureColorActive(false);
  };

  return (
    <div className=" flex flex-col justify-center items-center">
      <div className=" w-[100%] pt-[15px]  flex flex-row justify-around border-b-[0.4px]">
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
      <h1 className=" text-white text-[40px] ">{planet.name.toUpperCase()}</h1>
      <p className=" w-[327px] text-[11px] leading-[22px] pb-[30px]">
        {currentText}
      </p>
      <div className=" flex flex-row mb-[28px] items-center">
        <span className=" pr-[5px] text-[#838391]">Source:</span>
        <a className=" text-[#838391] pr-[5px]" href={currentSource}>
          Wikkipedia
        </a>
        <img className=" w-[12px] h-[12px]" src={shapeIcon} alt="shape" />
      </div>

      {!activMenu ? (
        <Planetdatafooter
          activMenu={activMenu}
          setActivMenu={setActivMenu}
          rotation={rotation}
          revolution={revolution}
          radius={radius}
          temperature={temperature}
        />
      ) : null}
    </div>
  );
}
