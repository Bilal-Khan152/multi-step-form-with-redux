import React from "react";
import ProgressIndicators from "../components/ProgressIndicators";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ROUTES } from "../constant/route";

const EmailVerification = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const savedState = localStorage.getItem("reduxState");
  const email = useSelector((state) => state.emailVerification.email) || "";

  const handleSave = (newEmail) => {
    dispatch({
      type: "setEmail",
      payload: { email: newEmail },
    });
  };

  const handleNextBtn = () => {
    toast.success("Email sent successfully");
    if (savedState) {
      //   console.log("Redux State:", JSON.parse(savedState));
      console.log("Data:", JSON.stringify(JSON.parse(savedState), null, 2));
    }
  };

  return (
    <div className="w-full  ">
      <div className="p-8 mt-[40px] flex items-center justify-center">
        <div className="max-w-lg mx-auto text-center">
          {/* Main heading */}
          <h2 className="text-brand text-lg font-medium mb-4">
            Fill in your email and click Verify to receive a confirmation link.
          </h2>

          {/* Subtext */}
          <p className="text-brand text-sm mb-8">
            In case you did not receive a confirmation email, please fill in a
            new one.
          </p>

          {/* Email and Button */}
          <div className="space-y-4 w-[220px] mt-[100px] mx-auto">
            {/* Email input */}
            <div>
              <input
                value={email}
                onChange={(e) => handleSave(e.target.value)}
                type="email"
                placeholder="E-mail"
                className="w-full px-2py-3 border-b-2 border-gray-300 bg-transparent focus:border-blue-500 focus:outline-none placeholder-gray-400 text-gray-700"
              />
            </div>

            {/* Verification button */}
            <button
              onClick={() => handleSave(email)}
              className="w-full bg-dark hover:bg-dark text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              Verification
            </button>
          </div>
        </div>
      </div>

      <div className="flex w-[55%] mx-auto  flex-wrap justify-between items-center gap-4 mt-[75px] mb-[90px]">
        <button
          onClick={() => navigate(ROUTES.APPLICATION.WARRANTY)}
          className="w-full sm:w-auto min-w-[120px] text-[14px] px-5 py-2 cursor-pointer border border-brand text-brand rounded-md flex items-center justify-center gap-2"
        >
          <ChevronLeft size={15} /> Previous
        </button>

        <button
          onClick={handleNextBtn}
          className="w-full sm:w-auto min-w-[120px] text-[14px] px-7 py-2 cursor-pointer bg-brand hover:bg-brand text-white rounded-md flex items-center justify-center gap-2"
        >
          Next <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default EmailVerification;
