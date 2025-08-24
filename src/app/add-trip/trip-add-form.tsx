"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
// import { Label, Input, Textarea, Button } from "@/components/ui"
import addTrip from "../../assets/add-trip.svg";
import Image from "next/image";

const svgImage = "/images/trip-image.svg"; // Replace with your actual svg path

type TripFormData = {
  title: string;
  city: string;
  pricePerPerson: string;
  description: string;
  maxPersons: string;
  distance: string;
  rating: string;
  image: File | null;
};

export default function AddTripForm() {
  const [formData, setFormData] = useState<TripFormData>({
    title: "",
    city: "",
    pricePerPerson: "",
    description: "",
    maxPersons: "",
    distance: "",
    rating: "",
    image: null,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        image: e.target.files![0],
      }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white/50 dark:bg-[#222] mt-10">
      <div className="grid md:grid-cols-[1fr_300px] gap-10">
        {/* LEFT: Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label
                htmlFor="title"
                className="text-base md:text-lg font-medium"
              >
                Title
              </Label>
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Trip title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label
                htmlFor="city"
                className="text-base md:text-lg font-medium"
              >
                City
              </Label>
              <Input
                type="text"
                id="city"
                name="city"
                placeholder="City name"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label
                htmlFor="maxPersons"
                className="text-base md:text-lg font-medium"
              >
                Max Persons
              </Label>
              <Input
                type="number"
                id="maxPersons"
                name="maxPersons"
                placeholder="e.g. 10"
                value={formData.maxPersons}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label
                htmlFor="distance"
                className="text-base md:text-lg font-medium"
              >
                Distance
              </Label>
              <Input
                type="text"
                id="distance"
                name="distance"
                placeholder="e.g. 120km"
                value={formData.distance}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <Label
                htmlFor="pricePerPerson"
                className="text-base md:text-lg font-medium"
              >
                Price / Person
              </Label>
              <Input
                type="number"
                id="pricePerPerson"
                name="pricePerPerson"
                placeholder="₹ per person"
                value={formData.pricePerPerson}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label
                htmlFor="rating"
                className="text-base md:text-lg font-medium"
              >
                Rating (0-5)
              </Label>
              <Input
                type="number"
                min={0}
                max={5}
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <Label
              htmlFor="description"
              className="text-base md:text-lg font-medium"
            >
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Trip description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
            />
          </div>

          {/* File Upload */}
          <div>
            <Label htmlFor="image" className="text-base md:text-lg font-medium">
              Upload Image
            </Label>
            <Input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>

        {/* RIGHT: Image Section */}
        <div className="hidden md:flex items-start justify-center pt-4">
          <Image
            src={addTrip}
            alt="Trip Illustration"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
