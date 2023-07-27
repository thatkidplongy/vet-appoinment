import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import moment from "moment";
import React from "react";

type MyCalendarProps = {
  label: string;
  onNavigate: (action: any) => void;
  onView: (view: any) => void;
  handleAddEvent: (newEvent) => void;
  handleEditEvent: (eventId, start, end) => void;
  handleDeleteEvent: (eventId) => void;
  isAppointmentFormOpen: boolean;
  setIsAppointmentFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenAppointmentForm: () => void;
  date: Date;
};
const CustomCalendarHeader: React.FC<MyCalendarProps> = ({
  date,
  onNavigate,
  onView,
  handleOpenAppointmentForm,
  ...props
}) => {
  const navigate = (action: string) => {
    onNavigate(action);
  };

  const changeView = (view: string) => {
    onView(view);
  };

  const monthName = moment(date, "dddd MMMM D").format("MMMM");

  const today = `Today is ${moment(new Date(), "dddd MMM D").format(
    "dddd, MMMM D, YYYY"
  )}`;

  return (
    <>
      <div className="flex justify-between items-center bg-gray-100 p-4">
        <div className="flex flex-col">
          <div className="text-neutral-400 text-base font-medium tracking-tight">
            Appointments
          </div>
          <div className="justify-start items-center gap-3 inline-flex">
            <div className="text-zinc-900 text-2xl font-bold tracking-wide">
              {monthName}
            </div>
            <button
              className="w-9 h-9 p-2.5 bg-zinc-200 rounded-[36px] justify-center items-center gap-2.5 flex group hover:bg-orange-300"
              onClick={() => navigate("PREV")}
            >
              <ChevronLeftIcon
                className="w-5 h-5 flex-shrink-0 text-gray-800 self-center group-hover:text-orange-600"
                aria-hidden="true"
              />
            </button>
            <button
              className="w-9 h-9 p-2.5 bg-zinc-200 rounded-[36px] justify-center items-center gap-2.5 flex group hover:bg-orange-300 "
              onClick={() => navigate("NEXT")}
            >
              <ChevronRightIcon
                className="w-5 h-5 flex-shrink-0 text-gray-800 self-center group-hover:text-orange-600"
                aria-hidden="true"
              />
            </button>
            <div className="justify-start items-start gap-3 flex"></div>
          </div>
          <div className="text-neutral-400 text-md font-medium tracking-tight">
            {today}
          </div>
        </div>
        <div className="text-zinc-900 text-xl font-bold tracking-wide">
          <button onClick={() => changeView("day")} className="px-2 py-1">
            Day
          </button>
          <button onClick={() => changeView("work_week")} className="px-2 py-1">
            Week
          </button>
          <button onClick={() => changeView("month")} className="px-2 py-1">
            Month
          </button>
        </div>
        <button
          className="text-white text-base font-medium tracking-tight px-5 py-3 bg-orange-500 rounded-xl justify-start items-start gap-2.5 flex"
          onClick={handleOpenAppointmentForm}
        >
          New Appointment
        </button>
      </div>
    </>
  );
};

export default CustomCalendarHeader;
