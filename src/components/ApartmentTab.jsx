import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ApartmentTab = () => {
  const [alreadyCustomer, setAlreadyCustomer] = useState("");
  const [inWhichServiceInterested, setInWhichServiceInterested] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const savedData = useSelector((state) => state.propertyPage.apartmentDetails);

  useEffect(() => {
    if (savedData) {
      setAlreadyCustomer(savedData.alreadyCustomer || "");
      setInWhichServiceInterested(savedData.inWhichServiceInterested || "");
    }
  }, [savedData]);

  const handleAnswer = (field, value) => {
    if (field === "alreadyCustomer") setAlreadyCustomer(value);
    if (field === "inWhichServiceInterested")
      setInWhichServiceInterested(value);

    dispatch({
      type: "setApartmentDetails",
      payload: { [field]: value },
    });
  };

  return (
    <div className="px-6">
      <h3 className="px-5 py-10 text-brand">Already a customer?:</h3>

      {/* Question 1 */}
      <div className="flex px-5 gap-5 mb-8">
        <button
          onClick={() => handleAnswer("salreadyCustomer", "yes")}
          className={`px-6 py-2 rounded-md font-[350] ${
            alreadyCustomer === "yes"
              ? "bg-green-800 text-white"
              : "bg-gray-100 text-brand"
          }`}
        >
          Yes
        </button>
        <button
          onClick={() => handleAnswer("alreadyCustomer", "no")}
          className={`px-6 py-2 rounded-md font-[350] ${
            alreadyCustomer === "no"
              ? "bg-green-800 text-white"
              : "bg-gray-100 text-brand"
          }`}
        >
          No
        </button>
      </div>

      <h3 className="px-5 py-10 text-brand">I'm interested in:</h3>

      {/* Question 2 */}
      <div className="flex px-5 gap-5">
        {["Change provider", "New connection", "Re-Electrification"].map(
          (option) => (
            <button
              key={option}
              onClick={() => handleAnswer("inWhichServiceInterested", option)}
              className={`px-6 py-2 rounded-md font-[350] whitespace-nowrap ${
                inWhichServiceInterested === option
                  ? "bg-green-800 text-white"
                  : "bg-gray-100 text-brand"
              }`}
            >
              {option}
            </button>
          )
        )}
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => navigate("/")}
          className="text-[14px] mt-10 ms-[50px] px-8 py-2 border border-brand text-brand rounded-md flex items-center gap-2"
        >
          <ChevronLeft size={15} /> Previous
        </button>
        <button
          onClick={() => navigate("/second-form")}
          className="text-[14px] mt-10 me-[30px] px-8 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center gap-2"
        >
          Next <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default ApartmentTab;
