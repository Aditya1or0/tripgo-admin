import Heading from "@/components/heading";
import React from "react";
import BookTripTable from "./booked-trip";
// import BookTripTable from "./booked-trip";
// import "@mantine/core/styles.css";
export interface Trip {
  id: string;
  location: string;
  customer: string;
  travelers: string;
  totalPrice: string;
  bookedOn: string;
  specialRequests?: string;
  status: "confirmed" | "pending" | "cancelled";
  duration: string;
  type: string;
  rating?: number;
}
const dummyTravelData: Trip[] = [
  {
    id: "A1967648",
    location: "Snowy Mountains, Thailand",
    customer: "John Smith",
    travelers: "2 Adults",
    totalPrice: "₹45,000",
    bookedOn: "Aug 15, 2025",
    status: "confirmed",
    duration: "7 days",
    type: "Adventure",
    rating: 4.8,
    specialRequests: "Vegetarian meals, early check-in requested",
  },
  {
    id: "B2834756",
    location: "Santorini, Greece",
    customer: "Emma Wilson",
    travelers: "4 Adults, 1 Child",
    totalPrice: "₹1,25,000",
    bookedOn: "Aug 18, 2025",
    status: "pending",
    duration: "10 days",
    type: "Luxury",
    rating: 4.9,
    specialRequests: "Ocean view rooms, baby cot required",
  },
  {
    id: "C3947562",
    location: "Kyoto, Japan",
    customer: "Michael Chen",
    travelers: "2 Adults",
    totalPrice: "₹89,000",
    bookedOn: "Aug 20, 2025",
    status: "confirmed",
    duration: "5 days",
    type: "Cultural",
    rating: 4.7,
    specialRequests: "Traditional ryokan accommodation",
  },
  {
    id: "D4582139",
    location: "Maldives",
    customer: "Sarah Johnson",
    travelers: "2 Adults",
    totalPrice: "₹2,10,000",
    bookedOn: "Aug 22, 2025",
    status: "confirmed",
    duration: "14 days",
    type: "Honeymoon",
    rating: 5.0,
    specialRequests: "Private beach dinner, couples spa session",
  },
  {
    id: "E5729384",
    location: "Swiss Alps, Switzerland",
    customer: "David Brown",
    travelers: "6 Adults",
    totalPrice: "₹3,50,000",
    bookedOn: "Aug 25, 2025",
    status: "cancelled",
    duration: "12 days",
    type: "Adventure",
    rating: 4.6,
    specialRequests: "Ski equipment rental, group activities",
  },
  {
    id: "F6847291",
    location: "Bali, Indonesia",
    customer: "Lisa Garcia",
    travelers: "3 Adults",
    totalPrice: "₹67,000",
    bookedOn: "Aug 28, 2025",
    status: "confirmed",
    duration: "8 days",
    type: "Wellness",
    rating: 4.8,
    specialRequests: "Yoga sessions, detox meals",
  },
];

const TripManagement = () => {
  return (
    <div className="px-2 py-6">
      <Heading title="Trip Management" />
      <div>
        <BookTripTable travelData={dummyTravelData} />;
      </div>
    </div>
  );
};

export default TripManagement;
