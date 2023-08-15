import React, { useState } from "react";
import Calendar from "react-calendar";

const CustomCalendar = () => {

  return (
    <div>
      <Calendar
        className = "font-[atom-regular] font-bold text-center align-center h-[auto] w-[auto]text-gray text-[0.6rem] px-[1rem] pt-[1rem]"
      />
    </div>
  );
};

export default CustomCalendar;


