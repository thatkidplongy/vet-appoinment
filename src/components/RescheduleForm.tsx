import { Fragment, RefObject, useEffect, useId, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SelectVeterinary from "./SelectVeterinary";
import { getVets } from "@/services/sidebar";
import PetInformationAppointment from "./PetInformationAppointment";
import Datepicker from "react-tailwindcss-datepicker";
import TimePicker from "./TimePicker";
import moment from "moment";
import { convertToUTC } from "@/services/utcConversion";
import { FormDataModel, Veterinary } from "@/interface/appointments";
import { EventsModel } from "@/interface/events";

type AppointmentFormProps = {
  isReschedAppointmentFormOpen: boolean;
  handleCloseReschedForm: () => void;
  handleEditEvent: (
    rescheduleForm: EventsModel | null,
    startDatePayload: Date,
    endDatePayload: Date
  ) => void;
  rescheduleForm: EventsModel | null;
};

export default function RescheduleForm(props: AppointmentFormProps) {
  const {
    isReschedAppointmentFormOpen,
    handleCloseReschedForm,
    rescheduleForm,
    handleEditEvent,
  } = props;

  const [_, setOpen] = useState(false);

  const [selectedTime, setSelectedTime] = useState(
    rescheduleForm && rescheduleForm.start
  );
  const [value, setValue] = useState({
    startDate: rescheduleForm && rescheduleForm.start,
    endDate: rescheduleForm && rescheduleForm.end,
  });

  useEffect(() => {
    if (rescheduleForm) {
      setValue({
        startDate: rescheduleForm.start,
        endDate: rescheduleForm.end,
      });
      setSelectedTime(rescheduleForm.start);
    }
  }, [rescheduleForm]);

  const handleTimeChange = (time: Date) => {
    setSelectedTime(time);
  };

  const handleValueChange = (newValue) => {
    const parseDate = {
      ...newValue,
      start: new Date(newValue.startDate),
    };
    setValue(parseDate);
  };

  const handleEscP = (e) => {
    if (e.keyCode === 27) {
      handleCloseReschedForm();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const startDate = value.startDate && new Date(value.startDate);
    const time = selectedTime && (selectedTime as Date);
    if (startDate && time) {
      const startDatePayload =
        startDate &&
        new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate(),
          time?.getHours(),
          time?.getMinutes()
        );

      const endDatePayload =
        startDate &&
        new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate(),
          time.getHours() + 1,
          time.getMinutes()
        );
      handleEditEvent(rescheduleForm, startDatePayload, endDatePayload);
    }

    handleCloseReschedForm();
  };

  return (
    <div onKeyDown={handleEscP}>
      <Transition.Root show={isReschedAppointmentFormOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative h-[540px] transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Reschedule Your Appointment
                      </Dialog.Title>
                      <form
                        className="mt-2 flex flex-col gap-3"
                        onSubmit={handleSubmit}
                      >
                        <Datepicker
                          {...props}
                          primaryColor={"sky"}
                          onChange={handleValueChange}
                          inputClassName={`z-50 w-full px-2.5 pt-3 pb-2.5 text-md bg-transparent rounded border border-gray-300 appearance-none dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer disabled:!bg-transparent disabled:!text-gray-400 disabled:border-gray-200 disabled:hover:cursor-not-allowed`}
                          asSingle={true}
                          //   popoverDirection={"down"}
                          useRange={false}
                          value={value}
                          displayFormat={"MM/DD/YYYY"}
                          placeholder={"Select Date"}
                        />
                        <TimePicker
                          selectedTime={selectedTime as Date}
                          onTimeChange={handleTimeChange}
                        />
                        <div className="mt-5 sm:mt-6">
                          <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
