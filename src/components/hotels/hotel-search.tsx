import React, { useState } from "react";

export default function HotelSearch() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState("Any");

  const handleSearch = () => {
    console.log({ location, checkIn, checkOut, guests, roomType });
    // Here you can call your API with the search params
  };

  return (
    <div className="p-6">

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        {/* Location */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 dark:text-gray-300 mb-1">Location</label>
          <input
            type="text"
            placeholder="City or Hotel"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Check-in */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 dark:text-gray-300 mb-1">Check-in</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Check-out */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 dark:text-gray-300 mb-1">Check-out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Guests */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 dark:text-gray-300 mb-1">Guests</label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i === 0 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>

        {/* Room Type */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 dark:text-gray-300 mb-1">Room Type</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
          >
            <option value="Any">Any</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-4 flex items-center justify-center sm:justify-end">
        <button
          onClick={handleSearch}
          className="w-full md:w-auto px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          Search
        </button>
      </div>
    </div>
  );
}
