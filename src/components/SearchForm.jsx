import { ArrowLeftRight, Calendar, MapPin, Search } from "lucide-react";
import { CITIES } from "../data/mockBuses";

export default function SearchForm({ search, setSearch, onSearch }) {
  const handleSwap = () => {
    setSearch((prev) => ({
      ...prev,
      from: prev.to,
      to: prev.from,
    }));
  };

  return (
    <div className="bg-gradient-to-r from-rose-600 to-rose-700 pt-8 pb-16 px-4">
      <div className="max-w-5xl mx-auto text-center text-white mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
           Fastest Bus Ticket Booking
        </h1>
        <p className="text-rose-100 text-sm md:text-base">
          Safe, comfortable, and on-time journeys across major cities
        </p>
      </div>

      <form
        onSubmit={onSearch}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-end"
      >
        {/* From City */}
        <div className="md:col-span-4">
          <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
            From
          </label>
          <div className="relative flex items-center">
            <MapPin className="w-5 h-5 text-rose-500 absolute left-3" />
            <select
              value={search.from}
              onChange={(e) => setSearch({ ...search, from: e.target.value })}
              className="w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              {CITIES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Swap Button */}
        <div className="md:col-span-1 flex justify-center">
          <button
            type="button"
            onClick={handleSwap}
            title="Swap Cities"
            className="p-3 bg-slate-100 hover:bg-rose-50 text-rose-600 rounded-full border border-slate-200 transition cursor-pointer"
          >
            <ArrowLeftRight className="w-5 h-5" />
          </button>
        </div>

        {/* To City */}
        <div className="md:col-span-3">
          <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
            To
          </label>
          <div className="relative flex items-center">
            <MapPin className="w-5 h-5 text-rose-500 absolute left-3" />
            <select
              value={search.to}
              onChange={(e) => setSearch({ ...search, to: e.target.value })}
              className="w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              {CITIES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date */}
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
            Date
          </label>
          <div className="relative flex items-center">
            <Calendar className="w-4 h-4 text-rose-500 absolute left-3 pointer-events-none" />
            <input
              type="date"
              value={search.date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setSearch({ ...search, date: e.target.value })}
              className="w-full pl-9 pr-2 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-rose-500"
              required
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
          >
            <Search className="w-5 h-5" />
            <span>Search</span>
          </button>
        </div>
      </form>
    </div>
  );
}