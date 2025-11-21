import React, { useState } from "react";
import { Plane, Building2, TreePalm, Book, ArrowLeftRight } from "lucide-react";
import FlightForm from "./flight-form";

export default function FlightSearchBox() {
  const [tripType, setTripType] = useState("oneway");
  const [tab, setTab] = useState("flight");

  const tabItems = [
    { id: "flight", label: "Flight", icon: <Plane size={18} /> },
    { id: "hotel", label: "Hotel", icon: <Building2 size={18} /> },
    { id: "tour", label: "Tour", icon: <TreePalm size={18} /> },
    { id: "visa", label: "Visa", icon: <Book size={18} /> },
  ];

  return (
    <div className="flex justify-center items-center w-full px-4 py-12 bg-cover bg-center"
         style={{ backgroundImage: "url('/assets/sea-bg.jpg')" }}>
      <div className="w-full max-w-6xl bg-white/95 dark:bg-gray-900/90 rounded-3xl shadow-lg p-6 md:p-8 backdrop-blur-md transition-all">
        
        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-6 border-b border-gray-200 dark:border-gray-700">
          {tabItems.map((_tab) => (
            <button
              key={_tab.id}
              className={`flex items-center gap-2 pb-2 px-2 border-b-2 transition-all text-sm font-medium ${
                _tab.id === tab
                  ? "border-yellow-400 text-blue-700 dark:text-yellow-400"
                  : "border-transparent text-gray-500 dark:text-gray-300 hover:text-blue-600"
              }`}
              onClick={() => setTab(_tab.id)}
            >
              {_tab.icon}
              {_tab.label}
            </button>
          ))}
        </div>

        {/* Trip type radio */}
        <div className="flex gap-4 justify-center mb-8">
          {["oneway", "round", "multi"].map((type) => (
            <label key={type} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <input
                type="radio"
                name="tripType"
                value={type}
                checked={tripType === type}
                onChange={(e) => setTripType(e.target.value)}
                className="accent-blue-700"
              />
              {type === "oneway"
                ? "One Way"
                : type === "round"
                ? "Round Way"
                : "Multi City"}
            </label>
          ))}
        </div>

        {/* Form */}
          <FlightForm />
      </div>
    </div>
  );
}
