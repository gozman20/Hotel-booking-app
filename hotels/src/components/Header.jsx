import React, { useEffect, useState } from "react";
import logoDark from "../assets/logo-dark.svg";
import logoWhite from "../assets/logo-white.svg";
import { useSearchParams, Link } from "react-router-dom";

export default function Header() {
  const [header, setheader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setheader(true) : setheader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white py-6" : "bg-none py-8"
      } fixed z-40 w-full transition-all duration-500`}
    >
      <div className="container mx-auto flex flex-col justify-start items-center gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between ">
        {/* ---logo--- */}
        <a href="/">
          {header ? (
            <img src={logoDark} className="w-[160px]" />
          ) : (
            <img src={logoWhite} className="w-[160px]" />
          )}
        </a>

        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex items-center gap-x-3 lg:gap-x-8 tracking-[3px]text-[15px] uppercase font-tertiary`}
        >
          <Link
            to="/"
            // onClick={() => setSearchParams({})}
            className="hover:text-accent transition"
          >
            Home
          </Link>

          <Link
            to="/room/?type=restaurants"
            // onClick={() => {
            //   setSearchParams({ type: "restaurants" });
            // }}
            className="hover:text-accent transition"
          >
            Restaurant
          </Link>
          <Link
            to="/room/?type=bar"
            // onClick={() => setSearchParams({ type: "bar" })}
            className="hover:text-accent transition"
          >
            Bar
          </Link>
          <button
            onClick={() => setSearchParams({ type: "room" })}
            className="hover:text-accent transition"
          >
            ROOMS
          </button>
          <a href="" className="hover:text-accent transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
