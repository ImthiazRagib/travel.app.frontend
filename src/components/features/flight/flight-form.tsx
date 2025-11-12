import React, { useState } from "react";
import { ArrowLeftRight, Calendar, Users } from "lucide-react";

export default function FlightForm() {
  const [from, setFrom] = useState("Dhaka");
  const [to, setTo] = useState("Cox's Bazar");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [traveler, setTraveler] = useState("1 Traveler");
  const [travelClass, setTravelClass] = useState("Economy");

  const locations = [
    { name: "Dhaka", code: "DAC" },
    { name: "Cox's Bazar", code: "CXB" },
    { name: "Chittagong", code: "CGP" },
    { name: "Sylhet", code: "ZYL" },
    { name: "Barisal", code: "BZL" },
  ];

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end w-full max-w-6xl mx-auto p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-sm">
      {/* From */}
      <div className="flex flex-col border rounded-xl px-4 py-3 bg-white dark:bg-gray-800 shadow-sm">
        <label className="text-xs text-gray-500">FROM</label>
        <select
          className="bg-transparent text-lg font-semibold text-blue-800 dark:text-blue-300 focus:outline-none"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          {locations.map((loc) => (
            <option key={loc.code} value={loc.name}>
              {loc.name} ({loc.code})
            </option>
          ))}
        </select>
      </div>

      {/* Swap icon */}
      <div className="hidden md:flex justify-center items-center">
        <button
          onClick={handleSwap}
          className="p-2 rounded-full bg-yellow-100 hover:bg-yellow-200 transition-colors"
        >
          <ArrowLeftRight className="text-blue-700" />
        </button>
      </div>

      {/* To */}
      <div className="flex flex-col border rounded-xl px-4 py-3 bg-white dark:bg-gray-800 shadow-sm">
        <label className="text-xs text-gray-500">TO</label>
        <select
          className="bg-transparent text-lg font-semibold text-blue-800 dark:text-blue-300 focus:outline-none"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          {locations.map((loc) => (
            <option key={loc.code} value={loc.name}>
              {loc.name} ({loc.code})
            </option>
          ))}
        </select>
      </div>

      {/* Departure Date */}
      <div className="flex flex-col border rounded-xl px-4 py-3 bg-white dark:bg-gray-800 shadow-sm">
        <label className="text-xs text-gray-500 flex items-center gap-1">
          <Calendar size={12} /> DEPARTURE
        </label>
        <input
          type="date"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          className="bg-transparent text-lg font-semibold text-blue-800 dark:text-blue-300 focus:outline-none"
        />
      </div>

      {/* Return Date */}
      <div className="flex flex-col border rounded-xl px-4 py-3 bg-white dark:bg-gray-800 shadow-sm">
        <label className="text-xs text-gray-500 flex items-center gap-1">
          <Calendar size={12} /> RETURN
        </label>
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          className="bg-transparent text-lg font-semibold text-blue-800 dark:text-blue-300 focus:outline-none"
        />
      </div>

      {/* Traveler & Class */}
      <div className="flex flex-col border rounded-xl px-4 py-3 bg-white dark:bg-gray-800 shadow-sm md:col-span-2">
        <label className="text-xs text-gray-500 flex items-center gap-1">
          <Users size={12} /> TRAVELER, CLASS
        </label>
        <div className="flex gap-2">
          <select
            value={traveler}
            onChange={(e) => setTraveler(e.target.value)}
            className="bg-transparent text-lg font-semibold text-blue-800 dark:text-blue-300 focus:outline-none w-full"
          >
            <option>1 Traveler</option>
            <option>2 Travelers</option>
            <option>3 Travelers</option>
          </select>
          <select
            value={travelClass}
            onChange={(e) => setTravelClass(e.target.value)}
            className="bg-transparent text-lg font-semibold text-blue-800 dark:text-blue-300 focus:outline-none w-full"
          >
            <option>Economy</option>
            <option>Business</option>
            <option>First</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <div className="col-span-full flex justify-center mt-4">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-10 py-3 rounded-lg transition-colors">
          Search
        </button>
      </div>
    </div>
  );
}
