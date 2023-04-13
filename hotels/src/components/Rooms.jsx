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
    <section className="py-24  ">
      {/* -----overlay and spinner--- */}
      <div className="flex justify-center items-center">
        {loading && (
          <div className="h-screen w-[100%] z-50 fixed bottom-0 top-0 bg-black/90 flex justify-center items-center">
            <SpinnerDotted color="brown" />
          </div>
        )}
      </div>

      <div className="container  mx-auto lg:px-0 ">
        <div className="z-50 text-center">
          <div className="font-tertiary uppercase tex-[15px] tracking-[6px]">
            Hotel and Spa Adina
          </div>
          <h2 className="font-primary text-[45px] mb-4">Rooms & Suites</h2>
        </div>
        {/* grid */}
        <div className="grid grid-cols-1 max-w-sm  mx-auto gap-[30px]  lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {availableRooms &&
            availableRooms.map((room) => (
              <div key={room.id}>
                <Room room={room} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
