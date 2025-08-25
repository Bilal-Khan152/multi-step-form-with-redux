import React from "react";
import { useLocation } from "react-router-dom";
import ProgressIndicators from "./ProgressIndicators";
import Logo from "../assets/images/company_logo.png";
import Call_icon from "../assets/images/call_icon.png";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <div className="flex   flex-row justify-between items-center mt-5 md:mt-1 px-4 md:px-20">
        <div className="mb-4 md:mb-0">
          <img src={Logo} alt="company logo" className="h-10 sm:h-14 md:h-16" />
        </div>

        <div className="text-center md:text-center">
          {isHome ? (
            <>
              <p className="text-brand  text-sm md:text-lg lg:text-2xl font-semibold">
                Welcome to the Online Application
              </p>
              <p className="text-brand text-xs sm:text-base md:text-base font-normal mt-1">
                Choose what interests you
              </p>
            </>
          ) : (
            <p className="text-brand   text-lg lg:text-2xl font-semibold">
              Online Application
            </p>
          )}
        </div>

        <div className="  md:mt-0">
          <img src={Call_icon} alt="call icon" className="h-6 sm:h-8 md:h-9" />
        </div>
      </div>

      {!isHome && <ProgressIndicators />}
    </>
  );
};

export default Navbar;
