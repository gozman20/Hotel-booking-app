import React, { useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setTotalKids, setTotal } from "../features/RoomSlice";

const list = [
  { name: "0 kid" },
  { name: "1 kid" },
  { name: "2 kids" },
  { name: "3 Kids" },
  { name: "4 Kids" },
];

export default function KidsDropdown() {
  const { totalKids } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [kids, setKids] = useState(totalKids);

  // console.log(typeof kids);
  // console.log(typeof Number(kids[0]));

  useEffect(() => {
    dispatch(setTotalKids(kids));
    dispatch(setTotal());
  }, [kids]);

  return (
    <Menu as="div" className="w-full h-full  bg-white relative">
      <Menu.Button className="w-full h-full flex justify-between items-center px-8">
        {kids === "0 kid" ? "No kid" : kids}
        <BsChevronDown className="text-[16px] text-accent-hover" />
      </Menu.Button>
      <Menu.Items
        as="ul"
        className="bg-white absolute w-full flex flex-col z-40"
      >
        {list.map((li, index) => (
          <Menu.Item
            as="li"
            key={li.id}
            onClick={() => setKids(li.name)}
            className="border-b last-of-type:border-b-0 h-12  w-full hover:bg-accent flex justify-center items-center"
          >
            {li.name}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
