import React, { useState } from "react";
import { CgCalendar } from "react-icons/cg";
import { BiCategoryAlt } from "react-icons/bi";

const TestEventCard = ({ data }) => {
  let { date, eventCategory, eventImage, eventName, registered, dataToFetch } =
    data;
  let buttonClasses = registered ? "bg-green-500" : "bg-blue-500";
  return (
    <>
      <div
        className="min-w-full bg-cover rounded-xl relative flex justify-center"
        style={{ backgroundImage: `url(${eventImage})` }}
      >
        <div className="text-white backdrop-blur-2xl w-[90%] h-1/2 absolute bottom-2 p-5 rounded-lg flex flex-col justify-between text-sm">
          <div className="flex justify-between">
            <div className="">
              <p className="w-full text-xl">{eventName}</p>

              <p className="flex items-center gap-1 ">
                <BiCategoryAlt />
                {eventCategory}
              </p>
              <p className="flex items-center gap-1">
                <CgCalendar />
                {date}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button
                className={
                  "px-4 py-2 text-white rounded-lg font-semibold " +
                  buttonClasses
                }
              >
                {registered ? "Registered" : "Join"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestEventCard;
