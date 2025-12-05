import React from 'react';
import { Plane, MapPin, Calendar, Users, ArrowLeftRight } from 'lucide-react';

interface SearchFlightHeaderProps {
  form: {
    tripType: 'roundtrip' | 'oneway';
    origin: string;
    destination: string;
    departureDate: string;
    returnDate: string;
    passengers: number;
  };
  handleTripTypeChange: (type: 'roundtrip' | 'oneway') => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSearch: () => void;
  today: string;
}

const SearchFlightHeader: React.FC<SearchFlightHeaderProps> = ({
  form,
  handleTripTypeChange,
  handleChange,
  handleSearch,
  today,
}) => {
  return (
    <>
      {/* Header stays at top */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3">
          <Plane className="w-7 h-7 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-800">Search Flights</h1>
        </div>
      </div>

      {/* Search Form Card */}
      {/* <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => handleTripTypeChange('roundtrip')}
            className={`px-4 py-2 rounded-full font-medium transition ${form.tripType === 'roundtrip' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Round Trip
          </button>
          <button
            onClick={() => handleTripTypeChange('oneway')}
            className={`px-4 py-2 rounded-full font-medium transition ${form.tripType === 'oneway' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            One Way
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="origin"
              value={form.origin}
              onChange={handleChange}
              placeholder="From"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="destination"
              value={form.destination}
              onChange={handleChange}
              placeholder="To"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="date"
              name="departureDate"
              value={form.departureDate}
              min={today}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {form.tripType === 'roundtrip' && (
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="date"
                name="returnDate"
                value={form.returnDate}
                min={form.departureDate || today}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <select
              name="passengers"
              value={form.passengers}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Passenger' : 'Passengers'}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleSearch}
            disabled={!form.origin || !form.destination || !form.departureDate}
            className="bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
          >
            <ArrowLeftRight className="w-5 h-5" />
            Search Flights
          </button>
        </div>
      </div> */}
      <div className="bg-white p-4 md:p-6">
        {/* Trip type buttons */}
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => handleTripTypeChange('roundtrip')}
            className={`px-4 py-2 rounded-full font-medium transition ${form.tripType === 'roundtrip' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Round Trip
          </button>
          <button
            onClick={() => handleTripTypeChange('oneway')}
            className={`px-4 py-2 rounded-full font-medium transition ${form.tripType === 'oneway' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            One Way
          </button>
        </div>

        {/* Inputs row: responsive column on small screens */}
        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-4">
          {/* From / To */}
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="origin"
              value={form.origin}
              onChange={handleChange}
              placeholder="From"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="destination"
              value={form.destination}
              onChange={handleChange}
              placeholder="To"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Departure / Return */}
          <div className="flex-1 relative">
            <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="date"
              name="departureDate"
              value={form.departureDate}
              min={today}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {form.tripType === 'roundtrip' && (
            <div className="flex-1 relative">
              <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="date"
                name="returnDate"
                value={form.returnDate}
                min={form.departureDate || today}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}

          {/* Passengers / Search */}
          <div className="flex-1 relative">
            <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <select
              name="passengers"
              value={form.passengers}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Passenger' : 'Passengers'}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => handleSearch()}
            disabled={!form.origin || !form.destination || !form.departureDate}
            className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
          >
            <ArrowLeftRight className="w-5 h-5" />
            Search Flights
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchFlightHeader;
