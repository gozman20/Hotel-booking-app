import React from "react";
import logoDark from "../assets/logo-dark.svg";

export default function Footer() {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto text-white flex lg:flex-row lg:justify-between flex-col justify-center items-center gap-y-3 lg:gap-y-0">
        <a href="/">
          <img src={logoDark} />
        </a>
        <p>Copy right &copy; 2022. All rights reserved</p>
      </div>
    </footer>
  );
}
