import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import SeatGrid from "../components/SeatGrid";

describe("SeatGrid Component", () => {
  test("renders seat categories correctly", () => {
    render(
      <Provider store={store}>
        <SeatGrid />
      </Provider>
    );

    expect(screen.getByText("Silver (₹100)")).toBeInTheDocument();
    expect(screen.getByText("Gold (₹150)")).toBeInTheDocument();
    expect(screen.getByText("Platinum (₹200)")).toBeInTheDocument();
  });

  test("should allow selecting a seat", () => {
    render(
      <Provider store={store}>
        <SeatGrid />
      </Provider>
    );

    const seatButton = screen.getByText("A1");
    fireEvent.click(seatButton);

    expect(seatButton).toHaveClass("bg-green-500"); // Selected seat should turn green
  });

  test("should not allow selecting more than 8 seats", () => {
    render(
      <Provider store={store}>
        <SeatGrid />
      </Provider>
    );

    // Simulate selecting 9 seats
    for (let i = 1; i <= 9; i++) {
      const seatButton = screen.getByText(`A${i}`);
      fireEvent.click(seatButton);
    }

    // Expect an alert or error message
    expect(screen.getByText("Cannot select more than 8 seats")).toBeInTheDocument();
  });
});
