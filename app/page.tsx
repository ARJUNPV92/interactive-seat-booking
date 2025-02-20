// app/page.tsx (Main Page)
"use client";
import SeatGrid from "../components/SeatGrid";
import BookingSummary from "../components/BookingSummary";
import { Provider } from "react-redux";
import store from "../store/store";

export default function HomePage() {
  return (
    <Provider store={store}>
      <main className="container mx-auto p-4">
      <h2 className="text-xl font-bold text-center mb-2">Interactive Seat Booking System</h2>
        <div className="bg-red-500 text-white text-center font-bold py-2 rounded-t-lg mb-4">SCREEN</div>
        <SeatGrid />
        <BookingSummary />
      </main>
    </Provider>
  );
}