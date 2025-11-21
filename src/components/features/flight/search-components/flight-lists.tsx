import { Plane } from "lucide-react";

const FlightList: React.FC<{
    showResults: boolean;
    filteredFlights: Array<{
        id: number;
        airline: string;
        flightNumber: string;
        origin: string;
        destination: string;
        departure: string;
        arrival: string;
        duration: string;
        stops: number;
        price: number;
    }>;
}> = ({ showResults, filteredFlights }) => {
    console.log(`🚀 ~ FlightList ~ { showResults, filteredFlights }:`, { showResults, filteredFlights })
    return (
        <main className="lg:col-span-3 space-y-6">
            {/* Flight Cards List */}
            {showResults && (
                <div className="space-y-4">
                    {filteredFlights.map((flight) => (
                        <div key={flight.id} className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                                    <Plane className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-800">
                                        {flight.airline} · {flight.flightNumber}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {flight.origin} → {flight.destination}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {flight.departure} – {flight.arrival} · {flight.duration}
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-2xl font-bold text-indigo-600">${flight.price}</div>
                                <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                                    Select
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </main>
    )
};

export default FlightList;
