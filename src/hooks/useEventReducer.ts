import { initialState, reducer } from "@/services/handleAppointments";
import { useReducer } from "react";

export const useEventReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addEvent = (newEvent) => {
    dispatch({ type: "ADD_EVENT", payload: newEvent });
  };

  const editEvent = (editedEvent) => {
    dispatch({ type: "EDIT_EVENT", payload: editedEvent });
  };

  const deleteEvent = (eventId) => {
    dispatch({ type: "DELETE_EVENT", payload: eventId });
  };

  return { appointments: state.events, addEvent, editEvent, deleteEvent };
};
