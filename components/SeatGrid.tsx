import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleSeat } from "../store/seatSlice";
import { useState } from 'react'

const SeatGrid = () => {
  const dispatch = useDispatch();
  const selectedSeats = useSelector((state: RootState) => state.seats.selectedSeats);
  const [warning, setWarning] = useState("");

  // Labels for the types of Seats
  const seatGroups = [
    { label: "Silver (₹100)", rows: ["A", "B"], bgColor: "bg-gray-300" },
    { label: "Gold (₹150)", rows: ["C", "D"], bgColor: "bg-yellow-400" },
    { label: "Platinum (₹200)", rows: ["E", "F"], bgColor: "bg-blue-400" },
  ];

  const handleSeatSelection = (seatId: string) => {
    if (selectedSeats.length >= 8 && !selectedSeats.includes(seatId)) {
        setWarning("You can select a maximum of 8 seats.");
      return;
    }
    setWarning("");
    dispatch(toggleSeat(seatId));
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-md space-y-4">
      {warning && <p className="text-red-500 font-bold text-center">{warning}</p>}
      {seatGroups.map(({ label, rows, bgColor }) => (
        <div key={label}>
          <h2 className="text-lg font-bold mb-2 text-left">{label}</h2>
          <div className="grid grid-cols-10 gap-2">
            {rows.map(row =>
              [...Array(10)].map((_, i) => {
                const seatId = `${row}${i + 1}`;
                const isSelected = selectedSeats.includes(seatId);
                return (
                  <button
                    key={seatId}
                    className={`p-2 rounded-md text-center ${isSelected ? "bg-green-500 text-white" : bgColor}`}
                    onClick={() => handleSeatSelection(seatId)}
                  >
                    {seatId}
                  </button>
                );
              })
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeatGrid;
