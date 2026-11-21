import { CheckCircle2, Ticket, X } from "lucide-react";

export default function TicketModal({ bookings, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white">
          <div className="flex items-center gap-2">
            <Ticket className="w-5 h-5 text-rose-600" />
            <h2 className="text-lg font-bold text-slate-900">My Booked Tickets</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-500 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          {bookings.length === 0 ? (
            <p className="text-center text-slate-500 py-8 text-sm">
              No tickets booked yet. Search a route and book your seat!
            </p>
          ) : (
            bookings.map((b) => (
              <div
                key={b.bookingId}
                className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Confirmed ({b.bookingId})
                  </span>
                  <span className="text-sm font-bold text-rose-600">
                    ₹{b.totalAmount}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900">{b.bus.operator}</h3>
                <p className="text-sm text-slate-600">
                  {b.bus.from} → {b.bus.to} • {b.date} ({b.bus.departure})
                </p>
                <div className="pt-2 border-t border-slate-200 flex justify-between text-xs text-slate-500">
                  <span>Passenger: {b.passengerName}</span>
                  <span>
                    Seats: <strong className="text-slate-800">{b.seats.join(", ")}</strong>
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}