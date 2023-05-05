import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";

export default function Room({ room }) {
  const { id, name, image, size, maxPerson, description, price } = room;
  return (
    <div className=" bg-white shadow-2xl  group pb-4">
      {/* --image--- */}
      <div className="overflow-hidden">
        <img
          src={image}
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
              <div>{size}m2</div>
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
              <div>{maxPerson}</div>
            </div>
          </div>
        </div>
      </div>
      {/* ----name and description-- */}
      <div className="text-center">
        <Link to={`/room/${id}`}>
          <h3 className="h3">{name}</h3>
        </Link>
        <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">
          {description.slice(0, 56)}
        </p>
      </div>
      <Link
        to={`/room/${id}`}
        className="btn btn-secondary btn-sm max-w-[270px] mx-auto "
      >
        Book now from {price}
      </Link>
    </div>
  );
}
