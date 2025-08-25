import React from "react";
import left_footer from "../assets/images/left_footer.png";
import right_footer from "../assets/images/right_footer.png";
import middle_footer_2 from "../assets/images/middle_footer_2.png";
import middle_footer_1 from "../assets/images/middle_footer_1.png";


const Footer = () => {
  return (
    <div className="flex justify-between  w-full items-center flex-col md:flex-row 2xl:items-start  border-t-[1px] border-t-brand py-2 md:pb-4">
      <div className="md:block hidden">
        <img src={left_footer}  className=" w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-full" alt="" />
      </div>

      <div className="relative">
        <img className="mx-auto mt-[-32px] h-16 2xl:block hidden  " src={middle_footer_2} alt="" />
        <img src={middle_footer_1} className=" absolute top-[-15px] right-[194px] mx-auto mt-[-20px] h-16 2xl:block hidden" alt="" />
        <p className="text-brand text-xs text-center 2xl:mt-0 cursor-pointer">Contact</p>
        <p className="text-brand text-xs text-center mt-3 cursor-pointer">Privacy</p>
        <p className="text-brand text-xs text-center mt-3 cursor-pointer">
          Copyright 2020 volton.gr | All Rights Reserved | Competent Regulatory
          Authority RAE
        </p>
      </div>

      <div className="md:block hidden">
        <img className="w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-full" src={right_footer} alt="" />
      </div>
    </div>
  );
};

export default Footer;
