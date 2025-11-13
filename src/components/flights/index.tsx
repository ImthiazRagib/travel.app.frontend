import React, { useState } from "react";
import FlightSearchBar from "./flight-search";
import FlightFilters from "./flight-filters";
import FlightList from "./flight-list";
import Pagination from "../primary/paginations/paginations";

export interface Filters {
    stops: string;
    airline: string;
    maxPrice: number;
    departureTime: string;
}

export interface SearchQuery {
    from: string;
    to: string;
    date: string;
    passengers: number;
}

export interface Flight {
    id: number;
    airline: string;
    logo: string;
    from: string;
    to: string;
    time: string;
    duration: string;
    stops: string;
    price: number;
    fares: {
        flightNumber: string;
        class: string;
        travelers: number;
        baggage: string;
        weight: string;
        policy: string;
    }[];
}

const initialFilters: Filters = {
    stops: "all",
    airline: "all",
    maxPrice: 1000,
    departureTime: "any",
};

const initialSearchQuery: SearchQuery = {
    from: "",
    to: "",
    date: "",
    passengers: 1,
};

export default function FlightSearchPage() {
    const [filters, setFilters] = useState<Filters>(initialFilters);
    const [searchQuery, setSearchQuery] = useState<SearchQuery>(initialSearchQuery);

    const flights: Flight[] = [
        {
            id: 1,
            airline: "Emirates",
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg",
            from: "Dubai (DXB)",
            to: "London (LHR)",
            duration: "7h 15m",
            price: 750,
            stops: "nonstop",
            time: "08:00 AM - 01:15 PM",
            fares: [
                {
                    flightNumber: "EK001",
                    class: "Economy",
                    travelers: 1,
                    baggage: "1 Checked Bag",
                    weight: "25kg",
                    policy: "Refundable with fee before departure",
                },
                {
                    flightNumber: "EK002",
                    class: "Business",
                    travelers: 1,
                    baggage: "2 Checked Bags",
                    weight: "40kg",
                    policy: "Fully refundable and changeable",
                },
                {
                    flightNumber: "EK003",
                    class: "First Class",
                    travelers: 1,
                    baggage: "3 Checked Bags",
                    weight: "50kg",
                    policy: "Refundable, includes lounge and chauffeur service",
                },
            ],
        },
        {
            id: 2,
            airline: "Qatar Airways",
            logo: "https://upload.wikimedia.org/wikipedia/en/9/9a/Qatar_Airways_Logo.svg",
            from: "Doha (DOH)",
            to: "Paris (CDG)",
            duration: "6h 45m",
            price: 690,
            stops: "1 stop",
            time: "09:30 AM - 03:15 PM",
            fares: [
                {
                    flightNumber: "QR203",
                    class: "Economy",
                    travelers: 1,
                    baggage: "1 Checked Bag",
                    weight: "23kg",
                    policy: "Non-refundable, change with fee",
                },
                {
                    flightNumber: "QR204",
                    class: "Business",
                    travelers: 1,
                    baggage: "2 Checked Bags",
                    weight: "35kg",
                    policy: "Refundable with minor fee",
                },
            ],
        },
        {
            id: 3,
            airline: "Etihad",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Etihad_Airways_Logo.svg",
            from: "Abu Dhabi (AUH)",
            to: "New York (JFK)",
            duration: "14h 30m",
            price: 1200,
            stops: "nonstop",
            time: "02:00 AM - 09:30 AM",
            fares: [
                {
                    flightNumber: "EY101",
                    class: "Economy",
                    travelers: 1,
                    baggage: "1 Checked Bag",
                    weight: "25kg",
                    policy: "Refundable before 24 hours of departure",
                },
                {
                    flightNumber: "EY102",
                    class: "Business",
                    travelers: 1,
                    baggage: "2 Checked Bags",
                    weight: "40kg",
                    policy: "Fully refundable, includes lounge access",
                },
                {
                    flightNumber: "EY103",
                    class: "First Class",
                    travelers: 1,
                    baggage: "3 Checked Bags",
                    weight: "50kg",
                    policy: "Premium lounge, fully refundable, chauffeur service",
                },
            ],
        },
    ];

    // Helper to check departure time
    const isWithinDepartureTime = (flight: Flight, filterTime: string) => {
        const hour = parseInt(flight.time.split(":")[0], 10);
        const isAM = flight.time.toLowerCase().includes("am");
        const h24 = isAM ? hour % 12 : (hour % 12) + 12;

        switch (filterTime) {
            case "morning":
                return h24 >= 5 && h24 < 12;
            case "afternoon":
                return h24 >= 12 && h24 < 17;
            case "evening":
                return h24 >= 17 && h24 < 24;
            case "night":
                return h24 >= 0 && h24 < 5;
            default:
                return true;
        }
    };

    // Full filter logic
    const filteredFlights = flights.filter(
        (flight) =>
            (filters.airline === "all" || flight.airline === filters.airline) &&
            (filters.stops === "all" || flight.stops === filters.stops) &&
            flight.price <= filters.maxPrice &&
            isWithinDepartureTime(flight, filters.departureTime) &&
            (!searchQuery.from ||
                flight.from.toLowerCase().includes(searchQuery.from.toLowerCase())) &&
            (!searchQuery.to ||
                flight.to.toLowerCase().includes(searchQuery.to.toLowerCase()))
    );

    const handleFilterChange = (updatedFilters: Partial<Filters>) => {
        setFilters((prev) => ({ ...prev, ...updatedFilters }));
    };

    const handleSearch = (query: SearchQuery) => {
        setSearchQuery(query);
    };

    const handleReset = () => {
        setFilters(initialFilters);
        setSearchQuery(initialSearchQuery);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col gap-4">
            <FlightSearchBar onSearch={handleSearch} />

            <div className="flex flex-col md:flex-row flex-1 gap-4">
                <FlightFilters filters={filters} onChange={handleFilterChange} onReset={handleReset} />
                <FlightList flights={filteredFlights} />
            </div>
            <Pagination
                totalPages={filteredFlights.length}
                currentPage={1}
                onPageChange={() => { }}
            />
        </div>
    );
}
