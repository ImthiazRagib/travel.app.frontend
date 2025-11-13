import React, { useState } from "react";
import { Search } from "lucide-react";
import type { SearchQuery } from ".";

interface Props {
  onSearch: (query: SearchQuery) => void;
}

export default function FlightSearchBar({ onSearch }: Props) {
  const [form, setForm] = useState<SearchQuery>({
    from: "",
    to: "",
    date: "",
    passengers: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(form);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md p-4 md:p-6 border-b border-gray-200 dark:border-gray-700">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        {/* From */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 dark:text-gray-400">FROM</label>
          <input
            type="text"
            name="from"
            placeholder="e.g., Dubai"
            value={form.from}
            onChange={handleChange}
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-800"
          />
        </div>

        {/* To */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 dark:text-gray-400">TO</label>
          <input
            type="text"
            name="to"
            placeholder="e.g., London"
            value={form.to}
            onChange={handleChange}
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-800"
          />
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 dark:text-gray-400">DEPARTURE DATE</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-800"
          />
        </div>

        {/* Passengers */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 dark:text-gray-400">PASSENGERS</label>
          <select
            name="passengers"
            value={form.passengers}
            onChange={handleChange}
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-800"
          >
            {[...Array(9)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} Passenger{i + 1 > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <Search className="w-5 h-5" /> Search Flights
        </button>
      </form>
    </div>
  );
}
