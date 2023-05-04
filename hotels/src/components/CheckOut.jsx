import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
import { BsCalendar } from "react-icons/bs";
import { setCheckOut } from "../features/RoomSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import CheckIn from "./CheckIn";

export default function CheckOut() {
  const { checkOut } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [endDate, setEndDate] = useState(checkOut);
  const m = moment(endDate, "YYYY-MM-DD");
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
        placeholderText="Check Out"
        selected={endDate}
        onChange={(date) => {
          setEndDate(date);
          dispatch(setCheckOut(date));
        }}
      />
    </div>
  );
}
