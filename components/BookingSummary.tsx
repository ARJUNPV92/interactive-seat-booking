// components/BookingSummary.tsx (Booking Summary with Modal)
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";

const BookingSummary = () => {
  const { selectedSeats, totalCost } = useSelector((state: RootState) => state.seats);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mt-4 p-4 bg-white shadow-lg rounded-md">
      <h2 className="text-lg font-bold">Booking Summary</h2>
      <p>Selected Seats: {selectedSeats.join(", ") || "None"}</p>
      <p>Total Cost: ₹{totalCost}</p>
      <button 
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded" 
        onClick={() => setShowModal(true)}
      >
        Book Now
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-xl font-bold mb-2">Booking Confirmation</h2>
            <p><strong>Selected Seats:</strong> {selectedSeats.join(", ") || "None"}</p>
            <p><strong>Total Cost:</strong> ₹{totalCost}</p>
            <button 
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded" 
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default BookingSummary;
