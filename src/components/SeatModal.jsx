import { useState } from "react";
import { X } from "lucide-react";

const LOWER_SEATS = ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10"];
const UPPER_SEATS = ["U1", "U2", "U3", "U4", "U5", "U6", "U7", "U8", "U9", "U10"];

export default function SeatModal({ bus, date, onClose, onConfirmBooking }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [passengerName, setPassengerName] = useState("");
  const [passengerPhone, setPassengerPhone] = useState("");

  const toggleSeat = (seat) => {
    if (bus.bookedSeats.includes(seat)) return;
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (selectedSeats.length === 0) return;

    onConfirmBooking({
      bookingId: "PNR-" + Math.floor(100000 + Math.random() * 900000),
      bus,
      date,
      seats: selectedSeats,
      passengerName,
      passengerPhone,
      totalAmount: selectedSeats.length * bus.price,
    });
  };

  const renderDeck = (title, seats) => (
    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
      <p className="text-xs font-bold uppercase text-slate-500 mb-3">{title}</p>
      <div className="grid grid-cols-5 gap-2.5">
        {seats.map((seat) => {
          const isBooked = bus.bookedSeats.includes(seat);
          const isSelected = selectedSeats.includes(seat);

          let style =
            "bg-white border-slate-300 text-slate-700 hover:border-rose-500";
          if (isBooked)
            style =
              "bg-slate-200 border-slate-200 text-slate-400 cursor-not-allowed";
          if (isSelected)
            style = "bg-rose-600 border-rose-600 text-white font-bold";

          return (
            <button
              key={seat}
              type="button"
              disabled={isBooked}
              onClick={() => toggleSeat(seat)}
              className={`py-2.5 rounded-lg border text-xs transition cursor-pointer ${style}`}
            >
              {seat}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white">
          <div>
            <h2 className="text-lg font-bold text-slate-900">{bus.operator}</h2>
            <p className="text-xs text-slate-500">
              {bus.from} → {bus.to} | {date}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-500 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-6">
          {/* Legend */}
          <div className="flex gap-5 text-xs text-slate-600">
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded border border-slate-300 bg-white inline-block" />{" "}
              Available
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded bg-rose-600 inline-block" />{" "}
              Selected
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded bg-slate-200 inline-block" />{" "}
              Booked
            </span>
          </div>

          {/* Decks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderDeck("Lower Deck", LOWER_SEATS)}
            {renderDeck("Upper Deck", UPPER_SEATS)}
          </div>

          {/* Passenger Form */}
          {selectedSeats.length > 0 && (
            <form
              onSubmit={handleConfirm}
              className="border-t border-slate-100 pt-5 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Passenger Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={passengerPhone}
                    onChange={(e) => setPassengerPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
              </div>

              <div className="bg-rose-50 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-600">
                    Selected Seats:{" "}
                    <span className="font-bold text-slate-900">
                      {selectedSeats.join(", ")}
                    </span>
                  </p>
                  <p className="text-lg font-bold text-rose-600">
                    Total: ₹{selectedSeats.length * bus.price}
                  </p>
                </div>
                <button
                  type="submit"
                  className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition cursor-pointer"
                >
                  Confirm & Pay
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}