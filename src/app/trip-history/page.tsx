import React from "react";
import BookTripTable from "../trip-management/booked-trip";

import { Trip } from "../trip-management/page";
import Heading from "@/components/heading";

export const dummyTravelData: Trip[] = [
  {
    id: "TRIP001",
    location: "Manali",

    // ❌ Should be customer
    customerName: "Rahul Sharma",

    travelers: "4",
    totalPrice: "₹20,000",
    bookedOn: "2025-08-10",

    // ❌ Invalid status
    status: "completed",

    duration: "3 Days / 2 Nights",
    type: "Adventure",

    // ❌ Wrong type
    rating: "4.5",

    // ❌ Wrong property name
    specialRequest: "Vegetarian meals only",
  },
];

const TripHistory = () => {
  return (
    <div className="px-2 py-6">
      <Heading title="Trip History" />

      {/* ❌ Extra prop that may not exist */}
      <BookTripTable travelData={dummyTravelData} loading={true} />
    </div>
  );
};

export default TripHistory;
