import React, { useState } from 'react';


export default function FlightTracker() {
    const [flight, setFlight] = useState('');
    return (
        <div className="max-w-lg mx-auto">
            <h2 className="text-xl font-semibold mb-2">Flight Tracker</h2>
            <div className="flex gap-2">
                <input value={flight} onChange={(e) => setFlight(e.target.value)} placeholder="Enter flight number" className="flex-1 p-2 rounded border" />
                <button className="px-4 rounded bg-brand-500 text-white">Track</button>
            </div>
            {/* Integrate flight status API server-side and show realtime data here */}
        </div>
    );
}