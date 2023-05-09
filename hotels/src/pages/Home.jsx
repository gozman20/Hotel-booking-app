import React from "react";
import Rooms from "../components/Rooms";
import BookForm from "../components/BookForm";
import HeroSlider from "../components/HeroSlider";
import styles from "../components/styles";

export default function Home() {
  return (
    <>
      <div className={`relative `}>
        <div className="absolute w-full lg:left-0 lg:right-0 lg:p-0 z-30 lg:-top-[90px]  -top-[80px]">
          <BookForm />
        </div>
        <Rooms />
      </div>
    </>
  );
}
