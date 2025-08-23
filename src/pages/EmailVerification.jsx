import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ROUTES } from "../constant/route";
import { setUserEmail } from "../redux/actions/emailActions";

const EmailVerification = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const savedState = localStorage.getItem("reduxState");
  const email =
    useSelector((state) => state.emailVerification.emailVerification) || "";
  // console.log(email);

  const handleChange = (newEmail) => {
    //  console.log("email" , newEmail)
    dispatch(setUserEmail(newEmail));
  };

  const handleSave = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      return toast.error("Please enter an email");
    }
    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid email address");
    }

    toast.success("Email sent successfully");

    if (savedState) {
      console.log("FormData:", JSON.stringify(JSON.parse(savedState), null, 2));
    }
  };

  const handleNextBtn = () => {
    localStorage.removeItem("reduxState");
    navigate("/");
  };

  return (
    <div className="w-full  ">
      <div className="p-8 mt-[40px] flex items-center justify-center">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-brand text-lg font-medium mb-4">
            Fill in your email and click Verify to receive a confirmation link.
          </h2>

          <p className="text-brand text-sm mb-8">
            In case you did not receive a confirmation email, please fill in a
            new one.
          </p>

          <div className="space-y-4 w-[220px] mt-[100px] mx-auto">
            <div>
              <input
                value={email}
                onChange={(e) => handleChange(e.target.value)}
                type="email"
                placeholder="E-mail"
                className="w-full px-2py-3 border-b-2 border-gray-300 bg-transparent focus:border-blue-500 focus:outline-none placeholder-gray-400 text-gray-700"
                required
              />
            </div>

            <button
              onClick={handleSave}
              className="w-full bg-dark hover:bg-dark text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              Verification
            </button>
          </div>
        </div>
      </div>

      <div className="w-[55%] mx-auto form-nav">
        <button
          onClick={() => navigate(ROUTES.APPLICATION.WARRANTY)}
          className="btn-outline"
        >
          <ChevronLeft size={15} /> Previous
        </button>

        <button onClick={handleNextBtn} className="btn-primary">
          Next <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default EmailVerification;
