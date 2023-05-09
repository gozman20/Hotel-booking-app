import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import HeroSlider from "./components/HeroSlider";

export default function SharedLayout() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <Outlet />
    </div>
  );
}
