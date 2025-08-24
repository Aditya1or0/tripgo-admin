import Heading from "@/components/heading";
import React from "react";
import TripAddForm from "./trip-add-form";

const AddTrip = () => {
  return (
    <div className="px-2 py-6">
      <Heading title="Add trip" />
      <div>
        <TripAddForm />
      </div>
    </div>
  );
};

export default AddTrip;
