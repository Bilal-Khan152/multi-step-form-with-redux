import React from "react";

const ChnageProviderInMyName = () => {
  return (
    <div>
      <h2 className="text-brand font-semibold text-md lg:text-lg mb-8">
        Necessary Documents:
      </h2>
      <ol className="list-decimal ml-5 space-y-2 mb-6">
        <li>
          <span className="font-semibold text-dark text-sm lg:text-md">
            Identity
          </span>
          <p className=" text-xs lg:text-sm text-brand-regular  ">
            Photocopy of ID (2 sides) or Passport or Residence Permit or
            Driver&apos;s License
          </p>
        </li>
        <li>
          <span className="font-semibold text-dark text-sm lg:text-md">
            Account
          </span>
          <ul className=" text-xs  lg:text-sm text-brand-regular list-disc">
            <li>Copy of last bill</li>
            <li>Proof of payment if the due date has passed</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default ChnageProviderInMyName;
