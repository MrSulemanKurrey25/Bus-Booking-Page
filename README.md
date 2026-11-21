# HumSafarBus — React Bus Booking Web Application

A responsive bus ticket booking web application built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React**. Users can search intercity routes, swap origin and destination cities, select lower or upper deck seats, enter passenger details, generate a PNR confirmation ticket, and view booked tickets.

## Features

- **Route Search & City Swap:** Search buses by origin city, destination city, and travel date, with one-click city swapping.
- **Bus Listings:** View operator details, ratings, amenities (Wi-Fi, charging points), departure/arrival times, duration, fare pricing, and live remaining seat counts.
- **Interactive Seat Selection:** Choose available seats across Lower and Upper decks with visual states for available, selected, and booked seats, plus automatic fare calculation.
- **Ticket Confirmation & My Bookings Modal:** Generate a `PNR-XXXXXX` ticket on booking and view all booked tickets from the navigation bar.
- **Responsive UI:** Adapts cleanly across mobile, tablet, and desktop screen sizes.

## Tech Stack

- **React** (with Vite)
- **Tailwind CSS** (`@tailwindcss/vite`)
- **Lucide React** (`lucide-react`)

## Project Structure

```text
bus-booking-app/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── data/
    │   └── mockBuses.js
    └── components/
        ├── Navbar.jsx
        ├── SearchForm.jsx
        ├── BusCard.jsx
        ├── SeatModal.jsx
        └── TicketModal.jsx
