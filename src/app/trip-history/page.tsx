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
    specialRequests: "Vegetarian meals only",
  },
  {
    id: "TRIP002",
    location: "Goa",
    customer: "Priya Mehta",
    travelers: "2",
    totalPrice: "₹15,000",
    bookedOn: "2025-08-20",
    status: "pending",
    duration: "2 Days / 1 Night",
    type: "Beach",
    rating: 3.8,
    specialRequests: "Late check-in requested",
  },
  {
    id: "TRIP003",
    location: "Jaipur",
    customer: "Amit Verma",
    travelers: "5",
    totalPrice: "₹25,000",
    bookedOn: "2025-08-15",
    status: "cancelled",
    duration: "4 Days / 3 Nights",
    type: "Heritage",
    rating: 4.0,
    specialRequests: "Guide with Hindi proficiency",
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
