import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomCalendarHeader from "./CustomCalendarHeader";
import { EventsModel } from "@/interface/events";
import CardEventComponent from "./CardEventComponent";
import { FormDataModel } from "@/interface/appointments";
import { useEventReducer } from "@/hooks/useEventReducer";
import ClientDetails from "./ClientDetails";
import AppointmentForm from "./AppointmentForm";
import RescheduleForm from "./RescheduleForm";
import { formDataInitialValues } from "@/definitions/formData";

const localizer = momentLocalizer(moment);

type MyCalendarProps = {
  searchTerm: string;
};

const MyCalendar = (props: MyCalendarProps) => {
  const { searchTerm } = props;

  const { appointments, addEvent, editEvent, deleteEvent } = useEventReducer();
  const filteredEvents = appointments.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [clientDetails, setClientDetails] = useState(filteredEvents[0]);
  const [isClientDetailsOpen, setIsClientDetailsOpen] = useState(false);
  const [isAppointmentFormOpen, setIsAppointmentFormOpen] = useState(false);
  const [isReschedAppointmentFormOpen, setIsReschedAppointmentFormOpen] =
    useState(false);
  const [formData, setFormData] = useState<FormDataModel>(
    formDataInitialValues
  );
  const [rescheduleForm, setRescheduleForm] = useState<EventsModel | null>(
    null
  );

  const handleAddEvent = (newEvent: FormDataModel) => {
    // Create a new event object and pass it to the addEvent function
    addEvent(newEvent);
    setFormData(formDataInitialValues);
  };

  // Function to handle editing an event
  const handleEditEvent = (
    appointment: EventsModel | null,
    startDatePayload: Date,
    endDatePayload: Date
  ) => {
    const editedEvent = {
      ...appointment,
      id: appointment && appointment.id,
      start: startDatePayload,
      end: endDatePayload,
      // Other properties that you may want to edit can be included here
    };
    editEvent(editedEvent);
    setIsReschedAppointmentFormOpen(false);
  };

  function handleOpenReschedForm(event: EventsModel) {
    setRescheduleForm(event);
    setIsReschedAppointmentFormOpen(true);
    setIsClientDetailsOpen(false);
  }
  function handleCloseReschedForm() {
    setIsReschedAppointmentFormOpen(false);
  }
  // Function to handle deleting an event
  const handleDeleteEvent = (eventId: number) => {
    deleteEvent(eventId);
    setIsClientDetailsOpen(false);
  };

  const handleSelect = (event: EventsModel) => {
    setClientDetails(event);
    setIsClientDetailsOpen(true);
  };

  function handleCloseAppointmentForm() {
    setIsAppointmentFormOpen(false);
  }

  function handleOpenAppointmentForm() {
    setIsAppointmentFormOpen(true);
  }

  const eventPropGetter = () => {
    // Add your custom styling and other properties for the events here
    const backgroundColor = "rgb(254 215 170)";
    const textColor = "#1C1C1E"; // Text colorBorder style

    const style = {
      backgroundColor,
      border: "1px solid #FFA500",
      color: textColor,
    };

    return {
      className: `rounded-lg shadow-md bg-orange-100 ${textColor} p-5 justify-start items-center gap-2 border border-orange-400`,
      style,
    };
  };

  return (
    <div className="h-screen">
      <Calendar
        views={["day", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="day"
        events={[...filteredEvents]}
        style={{ height: "100vh" }}
        components={{
          toolbar: (props) => (
            <CustomCalendarHeader
              {...props}
              handleAddEvent={handleAddEvent}
              handleEditEvent={handleEditEvent}
              handleDeleteEvent={handleDeleteEvent}
              isAppointmentFormOpen={isAppointmentFormOpen}
              setIsAppointmentFormOpen={setIsAppointmentFormOpen}
              handleOpenAppointmentForm={handleOpenAppointmentForm}
            />
          ),
          event: CardEventComponent, // Use the custom EventComponent for event cards
        }}
        eventPropGetter={eventPropGetter}
        onSelectEvent={(event) => handleSelect(event)}
      />
      <ClientDetails
        isClientDetailsOpen={isClientDetailsOpen}
        setIsClientDetailsOpen={setIsClientDetailsOpen}
        clientDetails={clientDetails}
        handleDeleteEvent={handleDeleteEvent}
        handleOpenReschedForm={handleOpenReschedForm}
      />
      <AppointmentForm
        handleAddEvent={handleAddEvent}
        isAppointmentFormOpen={isAppointmentFormOpen}
        setIsAppointmentFormOpen={setIsAppointmentFormOpen}
        handleCloseAppointmentForm={handleCloseAppointmentForm}
        formData={formData}
        setFormData={setFormData}
      />
      <RescheduleForm
        isReschedAppointmentFormOpen={isReschedAppointmentFormOpen}
        handleCloseReschedForm={handleCloseReschedForm}
        rescheduleForm={rescheduleForm}
        handleEditEvent={handleEditEvent}
      />
    </div>
  );
};

export default MyCalendar;
