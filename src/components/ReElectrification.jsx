import React from "react";

const ReElectrification = () => {
  return (
    <>
      {" "}
      <div>
        <h2 className="text-brand font-semibold text-md lg:text-lg mb-4">
          Necessary Documents for the Owner
        </h2>
        <ol className="list-decimal ml-5 space-y-2 mb-6">
          <li>
            <span className="font-semibold text-sm lg:text-md text-dark">
              Identity
            </span>
            <p className="text-xs lg:text-sm text-brand-regular text-brand-regular">
              Photocopy of ID (2 sides) or Passport or Residence Permit or
              Driver&apos;s License
            </p>
          </li>
          <li>
            <span className="font-semibold text-sm lg:text-md text-dark">
              Account
            </span>
            <ul className="text-xs lg:text-sm text-brand-regular text-brand-regular list-disc">
              <p className="   text-xs lg:text-sm  ">Copy of last bill</p>
            </ul>
          </li>
          <li>
            <span className="font-semibold text-sm lg:text-md text-dark">
              Copy of E9
            </span>
          </li>
        </ol>
      </div>
      <div>
        <h2 className="text-brand font-semibold text-md lg:text-lg  mb-4">
          Necessary Documents for the Tenant
        </h2>
        <ol className="list-decimal ml-5 space-y-2 mb-6">
          <li>
            <span className="font-semibold  text-sm lg:text-md text-dark">
              Identity
            </span>
            <p className="text-xs lg:text-sm text-brand-regular text-brand-regular">
              Photocopy of ID (2 sides) or Passport or Residence Permit or
              Driver&apos;s License
            </p>
          </li>
          <li>
            <span className="font-semibold text-dark">Account</span>
            <ul className=" text-sm text-brand-regular text-brand-regular list-disc">
              <p className="text-xs lg:text-sm text-brand-regular text-brand-regular">
                Copy of last bill
              </p>
            </ul>
          </li>
          <li>
            <span className="font-semibold  text-sm lg:text-md text-dark">
              Copy of TAXI lease
            </span>
          </li>
        </ol>
      </div>
    </>
  );
};

export default ReElectrification;
