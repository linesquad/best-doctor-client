import React from "react";

function SupportInfoContent({ text, phone, email, linkedin, address }) {
  return (
    <div>
      <p className="text-black mb-[1rem]">{text}</p>
      <div className="mb-[1rem] lg:flex lg:gap-4">
        <p className="text-black font-bold">Phone Number:</p>
        <p className="break-words overflow-x-auto">{phone}</p>
      </div>
      <div className="mb-[1rem] lg:flex lg:gap-4">
        <p className="text-black font-bold">Email Address:</p>
        <p className="break-words overflow-x-auto">{email}</p>
      </div>
      <div className="mb-[1rem] lg:flex lg:gap-4">
        <p className="text-black font-bold">Linkedin:</p>
        <p className="break-words overflow-x-auto">{linkedin}</p>
      </div>
      <div className="mb-[1rem] lg:flex lg:gap-4">
        <p className="text-black font-bold">Permanent Address:</p>
        <p className="break-words overflow-x-auto">{address}</p>
      </div>
    </div>
  );
}

export default SupportInfoContent;
