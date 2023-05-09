import React from "react";
import { useSelector } from "react-redux";
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";
import Room from "./Room";
import styles from "./styles";

export default function Allrooms() {
  const { totalRooms } = useSelector((store) => store);
  return (
    <div className="p-4">
      <div className=" text-center">
        <div className="font-tertiary uppercase text-[15px] tracking-[6px]">
          Welcome to Hotel Adina
        </div>
        <h2 className="font-primary text-[30px] md:text-[45px] mb-3">
          Make a reservtion now
        </h2>
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[10px]">
          {totalRooms &&
            totalRooms.slice(0, 8).map((room) => (
              <div key={room.id} className="grid place-items-center">
                <div className=" bg-white shadow-2xl  group pb-4">
                  {/* --image--- */}
                  <div className="overflow-hidden">
                    <img
                      src={room.image}
                      alt=""
                      className="group-hover:scale-110 transition-all duration-300 w-[100%] h-[100%] "
                    />
                  </div>
                  {/* -----details--- */}
                  <div className="bg-white shadow-lg h-[60px] mx-auto -translate-y-1/2 flex justify-center items-center uppercase tracking-[1px] font-semibold text-base font-tertiary">
                    <div className="flex justify-between w-[80%]">
                      {/* ---icon and text-- */}
                      <div className="flex items-center gap-x-2">
                        {/* -----icon----- */}
                        <div className=" text-accent  ">
                          <BsArrowsFullscreen className="text-[15px]" />
                        </div>
                        {/* -----text---- */}
                        <div className="flex gap-x-1">
                          <div>Size</div>
                          <div>{room.size}m2</div>
                        </div>
                      </div>
                      {/* ---room capacity-- */}
                      <div className="flex items-center gap-x-1">
                        {/* -----icon----- */}
                        <div className=" text-accent  ">
                          <BsPeople className="text-[18px]" />
                        </div>
                        {/* -----size---- */}
                        <div className="flex gap-x-1">
                          <div>Max </div>
                          <div>{room.maxPerson}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ----name and description-- */}
                  <div className="text-center">
                    <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">
                      {room.description?.slice(0, 56)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
