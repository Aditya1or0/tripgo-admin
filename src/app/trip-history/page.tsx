import React from "react";
import BookTripTable from "../trip-management/booked-trip";
import { Trip } from "../trip-management/page";
import Heading from "@/components/heading";

export const dummyTravelData: Trip[] = [
  {
    id: "TRIP001",

    location: "Manali",

    customer: "Rahul Sharma",

    travelers: "4",
    totalPrice: "₹20,000",

    bookedOn: "2025-08-10",
    status: "confirmed",
    duration: "3 Days / 2 Nights",
    type: "Adventure",
    rating: 4.5,
  },
];

const TripHistory = () => {
  return (
    <div className="px-2 py-6">
      <Heading title="Trip History" />

      <BookTripTable travelData={dummyTravelData} />
    </div>
  );
};

export default TripHistory;
