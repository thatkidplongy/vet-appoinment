import React from "react";

type PetInformationAppointmentProps = {
  formData: {
    pet: {
      petName: string;
      breed: string;
      age: string;
      gender: string;
      image: any;
    };
  };
  fileName: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PetInformationAppointment = (props: PetInformationAppointmentProps) => {
  const { formData, handleChange, fileName } = props;
  return (
    <div className="text-start flex flex-col gap-2">
      Pet information:
      <input
        type="text"
        className="relative w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2"
        placeholder="Pet Name"
        name="petName"
        value={formData.pet.petName}
        onChange={handleChange}
      />
      <input
        type="text"
        className="relative w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2"
        placeholder="Breed"
        name="breed"
        value={formData.pet.breed}
        onChange={handleChange}
      />
      <input
        type="text"
        className="relative w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2"
        placeholder="Age"
        name="age"
        value={formData.pet.age}
        onChange={handleChange}
      />
      <input
        type="text"
        className="relative w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2"
        placeholder="Gender"
        name="gender"
        value={formData.pet.gender}
        onChange={handleChange}
      />
      <input
        type="file"
        className="relative w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2"
        placeholder="Image"
        accept="image/*"
        name="image"
        onChange={handleChange}
      />
    </div>
  );
};

export default PetInformationAppointment;
