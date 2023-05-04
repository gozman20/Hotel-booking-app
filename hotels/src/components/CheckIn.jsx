import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
import { BsCalendar } from "react-icons/bs";
import { setCheckIn } from "../features/RoomSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CheckIn() {
  const { checkIn } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(checkIn);
  const m = moment(startDate, "YYYY-MM-DD");
  console.log(m.format("LLLL"));

  return (
    <div className="relative flex justify-end items-center h-full ">
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent" />
        </div>
      </div>

      <DatePicker
        className="w-full h-full"
        placeholderText="Check In"
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          dispatch(setCheckIn(date));
        }}
      />
    </div>
  );
}
