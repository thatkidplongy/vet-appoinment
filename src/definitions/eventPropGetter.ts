export const eventPropGetter = (event, start, end, isSelected) => {
  // Add your custom styling and other properties for the events here
  const backgroundColor =
    event.type === "important" ? "bg-orange-100" : "bg-orange-100";
  const textColor = "text-black"; // Text colorBorder style

  return {
    className: `rounded-lg shadow-md ${backgroundColor} ${textColor} p-5 justify-start items-center gap-2 `,
  };
};
