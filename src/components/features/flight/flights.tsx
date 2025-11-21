import React, { useState } from 'react';
import { Plane, MapPin, Calendar, Users, ArrowLeftRight } from 'lucide-react';
import dayjs, { Dayjs } from 'dayjs';
import SearchFlightHeader from './search-components/search-flight-header';
import FlightList from './search-components/flight-lists';

interface FlightSearchForm {
    origin: string;
    destination: string;
    departureDate: string;
    returnDate: string;
    passengers: number;
    tripType: 'roundtrip' | 'oneway';
}

const Flights: React.FC = () => {
    const [form, setForm] = useState<FlightSearchForm>({
        origin: '',
        destination: '',
        departureDate: dayjs().format('YYYY-MM-DD'),
        returnDate: '',
        passengers: 1,
        tripType: 'roundtrip',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleTripTypeChange = (tripType: 'roundtrip' | 'oneway') => {
        setForm((prev) => ({ ...prev, tripType, returnDate: tripType === 'oneway' ? '' : prev.returnDate }));
    };

    //   const handleSearch = () => {
    //     // TODO: integrate with backend
    //     console.log('Searching flights with:', form);
    //   };

    const today = dayjs().format('YYYY-MM-DD');

    const [filters, setFilters] = useState({
        maxPrice: 1000,
        stops: 'any',
        airlines: [] as string[],
    });

    const [showResults, setShowResults] = useState(false);

    const sampleFlights = [
        {
            id: 1,
            airline: 'SkyWings',
            flightNumber: 'SW123',
            origin: 'JFK',
            destination: 'LAX',
            departure: '08:00',
            arrival: '11:30',
            duration: '5h 30m',
            price: 299,
            stops: 0,
        },
        {
            id: 2,
            airline: 'AeroFly',
            flightNumber: 'AF456',
            origin: 'JFK',
            destination: 'LAX',
            departure: '14:15',
            arrival: '17:45',
            duration: '5h 30m',
            price: 350,
            stops: 1,
        },
        {
            id: 3,
            airline: 'CloudAir',
            flightNumber: 'CA789',
            origin: 'JFK',
            destination: 'LAX',
            departure: '22:00',
            arrival: '01:30+1',
            duration: '5h 30m',
            price: 199,
            stops: 0,
        },
    ];

    const handleSearch = () => {
        if (!form.origin || !form.destination || !form.departureDate) return;
        setShowResults(true);
    };

    const handleFilterChange = (key: string, value: any) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const filteredFlights = sampleFlights.filter((flight) => {
        if (flight.price > filters.maxPrice) return false;
        if (filters.stops !== 'any' && flight.stops !== Number(filters.stops)) return false;
        if (filters.airlines.length && !filters.airlines.includes(flight.airline)) return false;
        return true;
    });

    return (
        <div className="min-h-screen">
            <SearchFlightHeader form={form} handleTripTypeChange={handleTripTypeChange} handleChange={handleChange} handleSearch={handleSearch} today={today} />
            <div className="max-w-7xl mx-auto px-4 py-6 md:px-0 grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left Sidebar Filters */}
                <aside className="lg:col-span-1">
                    <div className="bg-white rounded-xl shadow p-4 space-y-4">
                        <h2 className="font-semibold text-gray-700">Filters</h2>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Max Price</label>
                            <input
                                type="range"
                                min="100"
                                max="1000"
                                step="50"
                                value={filters.maxPrice}
                                onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
                                className="w-full"
                            />
                            <div className="text-right text-sm text-gray-500">${filters.maxPrice}</div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Stops</label>
                            <div className="space-y-2">
                                {[
                                    { label: 'Any', value: 'any' },
                                    { label: 'Non-stop', value: '0' },
                                    { label: '1 Stop', value: '1' },
                                ].map((opt) => (
                                    <label key={opt.value} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="stops"
                                            value={opt.value}
                                            checked={filters.stops === opt.value}
                                            onChange={(e) => handleFilterChange('stops', e.target.value)}
                                            className="text-indigo-600"
                                        />
                                        <span className="text-sm text-gray-700">{opt.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Airlines</label>
                            <div className="space-y-2">
                                {['SkyWings', 'AeroFly', 'CloudAir'].map((airline) => (
                                    <label key={airline} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={filters.airlines.includes(airline)}
                                            onChange={(e) => {
                                                const updated = e.target.checked
                                                    ? [...filters.airlines, airline]
                                                    : filters.airlines.filter((a) => a !== airline);
                                                handleFilterChange('airlines', updated);
                                            }}
                                            className="text-indigo-600"
                                        />
                                        <span className="text-sm text-gray-700">{airline}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="lg:col-span-3">
                    <FlightList showResults={showResults} filteredFlights={filteredFlights} />
                </main>
            </div>
        </div>
    );
};

export default Flights;
