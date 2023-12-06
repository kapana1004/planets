import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import shapeIcon from "/assets/icon-source.svg";
import Planetdatafooter from "../components/Planetdatafooter";
import Planetsstructure from "../components/Planetsstructure";
import Planetcontent from "../components/Planetcontent";

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
      <Planetsstructure
        borderColor={borderColor}
        handleOverviewText={handleOverviewText}
        handleSurfaceText={handleSurfaceText}
        handleStructureText={handleStructureText}
        overviewColorActive={overviewColorActive}
        structureColorActive={structureColorActive}
        surfaceColorAcrive={surfaceColorAcrive}
      />

      <Planetcontent
        planetImage={planetImage}
        surfaceImageActive={surfaceImageActive}
        surfaceImage={surfaceImage}
        currentText={currentText}
        currentSource={currentSource}
        shapeIcon={shapeIcon}
        planet={planet}
        overviewColorActive={overviewColorActive}
        structureColorActive={structureColorActive}
        surfaceColorAcrive={surfaceColorAcrive}
        borderColor={borderColor}
        handleOverviewText={handleOverviewText}
        handleStructureText={handleStructureText}
        handleSurfaceText={handleSurfaceText}
      />

      {!activMenu ? (
        <Planetdatafooter
          activMenu={activMenu}
          setActivMenu={setActivMenu}
          rotation={rotation}
          revolution={revolution}
          radius={radius}
          temperature={temperature}
          planet={planet}
        />
      ) : null}
    </div>
  );
}
