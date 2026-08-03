import React from "react";
import BookTripTable from "../trip-management/booked-trip";
import { Trip } from "../trip-management/page";
import Heading from "@/components/heading";

export const dummyTravelData: Trip[] = [
  {
    id: "TRIP001",

    location: "Manali",

    // ❌ Interface expects `customer`
    customerName: "Rahul Sharma",

    travelers: "4",
    totalPrice: "₹20,000",

    bookedOn: "2025-08-10",

    // ❌ Invalid union type
    status: "completed",

    duration: "3 Days / 2 Nights",

    type: "Adventure",

    // ❌ Interface expects number
    rating: "4.5",

    // ❌ Wrong property
    specialRequest: "Vegetarian meals only",
  },
];

const TripHistory = () => {
  return (
    <div className="px-2 py-6">
      <Heading title="Trip History" />

      {/* ❌ Component only accepts travelData */}
      <BookTripTable travelData={dummyTravelData} loading={true} />
    </div>
  );
};

export default TripHistory;
