export interface Pet {
  petName: string;
  breed: string;
  age: string;
  gender: string;
  image: string | null;
}

export interface Veterinary {
  veterinary_name: string;
  address: string;
  building: string;
  contact_number: string;
  avatar: string;
}

export interface FormDataModel {
  id: number;
  service: string;
  ownerName: string;
  appointmentDate: {
    date: string | Date;
    time: string | Date;
  };
  pet: Pet;
  veterinary: Veterinary;
}
