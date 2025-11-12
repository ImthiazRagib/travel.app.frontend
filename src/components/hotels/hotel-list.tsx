import React from "react";
import { Star, MapPin, Leaf, Accessibility, Snowflake } from "lucide-react";

interface Hotel {
  id: number;
  name: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  offer?: string;
}

const hotelImg = `https://storage.googleapis.com/gz-main-prod-main/media/hotel/241563/gozayaan/hotel_images/small-9dbZlwXl8ZWhatsApp%20Image%202024-06-28%20at%207.34.47%20PM%20(2).jpeg`

const hotels: Hotel[] = [
  {
    id: 1,
    name: "The Palm Resort",
    location: "Cox’s Bazar, Bangladesh",
    price: "$120 / night",
    rating: 4.5,
    image: hotelImg,
    offer: "15% off on early booking",
  },
  {
    id: 2,
    name: "Skyline Grand Hotel",
    location: "Dubai, UAE",
    price: "$180 / night",
    rating: 4.8,
    image: hotelImg,
    offer: "Stay 3 nights, pay for 2",
  },
  {
    id: 3,
    name: "Blue Lagoon Resort",
    location: "Maldives",
    price: "$350 / night",
    rating: 5,
    image: hotelImg,
  },
  {
    id: 4,
    name: "Cityscape Suites",
    location: "Istanbul, Turkey",
    price: "$99 / night",
    rating: 4.2,
    image: hotelImg,
    offer: "Free breakfast included",
  },
];

export default function HotelList() {
  return (
    <section className="py-12 dark:bg-gray-950 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-900 dark:text-gray-100">
          {hotels.length} Available Hotels in {hotels[0].location}
        </h2>

        <div className="flex flex-col gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="flex flex-col sm:flex-row items-start bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-800/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full sm:w-1/3">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="h-56 w-56 object-cover"
                />
                {hotel.offer && (
                  <div className="absolute top-3 left-3 bg-blue-800 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {hotel.offer}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col sm:flex-row justify-between w-full p-5 sm:p-6 gap-4">
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {hotel.location}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center text-yellow-400 mt-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < Math.floor(hotel.rating) ? "#FACC15" : "none"}
                        stroke="#FACC15"
                      />
                    ))}
                    <span className="ml-2 text-gray-600 dark:text-gray-300 text-sm">
                      {hotel.rating}
                    </span>
                  </div>

                  {/* Amenities */}
                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-600 dark:text-gray-300">
                    <span className="flex items-center gap-1">
                      <Leaf className="w-3 h-3 text-green-500" />
                      Garden
                    </span>
                    <span className="flex items-center gap-1">
                      <Accessibility className="w-3 h-3 text-blue-500" />
                      In-room Accessibility
                    </span>
                    <span className="flex items-center gap-1">
                      <Snowflake className="w-3 h-3 text-orange-500" />
                      Air Conditioning
                    </span>
                  </div>
                </div>

                {/* Price & Button */}
                <div className="flex flex-col justify-between items-end text-right w-full sm:w-auto">
                  <div className="text-blue-900 dark:text-blue-200 font-semibold text-lg">
                    {hotel.price}
                  </div>
                  <button className="mt-3 sm:mt-0 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-5 rounded-lg transition-colors dark:text-gray-900">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
