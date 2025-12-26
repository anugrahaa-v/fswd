import { useEffect } from "react";

function App() {
  useEffect(() => {
    alert("Welcome to Event Registration");

    const name = prompt("Enter your name:");
    const email = prompt("Enter your email:");
    const event = prompt(
      "Choose Event:\n1. Tech Talk\n2. Workshop\n3. Cultural Fest"
    );

    let eventName = "";

    if (event === "1") {
      eventName = "Tech Talk";
    } else if (event === "2") {
      eventName = "Workshop";
    } else if (event === "3") {
      eventName = "Cultural Fest";
    } else {
      alert("Invalid Event Selection");
      return;
    }

    const confirmReg = confirm(
      "Confirm Registration?\n\n" +
      "Name: " + name +
      "\nEmail: " + email +
      "\nEvent: " + eventName
    );

    if (confirmReg) {
      alert(
        "Registration Successful!\n\n" +
        "Thank you for registering for " + eventName
      );
    } else {
      alert("Registration Cancelled");
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Event Registration System</h2>
      <p>Follow the dialog boxes to complete registration.</p>
    </div>
  );
}

export default App;
