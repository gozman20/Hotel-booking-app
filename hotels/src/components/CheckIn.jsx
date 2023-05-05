import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import parseISO from "date-fns/parseISO";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
import { BsCalendar } from "react-icons/bs";
import { setCheckIn } from "../features/RoomSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CheckIn() {
  const { checkIn } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  //format the date
  const In = moment(startDate, "YYYY-MM-DD");
  const formattedCheckIn = In.format("LLLL");
  //  const Out = moment(endDate, "YYYY-MM-DD");
  //  const formattedCheckOut = Out.format("LLLL");

  useEffect(() => {
    dispatch(setCheckIn(formattedCheckIn));
  });
  return (
    <div className="relative flex justify-end items-center h-full ">
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent" />
        </div>
      </div>

      <DatePicker
        className="w-full h-full"
        placeholderText={checkIn}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}
