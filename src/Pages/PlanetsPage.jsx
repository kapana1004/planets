import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import shapeIcon from "../../public/assets/Shape.svg";
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
  const [temperature, setTemerature] = useState(planet.temperature);
  const [borderColor, setBorderColor] = useState("");

  useEffect(() => {
    const newPlanet = planetsData.find(
      (planet) => planet.name.toLowerCase() === nameId
    );

    setCurrentText(newPlanet.overview.content);
    setCurrentSource(newPlanet.overview.source);
    setPlanetImage(planet.images.planet);
    setRotation(planet.rotation);
    setRevolution(planet.revolution);
    setRadius(planet.radius);
    setTemerature(planet.temperature);
  }, [location.pathname]);

  const handleStructureText = () => {
    setCurrentText(planet.structure.content);
    setPlanetImage(planet.images.internal);
    setSurfaceImageActive(false);
  };
  const handleSurfaceText = () => {
    setCurrentText(planet.geology.content);
    setPlanetImage(planet.images.planet);
    setSurfaceImage(planet.images.geology);
    setSurfaceImageActive(true);
  };

  const handleOverviewText = () => {
    setCurrentText(planet.overview.content);
    setPlanetImage(planet.images.planet);
    setSurfaceImageActive(false);
  };

  console.log(borderColor);

  return (
    <div className=" flex flex-col justify-center items-center">
      <div className=" w-[100%] pt-[15px]  flex flex-row justify-around border-b-[1px]">
        <div
          className={` border-b-[3px] ${borderColor} w-[100%] pl-[35px] pb-[20px]`}
        >
          <span
            onClick={handleOverviewText}
            className=" text-[9px] hover:font-bold cursor-pointer "
          >
            OVERVIEW
          </span>
        </div>

        <div className=" w-[100%] pl-[35px]">
          <span
            onClick={handleStructureText}
            className=" text-[9px] hover:font-bold cursor-pointer "
          >
            STRUCTURE
          </span>
        </div>
        <div className=" w-[100%] pl-[35px]">
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
            className=" w-[65px] h-[65px] absolute top-[60%] left-[22%]"
            src={surfaceImage}
            alt="geology"
          />
        ) : null}
      </div>
      <h1 className=" text-white text-[40px] ">{planet.name.toUpperCase()}</h1>
      <p className=" w-[327px] text-[11px] leading-[22px] pb-[30px]">
        {currentText}
      </p>
      <div className=" flex flex-row mb-[28px]">
        <span className=" pr-[5px] text-[#838391]">Source:</span>
        <a className=" text-[#838391] pr-[5px]" href={currentSource}>
          Wikkipedia
        </a>
        <img src={shapeIcon} alt="shape" />
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
