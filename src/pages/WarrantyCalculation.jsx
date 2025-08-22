import React, { useState } from "react";
import ProgressIndicators from "../components/ProgressIndicators";
import { Info, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DocumentSection from "../components/DocumentSection";
import { ROUTES } from "../constant/route";

const WarrantyCalculation = () => {
  const [activeSection, setActiveSection] = useState("form");

  const { previousSupplierWarranty, agreedSupplyPower } = useSelector(
    (state) => state.warrantyCalculation
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleWarrantyChange = (field, value) => {
    dispatch({
      type: "setWarrantyDetails",
      payload: { [field]: value },
    });
  };

  return (
    <div className="w-full">
      <div className=" w-[80%]  ms-[10px] sm:ms-[55px] mt-[40px] ">
        {activeSection == "form" ? (
          <>
            <div className=" w-full xl:w-[50%] mx-auto">
              <div>
                <p className="text-brand font-semibold text-2xl">
                  Warranty Calculation
                </p>
                <p className="mt-[30px] text-brand font-[400] text-md">
                  To calculate the Gurantee, fill in the gurantee you were
                  charged to your prevoius supplier (i) and the agreed power
                  (KVA) (i) of your supply .More about the warranty Ploicy{" "}
                  <span>here</span>
                </p>
              </div>

              <div className="flex items-center mt-[30px]">
                <p className=" text-brand font-[400] text-md">
                  Prevoius Supplier Warrant
                </p>
                <Info size={20} className="text-dark ms-[100px]" />
              </div>

              <div className="flex flex-col w-24 mt-[40px]">
                <label className="text-brand text-sm mb-1">Euro</label>
                <div className=" mt-[15px] flex items-center border-b border-gray-900 pb-1">
                  <span className="text-md mr-1">€</span>
                  <input
                    type="number"
                    className="outline-none text-black text-md w-full"
                    value={previousSupplierWarranty}
                    onChange={(e) =>
                      handleWarrantyChange(
                        "previousSupplierWarranty",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>

              <div className="flex items-center mt-[40px]">
                <p className=" text-brand font-[400] text-md">
                  Agreed supply power
                </p>
                <Info size={20} className="text-dark ms-[70px]" />
              </div>

              <div className="flex flex-col w-24 mt-[40px]">
                <div className="mt-[-12px] flex items-center border-b border-gray-900 pb-1">
                  <select
                    className="outline-none text-black text-md w-full bg-transparent"
                    value={agreedSupplyPower}
                    onChange={(e) =>
                      handleWarrantyChange("agreedSupplyPower", e.target.value)
                    }
                  >
                    <option value="221">221</option>
                    <option value="300">300</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                  </select>
                </div>
              </div>

              <div>
                <p className="text-brand font-[400] text-md mt-[40px]">
                  Your Gurantee will be zero:
                </p>
                <p className="text-brand mt-[30px]">
                  1. By choosing the bank standing order as the account payment
                  method and activating it before the expiry of your first
                  Account.
                </p>
                <p className="text-brand text-[11px]">
                  To activate the bank standing order, you should contact your
                  bank
                </p>
                <p className="text-brand mt-[30px]">
                  2. By attaching the last paid invoice to your prevoius
                  supplier.
                </p>
                <p className="text-brand text-[11px]">
                  It should be attached togther with the other suporting
                  documents that will be requested in the next step
                </p>
              </div>
              <div className=" w-[55vw] flex flex-wrap justify-between items-center gap-4 mt-[75px] mb-[90px]">
                <button
                  onClick={() => navigate(ROUTES.APPLICATION.PACKAGE)}
                  className="w-full sm:w-auto min-w-[120px] text-[14px] px-5 py-2 cursor-pointer border border-brand text-brand rounded-md flex items-center justify-center gap-2"
                >
                  <ChevronLeft size={15} /> Previous
                </button>

                <button
                  onClick={() => setActiveSection("document")}
                  className="w-full sm:w-auto min-w-[120px] text-[14px] px-7 py-2 cursor-pointer bg-brand hover:bg-brand text-white rounded-md flex items-center justify-center gap-2"
                >
                  Next <ChevronRight size={15} />
                </button>
              </div>
            </div>
          </>
        ) : null}

        <div className="lg:w-[60%] sm:w-[100%] w-[120%] ms-0 xl:ms-[330px]  ">
          {activeSection == "document" ? (
            <>
              <div className="mt-[60px] ">
                <p className="text-brand font-semibold">
                  Find out the supporting documents you will need to complete
                  your online application!
                </p>
              </div>
              <DocumentSection />
            </>
          ) : null}
          {activeSection == "document" ? (
            <div className="flex flex-wrap justify-between items-center gap-4 mt-[75px] mb-[90px]">
              <button
                onClick={() => setActiveSection("form")}
                className="w-full sm:w-auto min-w-[120px] text-[14px] px-5 py-2 cursor-pointer border border-brand text-brand rounded-md flex items-center justify-center gap-2"
              >
                <ChevronLeft size={15} /> Previous
              </button>

              <button
                onClick={() => navigate(ROUTES.APPLICATION.EMAILVERIFICATION)}
                className="w-full sm:w-auto min-w-[120px] text-[14px] px-7 py-2 cursor-pointer bg-brand hover:bg-brand text-white rounded-md flex items-center justify-center gap-2"
              >
                Next <ChevronRight size={15} />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default WarrantyCalculation;
