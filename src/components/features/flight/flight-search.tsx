export default function FlightSearch() {
    return (
        <section className="space-y-4">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Search flights</h1>
            <form className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                <input placeholder="From" className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400" />
                <input placeholder="To" className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400" />
                <input type="date" className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
                <select className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    <option>1 passenger</option>
                </select>
                <button className="sm:col-span-4 py-3 rounded bg-brand-500 text-white dark:bg-brand-600">Search</button>
            </form>
        </section>
    );
}