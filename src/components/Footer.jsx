import React from "react";
import left_footer from "../assets/left_footer.png";
import right_footer from "../assets/right_footer.png";
import middle_footer_2 from "../assets/middle_footer_2.png";

const Footer = () => {
  return (
    <div className="flex justify-between w-full   border-2 border-t-brand pb-4">
      <div className="">
        <img src={left_footer} alt="" />
      </div>

      <div className="">
        <img className="mx-auto mt-[-20px] h-16" src={middle_footer_2} alt="" />
        <p className="text-brand text-xs text-center">Contact</p>
        <p className="text-brand text-xs text-center mt-3">Privacy</p>
        <p className="text-brand text-xs text-center mt-3">
          Copyright 2020 volton.gr | All Rights Reserved | Competent Regulatory
          Authority RAE
        </p>
      </div>

      <div>
        <img src={right_footer} alt="" />
      </div>
    </div>
  );
};

export default Footer;
