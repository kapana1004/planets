import { React, useState } from "react";
import { Link } from "react-router-dom";

export default function Desktopheader({ borderColor, overviewColorActive }) {
  const [mercuryColorActive, setMercuryColorActive] = useState(true);
  const [venusColorActive, setVenusColorActive] = useState(false);
  const [earthColorActive, setEarthColorActive] = useState(false);
  const [marsColorActive, setMarsColorActive] = useState(false);
  const [jupiterColorActive, setJupiterColorActive] = useState(false);
  const [saturnColorActive, setSaturnColorActive] = useState(false);
  const [neptuneColorActive, setNeptuneColorActive] = useState(false);
  const [uranusColorActive, setUranusColorActive] = useState(false);

  const handleMercury = () => {
    setMercuryColorActive(true);
    setVenusColorActive(false);
    setEarthColorActive(false);
    setMarsColorActive(false);
    setJupiterColorActive(false);
    setSaturnColorActive(false);
    setNeptuneColorActive(false);
    setUranusColorActive(false);
  };
  const handleVenus = () => {
    setMercuryColorActive(false);
    setVenusColorActive(true);
    setEarthColorActive(false);
    setMarsColorActive(false);
    setJupiterColorActive(false);
    setSaturnColorActive(false);
    setNeptuneColorActive(false);
    setUranusColorActive(false);
  };
  const handleEarth = () => {
    setMercuryColorActive(false);
    setVenusColorActive(false);
    setEarthColorActive(true);
    setMarsColorActive(false);
    setJupiterColorActive(false);
    setSaturnColorActive(false);
    setNeptuneColorActive(false);
    setUranusColorActive(false);
  };
  const handleMars = () => {
    setMercuryColorActive(false);
    setVenusColorActive(false);
    setEarthColorActive(false);
    setMarsColorActive(true);
    setJupiterColorActive(false);
    setSaturnColorActive(false);
    setNeptuneColorActive(false);
    setUranusColorActive(false);
  };
  const handleJupiter = () => {
    setMercuryColorActive(false);
    setVenusColorActive(false);
    setEarthColorActive(false);
    setMarsColorActive(false);
    setJupiterColorActive(true);
    setSaturnColorActive(false);
    setNeptuneColorActive(false);
    setUranusColorActive(false);
  };
  const handleSaturn = () => {
    setMercuryColorActive(false);
    setVenusColorActive(false);
    setEarthColorActive(false);
    setMarsColorActive(false);
    setJupiterColorActive(false);
    setSaturnColorActive(true);
    setNeptuneColorActive(false);
    setUranusColorActive(false);
  };
  const handleNeptune = () => {
    setMercuryColorActive(false);
    setVenusColorActive(false);
    setEarthColorActive(false);
    setMarsColorActive(false);
    setJupiterColorActive(false);
    setSaturnColorActive(false);
    setNeptuneColorActive(true);
    setUranusColorActive(false);
  };
  const handleUranus = () => {
    setMercuryColorActive(false);
    setVenusColorActive(false);
    setEarthColorActive(false);
    setMarsColorActive(false);
    setJupiterColorActive(false);
    setSaturnColorActive(false);
    setNeptuneColorActive(false);
    setUranusColorActive(true);
  };

  return (
    <div className=" hidden lg:w-[100%] lg:flex lg:flex-row lg:justify-between lg:pl-[30px] lg:pr-[30px] lg:items-center lg:pt-[15px]">
      <span className=" text-[28px] font-[antonio]">THE PLANETS</span>
      <div className="w-[665px] flex justify-end items-center gap-[33px]">
        <Link to="/mercury">
          <span
            onClick={handleMercury}
            className=" text-[11px] text-white font-bold pt-[20px]"
            style={
              mercuryColorActive
                ? { borderTop: `3px solid ${borderColor.current}` }
                : null
            }
          >
            MERCURY
          </span>
        </Link>
        <Link to="/venus">
          {" "}
          <span
            onClick={handleVenus}
            className=" text-[11px] text-white font-bold pt-[20px]"
            style={
              venusColorActive
                ? { borderTop: `3px solid ${borderColor.current}` }
                : null
            }
          >
            VENUS
          </span>
        </Link>
        <Link to="/earth">
          {" "}
          <span
            onClick={handleEarth}
            className=" text-[11px] text-white font-bold pt-[20px]"
            style={
              earthColorActive
                ? { borderTop: `3px solid ${borderColor.current}` }
                : null
            }
          >
            EARTH
          </span>
        </Link>
        <Link to="/mars">
          <span
            onClick={handleMars}
            className=" text-[11px] text-white font-bold pt-[20px]"
            style={
              marsColorActive
                ? { borderTop: `3px solid ${borderColor.current}` }
                : null
            }
          >
            MARS
          </span>
        </Link>
        <Link to="/jupiter">
          <span
            onClick={handleJupiter}
            className=" text-[11px] text-white font-bold pt-[20px]"
            style={
              jupiterColorActive
                ? { borderTop: `3px solid ${borderColor.current}` }
                : null
            }
          >
            JUPITER
          </span>{" "}
        </Link>
        <Link to="/saturn">
          {" "}
          <span
            onClick={handleSaturn}
            className=" text-[11px] text-white font-bold pt-[20px]"
            style={
              saturnColorActive
                ? { borderTop: `3px solid ${borderColor.current}` }
                : null
            }
          >
            SATURN
          </span>
        </Link>
        <Link to="/neptune">
          <span
            onClick={handleNeptune}
            className=" text-[11px] text-white font-bold pt-[20px]"
            style={
              neptuneColorActive
                ? { borderTop: `3px solid ${borderColor.current}` }
                : null
            }
          >
            NEPTUNE
          </span>
        </Link>
        <Link to="/uranus">
          <span
            onClick={handleUranus}
            className=" text-[11px] text-white font-bold pt-[20px]"
            style={
              uranusColorActive
                ? { borderTop: `3px solid ${borderColor.current}` }
                : null
            }
          >
            URANUS
          </span>
        </Link>
      </div>
    </div>
  );
}
