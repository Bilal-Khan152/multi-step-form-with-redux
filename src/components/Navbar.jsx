import React from "react";
import Logo from "../assets/company_logo.png";
import Call_icon from "../assets/call_icon.png";

const Navbar = () => {
  return (
    <div className="flex  justify-between items-center mt-[20px]">
      <div className="ms-[100px]">
        <img src={Logo} alt="company logo" className="h-[60px]" />
      </div>

      <div>
        <p className="text-brand text-2xl font-semibold">
          Welcome to the Online Application
        </p>
        <p className="text-brand text-center font-[400]">
          Choose what insterests you
        </p>
      </div>

      <div className="me-[100px]">
        <img src={Call_icon} alt="call icon" className="h-[35px]" />
      </div>
    </div>
  );
};

export default Navbar;
