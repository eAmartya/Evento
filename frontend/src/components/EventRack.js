import React from "react";
import capitalizeFirstLetter from "../utils/CapitaliseFirstLetter";

const EventRackWrapper = ({ children, rackTitle }) => {
  return (
    <>
      <div className="w-full border-2 border-black p-3">
        <p className="">
          {rackTitle
            ? capitalizeFirstLetter(rackTitle)
            : "Can't fetch Rack title"}
        </p>
        <div className="flex gap-2 w-full min-h-[250px] overflow-y-auto p-2 ">
          {children}
        </div>
      </div>
    </>
  );
};

export default EventRackWrapper;
