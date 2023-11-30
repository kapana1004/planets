import React from "react";
import { useNavigate } from "react-router-dom";

export default function Mobilmenu({ planetsData }) {
  console.log(planetsData);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("mercury", {
      state: {
        name: planetsData[0].name,
        image: "../assets/planet-mercury.svg",
      },
    });
  };
  return (
    <div className=" flex flex-col">
      <div
        onClick={handleNavigate}
        className=" flex flex-row justify-between pt-[20px] pl-[5px] pr-[10px] border-b border-[rgba(255, 255, 255, 1)] pb-[15px] bgColor"
      >
        <div className=" flex flex-row w-[135px] h-[25px] ml-[10px] ">
          <div className=" rounded-full bg-slate-50 w-[20px] h-[20px] "></div>{" "}
          <h1 className=" font-bold text-[15px] ml-[20px]">MERCURY</h1>{" "}
        </div>
        <span> {">"} </span>
      </div>
      <div className=" flex flex-row justify-between pt-[20px] pl-[5px] pr-[10px] border-b border-[rgba(255, 255, 255, 1)] pb-[15px] bgColor">
        <div className=" flex flex-row w-[135px] h-[25px] ml-[10px] ">
          <div className=" rounded-full bg-[#F7CC7F]  w-[20px] h-[20px] "></div>{" "}
          <h1 className=" font-bold text-[15px] ml-[20px]">VENUS</h1>{" "}
        </div>
        <span> {">"} </span>
      </div>

      <div className=" flex flex-row justify-between pt-[20px] pl-[5px] pr-[10px] border-b border-[rgba(255, 255, 255, 1)] pb-[15px] bgColor">
        <div className=" flex flex-row w-[135px] h-[25px] ml-[10px] ">
          <div className=" rounded-full bg-[#545BFE]  w-[20px] h-[20px] "></div>{" "}
          <h1 className=" font-bold text-[15px] ml-[20px]">EARTH</h1>{" "}
        </div>
        <span> {">"} </span>
      </div>

      <div className=" flex flex-row justify-between pt-[20px] pl-[5px] pr-[10px] border-b border-[rgba(255, 255, 255, 1)] pb-[15px] bgColor">
        <div className=" flex flex-row w-[135px] h-[25px] ml-[10px] ">
          <div className=" rounded-full bg-[#FF6A45] w-[20px] h-[20px] "></div>{" "}
          <h1 className=" font-bold text-[15px] ml-[20px]">MARS</h1>{" "}
        </div>
        <span> {">"} </span>
      </div>
      <div className=" flex flex-row justify-between pt-[20px] pl-[5px] pr-[10px] border-b border-[rgba(255, 255, 255, 1)] pb-[15px] bgColor">
        <div className=" flex flex-row w-[135px] h-[25px] ml-[10px] ">
          <div className=" rounded-full bg-[#ECAD7A] w-[20px] h-[20px] "></div>{" "}
          <h1 className=" font-bold text-[15px] ml-[20px]">JUPITER</h1>{" "}
        </div>
        <span> {">"} </span>
      </div>

      <div className=" flex flex-row justify-between pt-[20px] pl-[5px] pr-[10px] border-b border-[rgba(255, 255, 255, 1)] pb-[15px] bgColor">
        <div className=" flex flex-row w-[135px] h-[25px] ml-[10px] ">
          <div className=" rounded-full bg-[#FCCB6B] w-[20px] h-[20px] "></div>{" "}
          <h1 className=" font-bold text-[15px] ml-[20px]">SATURN</h1>{" "}
        </div>
        <span> {">"} </span>
      </div>
      <div className=" flex flex-row justify-between pt-[20px] pl-[5px] pr-[10px] border-b border-[rgba(255, 255, 255, 1)] pb-[15px] bgColor">
        <div className=" flex flex-row w-[135px] h-[25px] ml-[10px] ">
          <div className=" rounded-full bg-[#65F0D5] w-[20px] h-[20px] "></div>{" "}
          <h1 className=" font-bold text-[15px] ml-[20px]">URANUS</h1>{" "}
        </div>
        <span> {">"} </span>
      </div>
      <div className=" flex flex-row justify-between pt-[20px] pl-[5px] pr-[10px] border-b border-[rgba(255, 255, 255, 1)] pb-[15px] bgColor">
        <div className=" flex flex-row w-[135px] h-[25px] ml-[10px] ">
          <div className=" rounded-full bg-[#497EFA] w-[20px] h-[20px] "></div>{" "}
          <h1 className=" font-bold text-[15px] ml-[20px]">NEPTUNE</h1>{" "}
        </div>
        <span> {">"} </span>
      </div>
    </div>
  );
}
