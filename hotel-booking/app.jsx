import { useEffect } from "react";

function App() {
  useEffect(() => {
    alert("Welcome to ABC Hotel");

    const name = prompt("Enter your name:");
    const days = parseInt(prompt("Enter number of days:"));
    const room = prompt("Choose Room:\n1. Single\n2. Double\n3. Deluxe");

    let price = 0;
    let roomType = "";

    if (room === "1") {
      roomType = "Single";
      price = 1000;
    } else if (room === "2") {
      roomType = "Double";
      price = 2000;
    } else if (room === "3") {
      roomType = "Deluxe";
      price = 3000;
    } else {
      alert("Invalid room type");
      return;
    }

    const total = price * days;

    const confirmBooking = confirm(
      "Confirm Booking?\n\n" +
      "Name: " + name +
      "\nRoom: " + roomType +
      "\nDays: " + days +
      "\nTotal: ₹" + total
    );

    if (confirmBooking) {
      alert("Booking Confirmed!\nThank you for choosing our hotel.");
    } else {
      alert("Booking Cancelled.");
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Hotel Reservation System</h2>
      <p>Check dialogs to complete booking.</p>
    </div>
  );
}

export default App;
