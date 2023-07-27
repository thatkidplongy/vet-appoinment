import { FormDataModel } from "./appointments";

export type EventsModel = {
  id: number;
  title: string;
  start: Date;
  end: Date;
  className?: string;
  clientInformation: {
    clientName: string;
    address: string;
    email: string;
  };
  appointmentInformation: FormDataModel;
};

export interface EventsCardModel {
  event: {
    id: number;
    title: string;
    description: string;
    className: string;
    start: Date;
    end: Date;
    clientName: string;
    address: string;
    email: string;
  };
}
