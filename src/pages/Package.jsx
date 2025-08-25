import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ROUTES } from "../constants/route";
import { setPackageResource } from "../redux/actions/packageActions";
import PackageCard from "../components/PackageCard";
import NavigationButton from "../components/NavigationButton";
import { PACKAGES } from "../constants/packages";

const Package = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sliderRef = useRef(null);
  const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  afterChange: (index) => {
    setCurrentSlide(index);
    // always sync slidesToShow from slick's innerSlider
    const slickSlidesToShow =
      sliderRef.current?.innerSlider?.props?.slidesToShow || 3;
    setSlidesToShow(slickSlidesToShow);
  },
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};


  const totalSlides = PACKAGES.length;
  const totalDots = Math.ceil(totalSlides / slidesToShow);
const pageIndex = Math.min(
  totalDots - 1,
  Math.floor(currentSlide / slidesToShow)
);



  const selectedPackage = useSelector((state) => state.package.packageType);

  const dispatch = useDispatch();
  const isDisable = !selectedPackage;

  const handleSelect = (type) => {
    dispatch(setPackageResource(type));
  };

  return (
    <div className="w-full ">
      <div className=" w-[82%] md:w-[75%]  xl:w-[66%] mx-auto  ">
        <div className="bg-white p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-2 ms-0 md:ms-[20px]">
              <div className="inline-block bg-blue-100  px-18 py-3 rounded-md">
                <span className="text-brand font-medium">Daily</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between">
              <div>
                <h2 className="text-brand text-md md:text-xl font-medium mb-3">
                  Choose the package that suits you
                </h2>
                <p className=" text-brand">Read the general conditions here</p>
              </div>

              <div className="flex  items-center gap-14 mt-10 lg:mt-0">
                <div className="flex gap-2">
                  {Array.from({ length: totalDots }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        sliderRef.current?.slickGoTo(i * slidesToShow)
                      }
                      className={`w-2 h-2 rounded-full ${
                        pageIndex === i ? "bg-brand" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    className="circle-btn"
                    onClick={() => sliderRef.current?.slickPrev()}
                  >
                    <ChevronLeft size={15} className="w-5 h-5" />
                  </button>
                  <button
                    className="circle-btn"
                    onClick={() => sliderRef.current?.slickNext()}
                  >
                    <ChevronRight size={15} className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <Slider
          ref={sliderRef}
          {...settings}
          className=" flex px-0 gap-6 xl:px-[95px] ms-[-15px] xl:ms-[-65px]"
        >
          {PACKAGES.map((pkg) => (
            <PackageCard
              key={pkg.title}
              imgSrc={pkg.imgSrc}
              title={pkg.title}
              desc={pkg.desc}
              isSelected={selectedPackage === pkg.title}
              onSelect={() => handleSelect(pkg.title)}
            />
          ))}
        </Slider>
        <div className="form-nav sm:w-[98%] ms-[15px] sm:ms-0 ">
          <NavigationButton
            disable={isDisable}
            prevPath={ROUTES.APPLICATION.PROPERTY}
            nextPath={ROUTES.APPLICATION.WARRANTY}
          />
        </div>
      </div>
    </div>
  );
};

export default Package;
