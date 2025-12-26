function App() {
  const bookTicket = () => {
    alert("Welcome to Flight Ticket Booking");

    const name = prompt("Enter your name:");
    if (!name) {
      alert("Booking cancelled");
      return;
    }

    const destination = prompt("Enter destination:");
    if (!destination) {
      alert("Booking cancelled");
      return;
    }

    const tickets = Number(prompt("Enter number of tickets:"));
    if (tickets <= 0 || isNaN(tickets)) {
      alert("Invalid number of tickets");
      return;
    }

    const pricePerTicket = 5000;
    const total = tickets * pricePerTicket;

    const confirmBooking = confirm(
      `Name: ${name}
Destination: ${destination}
Tickets: ${tickets}
Total Price: ₹${total}

Confirm booking?`
    );

    if (confirmBooking) {
      alert("Booking Successful ✈️");
    } else {
      alert("Booking Cancelled");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Flight Ticket Booking</h2>
      <button onClick={bookTicket}>Book Ticket</button>
    </div>
  );
}

export default App;
