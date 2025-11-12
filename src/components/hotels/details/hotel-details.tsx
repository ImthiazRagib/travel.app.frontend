import React, { useState } from "react";
import HotelBookingModal from "../hotel-booking-modal";

interface HotelDetailsProps {
    name: string;
    location: string;
    rating: number;
    pricePerNight: number;
    images: string[];
    description: string;
    amenities: string[];
}

export default function HotelDetailsPage({
    name,
    location,
    rating,
    pricePerNight,
    images,
    description,
    amenities,
}: HotelDetailsProps) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSubmit = (data: any) => {
        console.log("Booking data:", data);
        closeModal();
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            {/* Hotel Name & Location */}
            <div className="mb-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{name}</h1>
                <p className="text-gray-600 dark:text-gray-300">{location}</p>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`${name} image ${idx + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                    />
                ))}
            </div>

            {/* Rating & Price */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                    <span className="text-yellow-400 font-semibold">★</span>
                    <span className="text-gray-600 dark:text-gray-300 font-semibold">{rating.toFixed(1)}</span>
                    <span className="text-gray-600 dark:text-gray-300">{rating >= 4 ? "Excellent" : "Good"}</span>
                </div>
                <div className="text-xl font-bold text-gray-800 dark:text-gray-100">${pricePerNight}/night</div>
            </div>

            {/* Description */}
            <div className="mb-4 text-gray-700 dark:text-gray-300">
                <p>{description}</p>
            </div>

            {/* Amenities */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Amenities</h2>
                <div className="flex flex-wrap gap-2">
                    {amenities.map((item, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Book Now Button */}
            <div className="flex justify-end">
                <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500/80 text-white rounded-md font-semibold cursor-pointer" type="button" onClick={openModal}>
                    Book Now
                </button>
            </div>
            <HotelBookingModal
                isOpen={isModalOpen}
                onClose={handleSubmit}
                hotelName={name}
            />
        </div>
    );
}
