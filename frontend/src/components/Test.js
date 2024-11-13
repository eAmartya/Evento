import React from "react";
import EventsHome from "./EventsHome";
import EventRackWrapper from "./EventRack";
import EventCard from "./EventCard";
import TestEventCard from "./TestEventCard";

const Test = () => {
  const events = [
    {
      dataToFetch: "event_001",
      eventName: "Tech Conference 2024",
      date: "2024-06-15",
      eventCategory: "Technology",
      eventImage:
        "https://images.pexels.com/photos/29274208/pexels-photo-29274208/free-photo-of-colorful-dia-de-los-muertos-celebration-portrait.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      registered: false,
    },

    {
      dataToFetch: "event_002",
      eventName: "Art Exhibition",
      date: "2024-07-20",
      eventCategory: "Art",
      eventImage:
        "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600",
      registered: true,
    },

    {
      dataToFetch: "event_003",
      eventName: "Music Festival",
      date: "2024-08-10",
      eventCategory: "Music",
      eventImage:
        "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600",
      registered: false,
    },

    {
      dataToFetch: "event_004",
      eventName: "Startup Pitch Day",
      date: "2024-09-05",
      eventCategory: "Business",
      eventImage:
        "https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg?auto=compress&cs=tinysrgb&w=600",
      registered: true,
    },

    {
      dataToFetch: "event_005",
      eventName: "Cooking Workshop",
      date: "2024-10-12",
      eventCategory: "Food & Drink",
      eventImage:
        "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600",
      registered: false,
    },
  ];

  return (
    <>
      {/* <EventsHome /> */}
      <EventRackWrapper rackTitle={"Popular Events"}>
        {events.map((el, index) => {
          return <TestEventCard data={el} key={index} />;
        })}
      </EventRackWrapper>
    </>
  );
};

export default Test;
