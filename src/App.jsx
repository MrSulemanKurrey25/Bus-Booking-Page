import { useState } from "react";
import { MOCK_BUSES } from "./data/mockBuses";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import BusCard from "./components/BusCard";
import SeatModal from "./components/SeatModal";
import TicketModal from "./components/TicketModal";

export default function App() {
  const today = new Date().toISOString().split("T")[0];

  const [buses, setBuses] = useState(MOCK_BUSES);
  const [search, setSearch] = useState({
    from: "Bhopal",
    to: "Indore",
    date: today,
  });
  const [activeRoute, setActiveRoute] = useState({
    from: "Bhopal",
    to: "Indore",
    date: today,
  });
  const [selectedBus, setSelectedBus] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [showTickets, setShowTickets] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setActiveRoute(search);
  };

  const filteredBuses = buses.filter(
    (bus) =>
      bus.from.toLowerCase() === activeRoute.from.toLowerCase() &&
      bus.to.toLowerCase() === activeRoute.to.toLowerCase()
  );

  const handleConfirmBooking = (newBooking) => {
    // Save ticket
    setBookings((prev) => [newBooking, ...prev]);

    // Mark selected seats as booked on that bus
    setBuses((prevBuses) =>
      prevBuses.map((bus) =>
        bus.id === newBooking.bus.id
          ? { ...bus, bookedSeats: [...bus.bookedSeats, ...newBooking.seats] }
          : bus
      )
    );

    setSelectedBus(null);
    setShowTickets(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        bookingsCount={bookings.length}
        onOpenBookings={() => setShowTickets(true)}
      />

      <SearchForm search={search} setSearch={setSearch} onSearch={handleSearch} />

      <main className="max-w-5xl w-full mx-auto px-4 -mt-8 pb-16 flex-1">
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 px-5 py-3 mb-5 flex flex-wrap justify-between items-center text-sm">
          <span className="font-semibold text-slate-800">
            {activeRoute.from} to {activeRoute.to} ({activeRoute.date})
          </span>
          <span className="text-slate-500">
            {filteredBuses.length} {filteredBuses.length === 1 ? "Bus" : "Buses"} found
          </span>
        </div>

        <div className="space-y-4">
          {filteredBuses.length > 0 ? (
            filteredBuses.map((bus) => (
              <BusCard
                key={bus.id}
                bus={bus}
                onSelectBus={(b) => setSelectedBus(b)}
              />
            ))
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center">
              <p className="text-slate-700 font-semibold text-lg mb-1">
                No direct buses found for this route
              </p>
              <p className="text-slate-500 text-sm">
                Try searching <strong>Bhopal → Mumbai</strong>,{" "}
                <strong>Indore → Mumbai</strong>,{" "}
                <strong>Bhopal → Bilaspur</strong>,{" "}
                <strong>Indore → Bilaspur</strong>,{" "}
                <strong>Bhopal → Indore</strong>,{" "}
                <strong>Mumbai → Pune</strong>, <strong>Delhi → Jaipur</strong>, or{" "}
                <strong>Bengaluru → Hyderabad</strong>.
              </p>
            </div>
          )}
        </div>
      </main>

      {selectedBus && (
        <SeatModal
          bus={selectedBus}
          date={activeRoute.date}
          onClose={() => setSelectedBus(null)}
          onConfirmBooking={handleConfirmBooking}
        />
      )}

      {showTickets && (
        <TicketModal
          bookings={bookings}
          onClose={() => setShowTickets(false)}
        />
      )}
    </div>
  );
}