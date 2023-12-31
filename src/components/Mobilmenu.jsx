import React from "react";
import { Link } from "react-router-dom";

export default function Mobilmenu({ openCloseMenu }) {
  return (
    <div className=" flex flex-col md:hidden">
      <Link to="/mercury">
        {" "}
        <div
          onClick={openCloseMenu}
          className=" flex flex-row justify-between pt-[20px] pl-[5px] pr-[10px] border-b-[0.2px] border-b-gray-600 pb-[15px] bgColor"
        >
          <div className=" flex flex-row w-[135px] h-[25px] ml-[10px] ">
            <div className=" rounded-full bg-slate-50 w-[20px] h-[20px] "></div>{" "}
            <h1 className=" font-bold text-[15px] ml-[20px] text-white">
              MERCURY
            </h1>{" "}
          </div>
          <span className=" text-slate-500"> {">"} </span>
        </div>
      </Link>

      <Link to="/venus">
        <div
          onClick={openCloseMenu}
          className=" flex flex-row justify-between pt-[20px] pl-[5px] pr-[10px] border-b-[0.2px]   border-b-gray-600  pb-[15px] bgColor"
        >
          <div className=" flex flex-row w-[135px] h-[25px] ml-[10px] ">
            <div className=" rounded-full bg-[#F7CC7F]  w-[20px] h-[20px] "></div>{" "}
            <h1 className=" font-bold text-[15px] ml-[20px] text-white">
              VENUS
            </h1>{" "}
          </div>
          <span className=" text-slate-500"> {">"} </span>
        </div>
      </Link>

      <Link to="/earth">
        <div
          onClick={openCloseMenu}
          className=" flex flex-row justify-between pt-[20px] pl-[5px] pr-[10px] border-b-[0.2px]   border-b-gray-600  pb-[15px] bgColor"
        >
          <div className=" flex flex-row w-[135px] h-[25px] ml-[10px] ">
            <div className=" rounded-full bg-[#545BFE]  w-[20px] h-[20px] "></div>{" "}
            <h1 className=" font-bold text-[15px] ml-[20px] text-white ">
              EARTH
            </h1>{" "}
          </div>
          <span className=" text-slate-500"> {">"} </span>
        </div>
      </Link>
      <Link to="/mars">
        <div
          onClick={openCloseMenu}
          className=" flex flex-row justify-between pt-[20px] pl-[5px] pr-[10px] border-b-[0.2px]   border-b-gray-600  pb-[15px] bgColor"
        >
          <div className=" flex flex-row w-[135px] h-[25px] ml-[10px] ">
            <div className=" rounded-full bg-[#FF6A45] w-[20px] h-[20px] "></div>{" "}
            <h1 className=" font-bold text-[15px] ml-[20px] text-white">
              MARS
            </h1>{" "}
          </div>
          <span className=" text-slate-500"> {">"} </span>
        </div>
      </Link>

      <Link to="/jupiter">
        <div
          onClick={openCloseMenu}
          className=" flex flex-row justify-between pt-[20px] pl-[5px] pr-[10px] border-b-[0.2px]   border-b-gray-600  pb-[15px] bgColor"
        >
          <div className=" flex flex-row w-[135px] h-[25px] ml-[10px] ">
            <div className=" rounded-full bg-[#ECAD7A] w-[20px] h-[20px] "></div>{" "}
            <h1 className=" font-bold text-[15px] ml-[20px] text-white">
              JUPITER
            </h1>{" "}
          </div>
          <span className=" text-slate-500"> {">"} </span>
        </div>
      </Link>

      <Link to="/saturn">
        <div
          onClick={openCloseMenu}
          className=" flex flex-row justify-between pt-[20px] pl-[5px] pr-[10px] border-b-[0.2px]   border-b-gray-600  pb-[15px] bgColor"
        >
          <div className=" flex flex-row w-[135px] h-[25px] ml-[10px] ">
            <div className=" rounded-full bg-[#FCCB6B] w-[20px] h-[20px] "></div>{" "}
            <h1 className=" font-bold text-[15px] ml-[20px] text-white">
              SATURN
            </h1>{" "}
          </div>
          <span className=" text-slate-500"> {">"} </span>
        </div>
      </Link>
      <Link to="/uranus">
        <div
          onClick={openCloseMenu}
          className=" flex flex-row justify-between pt-[20px] pl-[5px] pr-[10px] border-b-[0.2px]   border-b-gray-600  pb-[15px] bgColor"
        >
          <div className=" flex flex-row w-[135px] h-[25px] ml-[10px] ">
            <div className=" rounded-full bg-[#65F0D5] w-[20px] h-[20px] "></div>{" "}
            <h1 className=" font-bold text-[15px] ml-[20px] text-white">
              URANUS
            </h1>{" "}
          </div>
          <span className=" text-slate-500"> {">"} </span>
        </div>
      </Link>

      <Link to="/neptune">
        <div
          onClick={openCloseMenu}
          className=" flex flex-row justify-between pt-[20px] pl-[5px] pr-[10px] border-b-[0.1px]  border-b-gray-600  pb-[15px] bgColor"
        >
          <div className=" flex flex-row w-[135px] h-[25px] ml-[10px] ">
            <div className=" rounded-full bg-[#497EFA] w-[20px] h-[20px] "></div>{" "}
            <h1 className=" font-bold text-[15px] ml-[20px] text-white">
              NEPTUNE
            </h1>{" "}
          </div>
          <span className=" text-slate-500 "> {">"} </span>
        </div>
      </Link>
    </div>
  );
}
