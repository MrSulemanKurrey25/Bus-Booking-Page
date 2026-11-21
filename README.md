# 🚌 HumSafarBus — React Bus Booking Web Application

A responsive bus ticket booking web application built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React**. Users can search intercity routes, swap origin and destination cities, select lower or upper deck seats, enter passenger details, generate a PNR confirmation ticket, and view booked tickets.

## 🛠 Features

- **Route Search & City Swap:** Search buses by origin city, destination city, and travel date, with one-click city swapping.
- **Bus Listings:** View operator details, ratings, amenities (Wi-Fi, charging points), departure/arrival times, duration, fare pricing, and live remaining seat counts.
- **Interactive Seat Selection:** Choose available seats across Lower and Upper decks with visual states for available, selected, and booked seats, plus automatic fare calculation.
- **Ticket Confirmation & My Bookings Modal:** Generate a `PNR-XXXXXX` ticket on booking and view all booked tickets from the navigation bar.
- **Responsive UI:** Adapts cleanly across mobile, tablet, and desktop screen sizes.

## 🌍 Tech Stack

- **React** (with Vite)
- **Tailwind CSS** (`@tailwindcss/vite`)
- **Lucide React** (`lucide-react`)

## 🗂 Project Structure

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

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
