import Room from "./Room";
import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roomData } from "../data";
import { setAvailableRooms, update } from "../features/RoomSlice";
import { SpinnerDotted } from "spinners-react";

export default function Rooms() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const { totalRooms, availableRooms, loading } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(update(roomData));
    // dispatch(setAvailableRooms(roomData));
  }, []);

  const displayedData = typeFilter
    ? roomData.filter((item) => item.type === typeFilter)
    : roomData;
  console.log(typeFilter, displayedData);
  return (
    <section className=" ">
      {/* -----overlay and spinner--- */}
      <div className="flex justify-center items-center">
        {loading && (
          <div className="h-screen w-[100%] z-50 fixed bottom-0 top-0 bg-black/70 flex justify-center items-center">
            <SpinnerDotted color="white" />
          </div>
        )}
      </div>
      {/* //Rooms adina */}
      {typeFilter === "room" && (
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
              {availableRooms
                ? availableRooms.map((room) => (
                    <div key={room.id} className="grid place-items-center">
                      <Room room={room} />
                    </div>
                  ))
                : displayedData.map((room) => (
                    <div key={room.id} className="grid place-items-center">
                      <Room room={room} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      )}
      {/* //Restaurant adina */}
      {typeFilter === "restaurants" && (
        <div>
          <div className=" text-center">
            <div className="font-tertiary uppercase text-[15px] tracking-[6px]">
              Restaurant Adina
            </div>
            <h2 className="font-primary text-[30px] md:text-[45px] mb-3">
              Our Restaurants
            </h2>
          </div>
          <div className="grid place-items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
              {displayedData.map((item, index) => (
                <div key={index} className="css-shadow">
                  <div className="max-w-[400px]">
                    <img src={item.img} />
                  </div>
                  <div className="flex flex-row justify-between items-center p-3">
                    <h1 className="text-center font-bold text-[20px] md:text-[25px]">
                      {item.name}
                    </h1>
                    <h1 className="text-center font-normal">
                      <span className="font-bold"> Open: </span>
                      {item.Open}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* //Bar Adina */}

      {typeFilter === "bar" && (
        <>
          <div className=" text-center">
            <div className="font-tertiary uppercase text-[15px] tracking-[6px]">
              Bar Adina
            </div>
            <h2 className="font-primary text-[30px] md:text-[45px] mb-3">
              Our Bar
            </h2>
          </div>
          <div className="grid place-items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
              {displayedData.map((item, index) => (
                <div
                  key={index}
                  className="max-w-[400px] bg-white/75 css-shadow"
                >
                  {" "}
                  <div>
                    <img src={item.img} alt="" className="w-full h-full" />
                  </div>
                  <div className="flex flex-row justify-between items-center p-3">
                    <h1 className="text-center font-bold text-[20px] md:text-[25px]">
                      {item.name}
                    </h1>
                    <h1 className="text-center font-normal">
                      <span className="font-bold"> Open: </span>
                      {item.Open}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* //Bar adina stops here */}
    </section>
  );
}
