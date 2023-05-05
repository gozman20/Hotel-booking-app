import Room from "./Room";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roomData } from "../data";
import { setAvailableRooms, update } from "../features/RoomSlice";
import { SpinnerDotted } from "spinners-react";

export default function Rooms() {
  const { totalRooms, availableRooms, loading } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(update(roomData));
    dispatch(setAvailableRooms(roomData));
  }, []);

  console.log(totalRooms);

  return (
    <section className="py-6  ">
      {/* -----overlay and spinner--- */}
      <div className="flex justify-center items-center">
        {loading && (
          <div className="h-screen w-[100%] z-50 fixed bottom-0 top-0 bg-black/90 flex justify-center items-center">
            <SpinnerDotted color="brown" />
          </div>
        )}
      </div>

      <div className="  ">
        <div className=" text-center">
          <div className="font-tertiary uppercase text-[15px] tracking-[6px]">
            Hotel and Spa Adina
          </div>
          <h2 className="font-primary text-[30px] md:text-[45px] mb-3">
            Rooms & Suites
          </h2>
        </div>
        {/* grid */}
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[10px]">
            {availableRooms &&
              availableRooms.map((room) => (
                <div key={room.id} className="grid place-items-center">
                  <Room room={room} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
