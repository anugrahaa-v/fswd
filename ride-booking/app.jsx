import { useEffect } from "react";

function App() {
  useEffect(() => {
    alert("Welcome to QuickCab Service");

    const name = prompt("Enter your name:");
    const pickup = prompt("Enter pickup location:");
    const drop = prompt("Enter drop location:");

    const cabType = prompt(
      "Select Cab Type:\n1. Mini\n2. Sedan\n3. SUV"
    );

    let fare = 0;
    let cabName = "";

    if (cabType === "1") {
      cabName = "Mini";
      fare = 100;
    } else if (cabType === "2") {
      cabName = "Sedan";
      fare = 200;
    } else if (cabType === "3") {
      cabName = "SUV";
      fare = 300;
    } else {
      alert("Invalid cab selection");
      return;
    }

    const distance = parseInt(prompt("Enter distance in km:"));
    const totalFare = distance * fare;

    const confirmRide = confirm(
      "Confirm Your Ride\n\n" +
      "Name: " + name +
      "\nPickup: " + pickup +
      "\nDrop: " + drop +
      "\nCab Type: " + cabName +
      "\nDistance: " + distance + " km" +
      "\nTotal Fare: ₹" + totalFare
    );

    if (confirmRide) {
      alert("Ride Booked Successfully!\nHave a safe journey.");
    } else {
      alert("Booking Cancelled.");
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Online Cab Booking System</h2>
      <p>Follow the dialog boxes to book your cab.</p>
    </div>
  );
}

export default App;
