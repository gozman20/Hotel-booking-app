import React, { useEffect, useState } from "react";
import CheckIn from "./CheckIn";
import AdultsDropdown from "./AdultsDropdown";
import CheckOut from "./CheckOut";
import { useSearchParams } from "react-router-dom";
import KidsDropdown from "./KidsDropdown";
import { useSelector, useDispatch } from "react-redux";
import { setAvailableRooms, setLoading } from "../features/RoomSlice";

export default function BookForm() {
  const dispatch = useDispatch();
  const [newRooms, setNewRooms] = useState();
  const { total, totalRooms } = useSelector((store) => store);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    // dispatch(update(newRooms));
    dispatch(setAvailableRooms(newRooms));
  }, [newRooms]);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({ type: "room" });
    dispatch(setLoading(true));

    const availableRooms = totalRooms.filter((room) => total <= room.maxPerson);
    console.log(availableRooms);
    setTimeout(() => {
      setNewRooms(availableRooms);
      dispatch(setLoading(false));
    }, 1000);
  }
  console.log(newRooms);

  return (
    <div className="grid place-items-center">
      <form className="h-[110px]  md:w-[80%] lg:h-[40px] w-full ">
        <div className="flex flex-col w-full h-full lg:flex-row border-[4px] border-b-accent ">
          {/* <div className="flex-1 border-r  border-[2px] border-b-accent lg:border-none">
          <CheckIn />
        </div>
        <div className="flex-1  border-r  border-[2px] border-b-accent lg:border-none">
          <CheckOut />
        </div> */}
          <div className="flex-1  border-r  border-[2px] border-b-accent lg:border-none">
            <AdultsDropdown />
          </div>
          <div className="flex-1 border-r  border-[2px] border-b-accent lg:border-none">
            <KidsDropdown />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Check now
          </button>
        </div>
      </form>
    </div>
  );
}
