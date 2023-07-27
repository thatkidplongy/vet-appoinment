import React, { useState } from "react";
import Image from "next/image";

import { bell, settings, signOut, userAvatar } from "@/assets";
import {
  ArrowRightOnRectangleIcon,
  BellAlertIcon,
  BellIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Cog8ToothIcon,
} from "@heroicons/react/20/solid";
import Calendar from "./Calendar";
import MyCalendar from "./Calendar";
import AppointmentForm from "./AppointmentForm";
import { useEventReducer } from "@/hooks/useEventReducer";

type TopBarProps = {
  isMinimized: boolean;
};

const TopBar = (props: TopBarProps) => {
  const { isMinimized } = props;
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="flex flex-col">
      <div className="self-stretch flex-col justify-start items-start inline-flex">
        <div
          className={`${
            isMinimized ? "w-[1800px]" : "w-[1680px]"
          } h-[112px] p-10 justify-start items-center gap-10 transition-width duration-100 ease-out inline-flex border-b-gray-600 border-2 border-opacity-20`}
        >
          <input
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              // resetSuggestion();
            }}
            className="text-zinc-900 text-opacity-40 text-base font-medium tracking-tight outline-none bg-opacity-7 w-[1274px] h-11 px-5 py-3 bg-stone-200 bg-opacity-70 rounded-xl justify-between items-start gap-2.5 inline-flex"
            placeholder="Search"
          />
          <div className="justify-start items-start gap-3 flex">
            <div className="justify-start items-center gap-3 flex">
              <Image src={userAvatar} width={30} height={30} alt="" />
              <div className="justify-start items-start gap-1 flex">
                <div className="text-zinc-900 text-base font-semibold tracking-tight">
                  Jane Dee
                </div>
                <ChevronDownIcon
                  className="w-5 h-5 flex-shrink-0 text-gray-800 self-center "
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="group w-9 h-9 p-2.5 bg-zinc-100 rounded-[36px] justify-center items-center gap-2.5 flex hover:bg-orange-200 hover:text-orange-500 transition ease-in-out hover:-translate-y-1 hover:scale-110">
              <BellIcon
                className="w-5 h-5 flex-shrink-0 text-gray-800  group-hover:text-orange-500 "
                aria-hidden="true"
              />
            </div>
            <div className="group w-9 h-9 p-2.5 bg-zinc-100 rounded-[36px] justify-center items-center gap-2.5 flex hover:bg-orange-300 transition ease-in-out hover:-translate-y-1 hover:scale-110">
              <Cog8ToothIcon
                className="w-5 h-5 flex-shrink-0 text-gray-800  group-hover:text-orange-500 "
                aria-hidden="true"
              />
            </div>
            <div className="group w-9 h-9 p-2.5 bg-zinc-100 rounded-[36px] justify-center items-center gap-2.5 flex hover:bg-orange-300 transition ease-in-out hover:-translate-y-1 hover:scale-110">
              <ArrowRightOnRectangleIcon
                className="w-5 h-5 flex-shrink-0 text-gray-800  group-hover:text-orange-500"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch h-[0px] border border-white border-opacity-20"></div>
      </div>
      <MyCalendar searchTerm={searchTerm} />
    </div>
  );
};

export default TopBar;
