import React, { useState } from "react";
import Image from "next/image";
import { TabsModel } from "@/interface/tabs";
import { leftSideBarArrow, logo, rightSideBarArrow } from "@/assets";

type SideBarProps = {
  tabs: TabsModel[];
  isMinimized: boolean;
  toggleMinimize: () => void;
};

const SideBar = (props: SideBarProps) => {
  const { tabs, isMinimized, toggleMinimize } = props;

  return (
    <div
      className={`${
        isMinimized ? "w-[120px]" : "w-60 "
      } bg-zinc-900 flex-col auto min-h-screen justify-start items-start inline-flex transition-all ease-in-out duration-300`}
    >
      <div
        className={`self-stretch grow shrink basis-0 py-10 flex-col justify-start items-center gap-10 flex`}
      >
        <div className="self-stretch h-[76px] flex-col justify-start items-center gap-10 flex">
          <div className="px-10 flex-col justify-start items-start gap-5 flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="flex justify-start items-start gap-2.5">
                <Image
                  src={logo}
                  width={30}
                  height={30}
                  className="relative text-white"
                  alt=""
                />
                {!isMinimized && (
                  <div className="text-orange-500 text-base font-bold tracking-tight text-center self-center">
                    LOREM
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="self-stretch h-[0px] border border-white border-opacity-20"></div>
        </div>
        <div
          className={`self-stretch grow shrink basis-0 flex-col justify-start items-start flex `}
        >
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className={`self-stretch px-10 py-5 bg-zinc-900 justify-start items-center inline-flex cursor-pointer hover:bg-zinc-800 hover:border-r-4 hover:border-r-orange-600 group`}
            >
              <div className="justify-start items-center gap-3 flex ">
                <Image
                  src={tab.tabLogo}
                  width={20}
                  height={20}
                  className="relative group-hover:text-orange-600"
                  style={{ filter: "invert(1)" }}
                  alt=""
                />
                {!isMinimized && (
                  <div
                    className={`text-white text-base font-medium tracking-tight group-hover:text-orange-600 whitespace-nowrap transition-text  ${
                      isMinimized ? "animate-fade-left" : "animate-fade-right"
                    } animate-duration-300`}
                  >
                    {tab.title}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="w-[220px] h-[0px] border border-white border-opacity-20"></div>
        <div className="flex-col justify-center items-center gap-3 flex">
          <div className="flex-col justify-start items-start gap-2.5 flex">
            <Image
              src={logo}
              width={20}
              height={20}
              className="relative text-white self-center"
              alt=""
            />
            <div className="text-white text-opacity-50 text-xs font-medium tracking-tight">
              © Lorem 2023
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-1/2  bg-black hover:bg-blue-600 text-black px-4 py-2 rounded-md  transition-width duration-300 ease-in-out z-10 ${
          isMinimized ? "left-[6rem]" : "left-[12.5rem]"
        }`}
        onClick={toggleMinimize}
      >
        <Image
          src={isMinimized ? rightSideBarArrow : leftSideBarArrow}
          width={15}
          height={15}
          className="relative text-white"
          alt=""
        />
      </div>
    </div>
  );
};

export default SideBar;
