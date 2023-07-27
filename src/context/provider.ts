import React, { useReducer } from "react";

const initialState = {
  events: [...events],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return {
        events: [...state.events, action.payload],
      };
    case "EDIT_EVENT":
      return {
        events: state.events.map((event) =>
          event.id === action.payload.id ? action.payload : event
        ),
      };
    case "DELETE_EVENT":
      return {
        events: state.events.filter((event) => event.id !== action.payload),
      };
    default:
      return state;
  }
};

const EventProvider = ({ children }) => {
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

  return (
    <EventContext.Provider
      value={{ events: state.events, addEvent, editEvent, deleteEvent }}
    >
      {children}
    </EventContext.Provider>
  );
};

export { EventProvider, useEventContext };
