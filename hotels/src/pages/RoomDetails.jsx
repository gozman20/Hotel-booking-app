import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { useSelector } from "react-redux";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import { FaCheck } from "react-icons/fa";
import { ImSpinner6 } from "react-icons/im";
import ScrollToTop from "../components/ScrollToTop";
//Form validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  fullname: yup.string().required("This field must not be empty"),
  // date: yup.string().required("This field must not be empty"),
  phone: yup
    .number()
    .positive()
    .integer()
    .typeError("Phone number is empty")
    .required(),
});
export default function RoomDetails() {
  const [loading, setLoading] = useState(false);
  const { totalRooms, checkIn, checkOut, totalKids, totalAdults } = useSelector(
    (store) => store
  );
  const [axiosResponse, setAxiosResponse] = useState("");
  const { id } = useParams();
  const selectedRoom = totalRooms.find((room) => room.id === Number(id));
  console.log(selectedRoom);
  const { name, description, facilities, imageLg, price } = selectedRoom;
  //format the date
  // const In = moment(checkIn, "YYYY-MM-DD");
  // const formattedCheckIn = In.format("LLLL");
  // const Out = moment(checkOut, "YYYY-MM-DD");
  // const formattedCheckOut = Out.format("LLLL");

  const formattedCheckIn = checkIn;
  const formattedCheckOut = checkOut;

  //Form

  const ref = useRef(null);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setLoading(true);

    axios
      .post("http://localhost:10000/hotels", {
        fullname: data.fullname,
        phone: data.phone,
        formattedCheckIn,
        formattedCheckOut,
        totalAdults,
        totalKids,
      })
      .then(function (response) {
        console.log(response);
        setAxiosResponse(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
    reset();
  };

  return (
    <>
      <section className="relative ">
        <ScrollToTop />
        <div className="bg-room bg-cover h-[560px] relative flex justify-center items-center">
          {/* -----overlay--- */}
          <div className=" absolute h-full w-full bg-black/70"></div>
          {/* -----title--- */}
          <h1 className="text-white font-primary text-6xl z-20 text-center">
            {name}
          </h1>
        </div>
        <div className="p-6">
          <div className="flex flex-col lg:flex-row h-full py-4 gap-x-4">
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
            <div className="w-full h-full lg:w-[40%] relative">
              {/* -----reservation--- */}
              <div className="py-8 px-6 bg-accent/20 mb-12 ">
                <div className="flex flex-col  space-y-4 mb-4">
                  <h3 className="h3">Reservation</h3>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col lg:space-y-6 space-y-5 mb-4 "
                  >
                    {/* overlay--- */}
                    {loading && (
                      <div className="bg-black/70 absolute w-full h-full z-10 text-white grid place-items-center">
                        {" "}
                        <ImSpinner6 className="animate-spin font-bold text-[30px]" />
                      </div>
                    )}

                    <div className="h-[30px] md:h-[50px] ">
                      <input
                        type="text"
                        className="h-full w-full text-black pl-8 outline-none"
                        placeholder="fullname "
                        ref={ref}
                        {...register("fullname")}
                      />
                      <p className="text-red-500 text-sm">
                        {errors.fullname?.message}
                      </p>
                    </div>
                    <div className="h-[30px] md:h-[50px] ">
                      <input
                        type="number"
                        placeholder="Phone"
                        className="w-full h-full  pl-8 outline-none"
                        // ref={ref}
                        {...register("phone")}
                      />
                      <p className="text-red-500 text-sm">
                        {errors.phone?.message}
                      </p>
                    </div>
                    <div className="h-[30px] md:h-[50px] mb-2">
                      <CheckIn />
                    </div>
                    <div className="h-[30px] md:h-[50px]">
                      <CheckOut />
                    </div>
                    <div className="h-[30px] md:h-[50px]">
                      <AdultsDropdown />
                    </div>
                    <div className="h-[30px] md:h-[50px]">
                      <KidsDropdown />
                    </div>

                    <div className="h-[50px]">
                      {" "}
                      <button
                        className="btn btn-lg btn-primary w-full h-full
              "
                        type="submit"
                      >
                        Book now for ${price}
                      </button>
                    </div>
                  </form>
                </div>
                <div className="text-center font-bold text-[25px]">
                  {axiosResponse?.data?.fullname}
                </div>
              </div>

              {/* -----rules--- */}
              <div>
                <h3 className="h3">Hotel rules</h3>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, ea! Ducimus quis soluta est esse. Aliquid natus
                  rerum architecto nisi voluptates tempora dignissimos soluta
                  fuga unde, iste quam cupiditate beatae!
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
    </>
  );
}
