import React from "react";
import type { Filters } from ".";
import { SlidersHorizontal } from "lucide-react";

interface Props {
    filters: Filters;
    onChange: (updatedFilters: Partial<Filters>) => void;
    onReset: () => void;
}

export default function FlightFilters({ filters, onChange, onReset }: Props) {
    return (
        <div className="w-full md:w-72 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-5 space-y-6 md:sticky md:top-4 md:h-fit">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <SlidersHorizontal className="text-blue-800 dark:text-blue-400" />
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        Filters
                    </h2>
                </div>
                <button
                    onClick={onReset}
                    className="text-sm text-blue-800 dark:text-blue-400 hover:underline focus:outline-none"
                >
                    Reset
                </button>
            </div>

            {/* Stops */}
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Stops
                </label>
                <select
                    value={filters.stops}
                    onChange={(e) => onChange({ stops: e.target.value })}
                    className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-400"
                >
                    <option value="all">All</option>
                    <option value="nonstop">Non-stop</option>
                    <option value="1 stop">1 Stop</option>
                    <option value="2 stops">2 Stops</option>
                </select>
            </div>

            {/* Airline */}
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Airline
                </label>
                <select
                    value={filters.airline}
                    onChange={(e) => onChange({ airline: e.target.value })}
                    className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-400"
                >
                    <option value="all">All</option>
                    <option value="Emirates">Emirates</option>
                    <option value="Qatar Airways">Qatar Airways</option>
                    <option value="Etihad">Etihad</option>
                </select>
            </div>

            {/* Max Price */}
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Max Price: <span className="text-blue-800 dark:text-blue-400">${filters.maxPrice}</span>
                </label>
                <input
                    type="range"
                    min={100}
                    max={2000}
                    step={50}
                    value={filters.maxPrice}
                    onChange={(e) => onChange({ maxPrice: Number(e.target.value) })}
                    className="w-full accent-blue-800"
                />
            </div>

            {/* Departure Time */}
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Departure Time
                </label>
                <select
                    value={filters.departureTime}
                    onChange={(e) => onChange({ departureTime: e.target.value })}
                    className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-400"
                >
                    <option value="any">Anytime</option>
                    <option value="morning">Morning (5 AM – 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM – 5 PM)</option>
                    <option value="evening">Evening (5 PM – 12 AM)</option>
                    <option value="night">Night (12 AM – 5 AM)</option>
                </select>
            </div>
        </div>
    );
}
