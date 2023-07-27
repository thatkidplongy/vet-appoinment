import { EyeDropperIcon } from "@heroicons/react/20/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const CardEventComponent = ({ event }) => {
  // Customize the content of each event card here
  return (
    <div className={`${event.className} inline-flex space-x-3`}>
      <EyeDropperIcon className="w-5 h5 text-orange-500" />
      <strong className="">{event.title}</strong>
      <p>{event.description}</p>
      <div className="flex  gap-x-2 ">
        <UserCircleIcon className="w-5 h5 text-orange-500" />{" "}
        <span>{event.clientName}</span>
      </div>
    </div>
  );
};

export default CardEventComponent;
