import React, { useState } from 'react';
import dayjs from 'dayjs';
import SearchFlightHeader from './search-components/search-flight-header';
import FlightList from './search-components/flight-lists';
import { useFlights } from '../../../redux/features/flights/useFlights';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { setFlightFilters } from '../../../redux/features/flights/flight.filters.slice';

interface FlightSearchForm {
    origin: string;
    destination: string;
    departureDate: string;
    returnDate: string;
    arrivalTime: string;
    passengers: number;
    tripType: 'roundtrip' | 'oneway';
}

const Flights: React.FC = () => {
    const [form, setForm] = useState<FlightSearchForm>({
        origin: '',
        destination: '',
        departureDate: dayjs().format('YYYY-MM-DD'),
        returnDate: '',
        arrivalTime: '',
        passengers: 1,
        tripType: 'roundtrip',
    });

    const dispatch = useAppDispatch();
    const flightFilters = useAppSelector((s) => s.flightFilters);

    const { data } = useFlights({
        maxPrice: 1000,
        stops: 'any',
        airlines: [] as string[],
        departureTime: form.departureDate,
        arrivalTime: form.arrivalTime,
        returnDate: form.returnDate
    })
    console.log("🚀 ~ Flights ~ data:", flightFilters, data)

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

    const [showResults, setShowResults] = useState(false);

    const handleSearch = () => {
        if (!form.origin || !form.destination || !form.departureDate) return;
        setShowResults(true);
    };

    // const handleFilterChange = (key: string, value: any) => {
    //     setFilters((prev) => ({ ...prev, [key]: value }));
    // };

    // Handler passed to child filter component to update Redux
    const handleFilterChange = (payload: Partial<typeof flightFilters>) => {
        dispatch(setFlightFilters(payload));
    };

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
                                value={flightFilters.maxPrice}
                                onChange={(e) => handleFilterChange({ maxPrice: Number(e.target.value) })}
                                className="w-full"
                            />
                            <div className="text-right text-sm text-gray-500">${flightFilters.maxPrice}</div>
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
                                            checked={flightFilters.stops === opt.value}
                                            onChange={(e) => handleFilterChange({ 'stops': e.target.value })}
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
                                            checked={flightFilters.airlines.includes(airline)}
                                            onChange={(e) => {
                                                const updated = e.target.checked
                                                    ? [...flightFilters.airlines, airline]
                                                    : flightFilters.airlines.filter((a) => a !== airline);
                                                handleFilterChange({ airlines: updated });
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
                    Render
                    {/* <FlightList showResults={showResults} flights={data.flights} /> */}
                </main>
            </div>
        </div>
    );
};

export default Flights;
