import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import { FaCheck } from "react-icons/fa";
import ScrollToTop from "../components/ScrollToTop";

export default function RoomDetails() {
  const { totalRooms } = useSelector((store) => store);
  const { id } = useParams();
  const selectedRoom = totalRooms.find((room) => room.id === Number(id));
  console.log(selectedRoom);

  const { name, description, facilities, imageLg, price } = selectedRoom;
  return (
    <section className="">
      <ScrollToTop />
      <div className="bg-room bg-cover h-[560px] relative flex justify-center items-center">
        {/* -----overlay--- */}
        <div className=" absolute h-full w-full bg-black/70"></div>
        {/* -----title--- */}
        <h1 className="text-white font-primary text-6xl z-20 text-center">
          {name}
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24 gap-x-4">
          {/* ---left--- */}
          <div className="w-full  lg:w-[60%] px-6  ">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img src={imageLg} className="mb-8" />
            <div className="mt-12">
              <h3 className="h3">Room Facilties</h3>
              <p className="mb-12">{description}</p>
              <div className="grid grid-cols-3 gap-3 mb-12">
                {facilities.map((item, index) => {
                  const { name, icon } = item;
                  return (
                    <div className="flex items-center gap-x-3 " key={index}>
                      <div className="text-3xl text-accent ">{icon}</div>
                      <div className="text-base text-accent">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* ------right----- */}
          <div className="w-full h-full lg:w-[40%]">
            {/* -----reservation--- */}
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="flex flex-col  space-y-4 mb-4">
                <h3 className="h3">Reservation</h3>
                <div className="h-[60px]">
                  <CheckIn />
                </div>
                <div className="h-[60px]">
                  <CheckOut />
                </div>
                <div className="h-[60px]">
                  <AdultsDropdown />
                </div>
                <div className="h-[60px]">
                  <KidsDropdown />
                </div>
              </div>
              <button className="btn btn-lg btn-primary w-full">
                Book now for ${price}
              </button>
            </div>

            {/* -----rules--- */}
            <div>
              <h3 className="h3">Hotel rules</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, ea! Ducimus quis soluta est esse. Aliquid natus rerum
                architecto nisi voluptates tempora dignissimos soluta fuga unde,
                iste quam cupiditate beatae!
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-x-4">
                <FaCheck className="text-accent" />
                Check-in: 3:00 PM- 9:00 AM
              </li>

              <li className="flex items-center gap-x-4">
                <FaCheck className="text-accent" />
                Check-out: Before 10 AM
              </li>

              <li className="flex items-center gap-x-4">
                <FaCheck className="text-accent" />
                No pets
              </li>

              <li className="flex items-center gap-x-4">
                <FaCheck className="text-accent" />
                No Smoking
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
