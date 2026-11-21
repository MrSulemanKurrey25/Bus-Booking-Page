import { Clock, Star, Wifi, Zap } from "lucide-react";

export default function BusCard({ bus, onSelectBus }) {
  const totalSeats = 20;
  const availableSeats = totalSeats - bus.bookedSeats.length;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition flex flex-col md:flex-row justify-between gap-6">
      {/* Left Info */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-bold text-slate-900">{bus.operator}</h3>
          <span className="flex items-center gap-1 bg-emerald-600 text-white text-xs font-semibold px-2 py-0.5 rounded">
            <Star className="w-3 h-3 fill-current" /> {bus.rating}
          </span>
        </div>
        <p className="text-sm text-slate-500">{bus.type}</p>

        <div className="flex items-center gap-4 pt-2 text-slate-500 text-xs">
          <span className="flex items-center gap-1">
            <Wifi className="w-4 h-4 text-slate-400" /> Free Wi-Fi
          </span>
          <span className="flex items-center gap-1">
            <Zap className="w-4 h-4 text-slate-400" /> Charging Point
          </span>
        </div>
      </div>

      {/* Center Timing */}
      <div className="flex items-center justify-between md:justify-center gap-6 border-y md:border-y-0 py-3 md:py-0 border-slate-100">
        <div className="text-center">
          <p className="text-lg font-bold text-slate-800">{bus.departure}</p>
          <p className="text-xs text-slate-500">{bus.from}</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-xs text-slate-400 flex items-center gap-1 mb-1">
            <Clock className="w-3 h-3" /> {bus.duration}
          </span>
          <div className="w-20 h-[2px] bg-slate-300 relative">
            <div className="w-2 h-2 rounded-full bg-rose-500 absolute -top-[3px] left-0" />
            <div className="w-2 h-2 rounded-full bg-rose-500 absolute -top-[3px] right-0" />
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg font-bold text-slate-800">{bus.arrival}</p>
          <p className="text-xs text-slate-500">{bus.to}</p>
        </div>
      </div>

      {/* Right Pricing & CTA */}
      <div className="flex md:flex-col items-center md:items-end justify-between">
        <div className="text-left md:text-right">
          <p className="text-xs text-slate-400">Starting from</p>
          <p className="text-2xl font-bold text-slate-900">₹{bus.price}</p>
          <p className="text-xs text-emerald-600 font-medium">
            {availableSeats} Seats left
          </p>
        </div>

        <button
          onClick={() => onSelectBus(bus)}
          className="bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition cursor-pointer mt-2"
        >
          Select Seats
        </button>
      </div>
    </div>
  );
}