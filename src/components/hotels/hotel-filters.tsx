import React, { useState } from "react";

export default function HotelFilters() {
  const [price, setPrice] = useState(200);
  const [rating, setRating] = useState<number | null>(null);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const amenities = ["Free WiFi", "Pool", "Spa", "Parking", "Breakfast", "Gym"];

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <aside className="w-full md:w-64 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm p-5 transition-colors duration-300">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Filters
      </h3>

      {/* Location */}
      <div className="mb-5">
        <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
          Location
        </label>
        <input
          type="text"
          placeholder="Search location..."
          className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Price Range */}
      <div className="mb-5">
        <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
          Max Price: ${price}
        </label>
        <input
          type="range"
          min={50}
          max={500}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-yellow-400 cursor-pointer"
        />
      </div>

      {/* Rating */}
      <div className="mb-5">
        <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">
          Rating
        </label>
        <div className="flex flex-wrap gap-2">
          {[5, 4, 3, 2].map((r) => (
            <button
              key={r}
              onClick={() => setRating(rating === r ? null : r)}
              className={`px-3 py-1 rounded-lg text-sm font-medium border transition-colors ${
                rating === r
                  ? "bg-yellow-400 text-gray-900 border-yellow-400"
                  : "border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-yellow-400"
              }`}
            >
              {r}+ ⭐
            </button>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-6">
        <label className="block text-sm text-gray-500 dark:text-gray-400 mb-2">
          Amenities
        </label>
        <div className="flex flex-col gap-2">
          {amenities.map((a) => (
            <label
              key={a}
              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
            >
              <input
                type="checkbox"
                checked={selectedAmenities.includes(a)}
                onChange={() => toggleAmenity(a)}
                className="accent-yellow-400"
              />
              {a}
            </label>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={() => {
          setPrice(200);
          setRating(null);
          setSelectedAmenities([]);
        }}
        className="w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg py-2 text-sm hover:bg-yellow-400 hover:text-gray-900 transition-all"
      >
        Reset Filters
      </button>
    </aside>
  );
}
