import React, { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { setTotalAdults, setTotal } from "../features/RoomSlice";
import { useDispatch, useSelector } from "react-redux";

const list = [
  { no: "1 Adult" },
  { no: "2 Adults" },
  { no: "3 Adults" },
  { no: "4 Adults" },
];

export default function AdultsDropdown() {
  const { totalAdults } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [adults, setAdults] = useState(totalAdults);

  // console.log(typeof adults);
  // console.log(typeof Number(adults[0]));

  useEffect(() => {
    dispatch(setTotalAdults(adults));
    dispatch(setTotal());
  }, [adults]);

  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      <Menu.Button className="w-full h-full flex justify-between items-center px-8">
        {adults}
        <BsChevronDown className="text-[16px] text-accent-hover" />
      </Menu.Button>
      <Menu.Items as="ul" className="bg-white absolute w-full flex-col z-40">
        {list.map((li, index) => (
          <Menu.Item
            as="li"
            key={li.id}
            onClick={() => setAdults(li.no)}
            className="border-b last-of-type:border-b-0 h-12  w-full hover:bg-accent flex justify-center items-center"
          >
            {li.no}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
