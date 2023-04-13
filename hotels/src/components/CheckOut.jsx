import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
import { BsCalendar } from "react-icons/bs";

export default function CheckOut() {
  const [endDate, setEndDate] = useState(false);
  return (
    <div className="relative flex justify-end items-center h-full ">
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent" />
        </div>
      </div>

      <DatePicker
        className="w-full h-full"
        placeholderText="Check Out"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
      />
    </div>
  );
}
