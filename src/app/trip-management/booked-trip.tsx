"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Clock,
  Star,
  Plane,
  Camera,
} from "lucide-react";
import { Trip } from "./page";

// Define the structure for your travel data (Trip)
// interface Trip {
//   id: string;
//   location: string;
//   customer: string;
//   travelers: string;
//   totalPrice: string;
//   bookedOn: string;
//   specialRequests?: string;
//   status: "confirmed" | "pending" | "cancelled";
//   duration: string;
//   type: string;
//   rating?: number;
// }

interface BookTripTableProps {
  travelData: Trip[];
}
const dummyTravelData: Trip[] = [];

const BookTripTable: React.FC<BookTripTableProps> = ({
  travelData = dummyTravelData,
}) => {
  const [selectedItem, setSelectedItem] = useState<Trip | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Handle item click to open the drawer
  const handleItemClick = (item: Trip) => {
    setSelectedItem(item);
    setIsDrawerOpen(true);
  };

  // Close the drawer
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedItem(null);
  };

  // Get status badge variant
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "confirmed":
        return "default";
      case "pending":
        return "secondary";
      case "cancelled":
        return "destructive";
      default:
        return "default";
    }
  };

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "text-green-600 bg-green-50";
      case "pending":
        return "text-yellow-600 bg-yellow-50";
      case "cancelled":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="px-2 py-6">
      {/* <div className="mb-6"></div> */}

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Bookings</p>
              <p className="text-2xl font-bold text-gray-900">
                {travelData.length}
              </p>
            </div>
            <Plane className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Confirmed</p>
              <p className="text-2xl font-bold text-green-600">
                {
                  travelData.filter((trip) => trip.status === "confirmed")
                    .length
                }
              </p>
            </div>
            <Calendar className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">
                {travelData.filter((trip) => trip.status === "pending").length}
              </p>
            </div>
            <Clock className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Revenue</p>
              <p className="text-2xl font-bold text-blue-600">₹9.86L</p>
            </div>
            <DollarSign className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Enhanced Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Booking ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Destination
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Booked On
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {travelData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {item.id}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {item.location}
                        </div>
                        <div className="text-sm text-gray-500">{item.type}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {item.customer}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {item.travelers}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-gray-900">
                      {item.totalPrice}
                    </div>
                    <div className="text-xs text-gray-500">{item.duration}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge
                      variant={getStatusVariant(item.status)}
                      className={`capitalize ${getStatusColor(item.status)}`}
                    >
                      {item.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.bookedOn}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button
                      onClick={() => handleItemClick(item)}
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Beautiful ShadCN Drawer */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="max-w-2xl mx-auto">
          <DrawerHeader className="text-center border-b pb-4">
            <DrawerTitle className="text-2xl font-bold text-gray-900">
              Trip Details
            </DrawerTitle>
            <DrawerDescription className="text-gray-600">
              Complete booking information and travel details
            </DrawerDescription>
          </DrawerHeader>

          <div className="p-6 max-h-[70vh] overflow-y-auto">
            {selectedItem && (
              <div className="space-y-6">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {selectedItem.location}
                      </h3>
                      <div className="flex items-center space-x-4 text-blue-100">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {selectedItem.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {selectedItem.travelers}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">
                        {selectedItem.totalPrice}
                      </div>
                      <Badge
                        variant="secondary"
                        className={`mt-2 ${getStatusColor(
                          selectedItem.status
                        )} border-white`}
                      >
                        {selectedItem.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Trip Information Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-semibold text-gray-900">
                          Destination
                        </span>
                      </div>
                      <p className="text-gray-700">{selectedItem.location}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {selectedItem.type} Package
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Users className="h-5 w-5 text-green-600 mr-2" />
                        <span className="font-semibold text-gray-900">
                          Travelers
                        </span>
                      </div>
                      <p className="text-gray-700">{selectedItem.travelers}</p>
                      <p className="text-sm text-gray-500 mt-1">Group size</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                        <span className="font-semibold text-gray-900">
                          Duration
                        </span>
                      </div>
                      <p className="text-gray-700">{selectedItem.duration}</p>
                      <p className="text-sm text-gray-500 mt-1">Trip length</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <DollarSign className="h-5 w-5 text-yellow-600 mr-2" />
                        <span className="font-semibold text-gray-900">
                          Booking ID
                        </span>
                      </div>
                      <p className="text-gray-700 font-mono">
                        {selectedItem.id}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Reference number
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-indigo-600 mr-2" />
                        <span className="font-semibold text-gray-900">
                          Booked On
                        </span>
                      </div>
                      <p className="text-gray-700">{selectedItem.bookedOn}</p>
                      <p className="text-sm text-gray-500 mt-1">Booking date</p>
                    </div>

                    {selectedItem.rating && (
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Star className="h-5 w-5 text-yellow-500 mr-2" />
                          <span className="font-semibold text-gray-900">
                            Rating
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-700 text-lg font-bold mr-2">
                            {selectedItem.rating}
                          </span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(selectedItem.rating!)
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Customer Information */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold">
                        {selectedItem.customer
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {selectedItem.customer}
                      </h4>
                      <p className="text-sm text-gray-500">Primary traveler</p>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                {selectedItem.specialRequests && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <Camera className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-1">
                          Special Requests
                        </h4>
                        <p className="text-amber-800 text-sm">
                          {selectedItem.specialRequests}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Edit Booking
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Contact Customer
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Download Invoice
                  </Button>
                </div>
              </div>
            )}
          </div>

          <DrawerFooter className="border-t bg-gray-50">
            <div className="flex space-x-3">
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={handleCloseDrawer}
                >
                  Close
                </Button>
              </DrawerClose>
              <Button className="flex-1 bg-green-600 hover:bg-green-700">
                Mark as Complete
              </Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default BookTripTable;
