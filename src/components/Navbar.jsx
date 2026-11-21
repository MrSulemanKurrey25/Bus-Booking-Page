import { Bus, Ticket } from "lucide-react";

export default function Navbar({ bookingsCount, onOpenBookings }) {
  return (
    <nav className="bg-rose-600 text-white shadow-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="bg-white text-rose-600 p-2 rounded-lg">
            <Bus className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">HumSafar Bus</span>
        </div>

        <button
          onClick={onOpenBookings}
          className="flex items-center gap-2 bg-rose-700 hover:bg-rose-800 px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer"
        >
          <Ticket className="w-4 h-4" />
          <span>My Bookings</span>
          {bookingsCount > 0 && (
            <span className="bg-white text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full">
              {bookingsCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}