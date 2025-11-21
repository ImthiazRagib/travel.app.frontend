import React, { useState } from "react";
import { ArrowLeftRight, Calendar, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FlightForm() {
  const navigate  = useNavigate()
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
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

  const handleSearch = () => {
    navigate('/flights')
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end w-full max-w-6xl mx-auto p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-sm">
      {/* From */}
      <div className="flex flex-col border rounded-xl px-4 py-3 bg-white dark:bg-gray-800 shadow-sm">
        <label className="text-xs text-gray-500">FROM</label>
        <div className="relative">
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="Search city or airport"
            className="bg-transparent text-lg font-semibold text-blue-800 dark:text-blue-300 focus:outline-none w-full"
          />
          {from && (
            <ul className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border rounded-b-xl shadow-md max-h-48 overflow-y-auto z-10">
              {locations
                .filter((loc) =>
                  loc.name.toLowerCase().includes(from.toLowerCase())
                )
                .map((loc) => (
                  <li
                    key={loc.code}
                    onClick={() => setFrom(loc.name)}
                    className="px-4 py-2 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    {loc.name} ({loc.code})
                  </li>
                ))}
            </ul>
          )}
        </div>
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
        <div className="relative">
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Search city or airport"
            className="bg-transparent text-lg font-semibold text-blue-800 dark:text-blue-300 focus:outline-none w-full"
          />
          {to && (
            <ul className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border rounded-b-xl shadow-md max-h-48 overflow-y-auto z-10">
              {locations
                .filter((loc) =>
                  loc.name.toLowerCase().includes(to.toLowerCase())
                )
                .map((loc) => (
                  <li
                    key={loc.code}
                    onClick={() => setTo(loc.name)}
                    className="px-4 py-2 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    {loc.name} ({loc.code})
                  </li>
                ))}
            </ul>
          )}
        </div>
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
        <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-10 py-3 rounded-lg transition-colors" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
