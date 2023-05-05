import React from "react";
import Rooms from "../components/Rooms";
import BookForm from "../components/BookForm";
import HeroSlider from "../components/HeroSlider";
import styles from "../components/styles";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <div className={`${styles.paddingX} relative`}>
        <div className=" mt-  lg:absolute  lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12 ">
          <BookForm />
        </div>
        <Rooms />
      </div>
    </>
  );
}
