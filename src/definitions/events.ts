import moment from "moment";

const getCurrentDateAndTime = (hours: number) => {
  return new Date(new Date().setHours(new Date().getHours() + hours));
};

const getMomentDateAndTime = (days: number) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  const hours = currentDate.setHours(currentDate.getHours() + days);

  return {
    date: moment(currentDate).format("YYYY-MM-DD"),
    time: hours,
  };
};

export const events = [
  {
    id: 14,
    title: "Carti's Checkup",
    start: getCurrentDateAndTime(0),
    end: getCurrentDateAndTime(1),
    clientInformation: {
      clientName: "John Doe",
      address: "abc Main St.",
      email: "jd@example.com",
    },
    updatedFormData: {
      id: 1,
      service: "Check-up",
      ownerName: "Millie Rock",
      pet: {
        petName: "Carti",
        breed: "Labrador",
        age: "2 months",
        gender: "Male",
        image:
          "https://media.istockphoto.com/id/1400445086/photo/happy-and-smiling-border-collie-dog-looking-at-camera-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=zlZKA2hK_LgXU2GVYOYxr4pLOmnteBnFLmyUh_np8so=",
      },
      veterinary: {
        veterinary_name: "John Fins",
        address: "4517 Washington Avenue, Manchester, Kentucky 39495",
        building: "Green Bow Vett",
        contact_number: "+63 0123 123",
        avatar:
          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },

      appointmentDate: {
        date: getMomentDateAndTime(0).date,
        time: getMomentDateAndTime(0).time,
      },
    },
  },
  {
    id: 15,
    title: "Baddy's Vaccination",
    start: getCurrentDateAndTime(24),
    end: getCurrentDateAndTime(25),
    clientInformation: {
      clientName: "Travis Scott",
      address: "cde Main St.",
      email: "ts@example.com",
    },
    updatedFormData: {
      id: 2,
      service: "Consultation",
      ownerName: "Eminem",
      pet: {
        petName: "Baddy",
        breed: "Bulldog",
        age: "1 year",
        gender: "Male",
        image:
          "https://media.istockphoto.com/id/1172438499/photo/american-bully.jpg?s=612x612&w=0&k=20&c=35Ij137Mf5UeocIeognXaAEUt7c20BHUitMbitfsVPM=",
      },
      veterinary: {
        veterinary_name: "Danica Jane",
        address: "4517 Washington Avenue, Manchester, Kentucky 39495",
        building: "Green Bow Vett",
        contact_number: "+63 0123 123",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      appointmentDate: {
        date: getMomentDateAndTime(24).date,
        time: getMomentDateAndTime(24).time,
      },
    },
  },
  {
    id: 16,
    title: "Prophy's Checkup",
    start: getCurrentDateAndTime(48),
    end: getCurrentDateAndTime(49),
    clientInformation: {
      clientName: "Jorja Smith",
      address: "yxs Main St.",
      email: "js@example.com",
    },
    updatedFormData: {
      id: 3,
      service: "Consultation",
      ownerName: "Cole Wolrd",
      pet: {
        petName: "Prophy",
        breed: "Bulldog",
        age: "1 year",
        gender: "Male",
        image:
          "https://media.istockphoto.com/id/1172438499/photo/american-bully.jpg?s=612x612&w=0&k=20&c=35Ij137Mf5UeocIeognXaAEUt7c20BHUitMbitfsVPM=",
      },
      veterinary: {
        veterinary_name: "Danica Jane",
        address: "4517 Washington Avenue, Manchester, Kentucky 39495",
        building: "Green Bow Vett",
        contact_number: "+63 0123 123",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      appointmentDate: {
        date: getMomentDateAndTime(48).date,
        time: getMomentDateAndTime(48).time,
      },
    },
  },
  {
    id: 17,
    title: "Kenny's Checkup",
    start: getCurrentDateAndTime(72),
    end: getCurrentDateAndTime(73),
    clientInformation: {
      clientName: "Abel Tesfaye",
      address: "789 Main St. Cambridge",
      email: "at@example.com",
    },
    updatedFormData: {
      id: 3,
      service: "Consultation",
      ownerName: "Kenny",
      pet: {
        petName: "Kunta",
        breed: "German Sheperd",
        age: "2 years",
        gender: "Female",
        image:
          "https://media.istockphoto.com/id/1431305841/photo/german-shepherd-dog-laying-down-on-sofa-crouch.webp?b=1&s=170667a&w=0&k=20&c=W2nue2ukgDNH53KQGMbiOzY35FlfS1R3D6C4vjWuz1w=",
      },
      veterinary: {
        veterinary_name: "Anika Perry",
        address: "4517 Washington Avenue, Manchester, Kentucky 39495",
        building: "Green Bow Vett",
        contact_number: "+63 0123 123",
        avatar:
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      appointmentDate: {
        date: getMomentDateAndTime(72).date,
        time: getMomentDateAndTime(72).time,
      },
    },
  },
  {
    id: 18,
    title: "Kunta's Consultation",
    start: getCurrentDateAndTime(96),
    end: getCurrentDateAndTime(97),
    clientInformation: {
      clientName: "Bruno Mars",
      address: "Cuba Main St.",
      email: "bm@example.com",
    },
    updatedFormData: {
      id: 4,
      service: "Consultation",
      ownerName: "Kenny",
      pet: {
        petName: "Kunta",
        breed: "German Sheperd",
        age: "2 years",
        gender: "Female",
        image:
          "https://media.istockphoto.com/id/1431305841/photo/german-shepherd-dog-laying-down-on-sofa-crouch.webp?b=1&s=170667a&w=0&k=20&c=W2nue2ukgDNH53KQGMbiOzY35FlfS1R3D6C4vjWuz1w=",
      },
      veterinary: {
        veterinary_name: "Anika Perry",
        address: "4517 Washington Avenue, Manchester, Kentucky 39495",
        building: "Green Bow Vett",
        contact_number: "+63 0123 123",
        avatar:
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      appointmentDate: {
        date: getMomentDateAndTime(72).date,
        time: getMomentDateAndTime(72).time,
      },
    },
  },
  {
    id: 19,
    title: "Drizzy's Surgery",
    start: getCurrentDateAndTime(108),
    end: getCurrentDateAndTime(109),
    clientInformation: {
      clientName: "Post Malone",
      address: "456 Main St.",
      email: "pm@example.com",
    },
    updatedFormData: {
      id: 5,
      service: "Surgery",
      ownerName: "Aubrey",
      pet: {
        petName: "Drizzy",
        breed: "German Sheperd",
        age: "2 years",
        gender: "Female",
        image:
          "https://media.istockphoto.com/id/151533956/photo/a-german-shepherd-dog-on-a-forest-walk.webp?b=1&s=170667a&w=0&k=20&c=8-WmV6eu1HOsHy3fkwSu8Ra8Fz67uuf4U3x-Y9jcm3I=",
      },
      veterinary: {
        veterinary_name: "Anika Perry",
        address: "4517 Washington Avenue, Manchester, Kentucky 39495",
        building: "Green Bow Vett",
        contact_number: "+63 0123 123",
        avatar:
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      appointmentDate: {
        date: getMomentDateAndTime(72).date,
        time: getMomentDateAndTime(72).time,
      },
    },
  },
];
