import React, { useState } from "react";
import { Plane } from "lucide-react";
import type { Flight } from ".";



interface FlightListProps {
  flights: Flight[];
}

export default function FlightList({ flights }: FlightListProps) {
  const [openFlightId, setOpenFlightId] = useState<number | null>(null);

  const toggleFares = (id: number) => {
    setOpenFlightId(openFlightId === id ? null : id);
  };

  // 🛑 No flights found state
  if (!flights || flights.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 bg-white dark:bg-gray-800 w-full">
        <Plane className="w-16 h-16 text-blue-800 dark:text-blue-400 mb-4" />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          No Flights Found
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-sm">
          Try adjusting your filters or search criteria to explore more available flights.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 w-full">
      {flights.map((flight) => (
        <div
          key={flight.id}
          className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 transition-all"
        >
          {/* Top Flight Card */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={flight.logo}
                alt={flight.airline}
                className="w-14 h-14 object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {flight.airline}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {flight.from} → {flight.to}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {flight.time} • {flight.duration} • {flight.stops}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-lg font-bold text-blue-800 dark:text-blue-400">
                ${flight.price}
              </p>
              <button
                onClick={() => toggleFares(flight.id)}
                className="mt-2 bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-all"
              >
                {openFlightId === flight.id ? "Hide Fares" : "View Fares"}
              </button>
            </div>
          </div>

          {/* Sliding Fare Details */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              openFlightId === flight.id ? "max-h-96 mt-4" : "max-h-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              {flight.fares.map((fare, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-4 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex justify-between">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Flight No:{" "}
                      <span className="font-normal">{fare.flightNumber}</span>
                    </p>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Class: <span className="font-normal">{fare.class}</span>
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Travelers: {fare.travelers}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Baggage: {fare.baggage} ({fare.weight})
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Policy: <span className="italic">{fare.policy}</span>
                  </p>

                  <button className="mt-3 w-full bg-blue-800 hover:bg-blue-700 text-white py-1.5 rounded-md text-sm">
                    Select Fare
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
