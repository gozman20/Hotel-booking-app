import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import parseISO from "date-fns/parseISO";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
import { BsCalendar } from "react-icons/bs";
import { setCheckOut } from "../features/RoomSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CheckOut() {
  const { checkOut } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [endDate, setEndDate] = useState(false);
  console.log(endDate);
  //format the date
  // const In = moment(checkIn, "YYYY-MM-DD");
  // const formattedCheckIn = In.format("LLLL");
  const Out = moment(endDate, "YYYY-MM-DD");
  const formattedCheckOut = Out.format("LLLL");

  useEffect(() => {
    dispatch(setCheckOut(formattedCheckOut));
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
        placeholderText={"Check Out"}
        selected={endDate}
        onChange={(date) => setEndDate(date)}
      />
    </div>
  );
}
