import React from "react";

const FlightList: React.FC<{
    showResults: boolean;
    flights: Array<{
        id: string;
        flightNumber: string;
        from: string;
        to: string;
        departureTime: string;
        arrivalTime: string;
        stops: string;
        price: number;
        airlineId: string;
        airline: {
            id: string;
            name: string;
            code: string;
            logo: string;
        };
    }>;
}> = ({ showResults, flights }) => {
    console.log(flights);
    

    return (
        <main className="lg:col-span-3 space-y-6">
            {/* Flight Cards List */}
            {/* {showResults && (
                <div className="space-y-4">
                    {flights.map((flight) => (
                        <div key={flight.id} className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                                    <Plane className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-800">
                                        {flight.airline.name} · {flight.flightNumber}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {flight.from} → {flight.to}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {flight.departureTime} – {flight.arrivalTime} · {`1d`}
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        {flight.stops === 0 ? 'Non-stop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                                        {flight.stops}
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
            )} */}
            <>Nothing</>
        </main>
    )
};

export default FlightList;
