import { Fragment, useId, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SelectVeterinary from "./SelectVeterinary";
import { getVets } from "@/services/sidebar";
import PetInformationAppointment from "./PetInformationAppointment";
import Datepicker from "react-tailwindcss-datepicker";
import TimePicker from "./TimePicker";
import moment from "moment";
import { convertToUTC } from "@/services/utcConversion";
import { FormDataModel, Veterinary } from "@/interface/appointments";

type AppointmentFormProps = {
  isAppointmentFormOpen: boolean;
  setIsAppointmentFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCloseAppointmentForm: () => void;
  formData: FormDataModel;
  setFormData: React.Dispatch<React.SetStateAction<FormDataModel>>;
  handleAddEvent: (newEvent) => void;
};

export default function AppointmentForm(props: AppointmentFormProps) {
  const {
    isAppointmentFormOpen,
    handleCloseAppointmentForm,
    formData,
    setFormData,
    handleAddEvent,
    setIsAppointmentFormOpen,
  } = props;

  const [_, setOpen] = useState(false);

  const [selectedTime, setSelectedTime] = useState(new Date());
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [selectedImage, setSelectedImage] = useState<string | null>("");
  const [fileName, setFileName] = useState("");

  const vets = getVets();

  const eventId = useId();
  const appointMentId = useId();

  const handleTimeChange = (time: Date) => {
    setSelectedTime(time);
  };

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | Veterinary
  ) => {
    if ("target" in e) {
      const { name, value } = e.target;
      if (name === "image") {
        const file = e.target.files && e.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setSelectedImage(imageUrl);
          // setFileName(file.name);
        }
      } else if (name === "service" || name === "ownerName") {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      } else {
        const updatepet = {
          ...formData,
          pet: {
            ...formData.pet,
            [name]: value,
          },
        };
        setFormData(updatepet);
      }
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        veterinary: e,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Do something with the form data here, for example, send it to the server.
    const updatedFormData: FormDataModel = {
      ...formData,
      id: Math.floor(Math.random() * 100),
      pet: {
        ...formData.pet,
        image: selectedImage,
      },
      appointmentDate: {
        ...formData.appointmentDate,
        date: moment(value.startDate).format("YYYY-MM-DD"),
        time: moment(selectedTime).format("LT"),
      },
    };

    const startDate = value.startDate && new Date(value.startDate);

    const appointmentData = {
      id: Math.floor(Math.random() * 100),
      title: updatedFormData.service,
      start: new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate(),
        selectedTime?.getHours(),
        selectedTime?.getMinutes()
      ),
      end: new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate(),
        selectedTime?.getHours() + 1,
        selectedTime?.getMinutes()
      ),
      clientInformation: {
        clientName: "John Doe",
        address: "123 Main St.",
        email: "uX7mL@example.com",
      },
      updatedFormData,
    };

    console.log(
      "Appointed Date and Time is",
      convertToUTC(updatedFormData.appointmentDate)
    );
    handleAddEvent(appointmentData);
    handleCloseAppointmentForm();
  };

  return (
    <Transition.Root show={isAppointmentFormOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={setIsAppointmentFormOpen}
      >
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
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Schedule Your Appointment
                    </Dialog.Title>
                    <form
                      className="mt-2 flex flex-col gap-3"
                      onSubmit={handleSubmit}
                    >
                      <SelectVeterinary
                        vets={vets}
                        value={formData.veterinary}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        className="relative w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2"
                        placeholder="Service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      />
                      <PetInformationAppointment
                        formData={formData}
                        handleChange={handleChange}
                        fileName={fileName}
                      />
                      <input
                        type="text"
                        className="relative w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2"
                        placeholder="Owner's Name"
                        value={formData.ownerName}
                        onChange={handleChange}
                        name="ownerName"
                      />
                      <Datepicker
                        {...props}
                        primaryColor={"sky"}
                        onChange={handleValueChange}
                        inputClassName={` w-full px-2.5 pt-3 pb-2.5 text-md bg-transparent rounded border border-gray-300 appearance-none dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer disabled:!bg-transparent disabled:!text-gray-400 disabled:border-gray-200 disabled:hover:cursor-not-allowed`}
                        asSingle={true}
                        popoverDirection={"up"}
                        useRange={false}
                        value={value}
                        displayFormat={"MM/DD/YYYY"}
                        placeholder={"Select Date"}
                      />
                      <TimePicker
                        selectedTime={selectedTime}
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
  );
}
