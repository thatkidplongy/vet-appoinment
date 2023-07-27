import { events } from "@/definitions/events";
import { useState, useReducer } from "react";

export const initialState = {
  events: [...events], // Assuming 'events' is already imported from the provided data
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      const newAppointment = {
        events: [...state.events, action.payload],
      };
      return newAppointment;
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
