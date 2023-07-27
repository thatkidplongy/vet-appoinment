import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type TimePickerProps = {
  selectedTime: Date;
  onTimeChange: (time: Date) => void;
};

const TimePicker: React.FC<TimePickerProps> = ({
  selectedTime,
  onTimeChange,
}) => {
  return (
    <DatePicker
      className=" w-full px-2.5 pt-3 pb-2.5 text-md bg-transparent rounded border border-gray-300 appearance-none dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer disabled:!bg-transparent disabled:!text-gray-400 disabled:border-gray-200 disabled:hover:cursor-not-allowed"
      selected={selectedTime}
      onChange={onTimeChange}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
    />
  );
};

export default TimePicker;
