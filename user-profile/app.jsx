import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name === "" || email === "" || age === "") {
      alert("Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter a valid email address");
      return;
    }

    if (age < 1) {
      alert("Enter a valid age");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Profile</h2>

      {!submitted ? (
        <>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br /><br />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />

          <input
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br /><br />

          <button onClick={handleSubmit}>Save Profile</button>
        </>
      ) : (
        <div>
          <h3>Profile Saved</h3>
          <p><b>Name:</b> {name}</p>
          <p><b>Email:</b> {email}</p>
          <p><b>Age:</b> {age}</p>
        </div>
      )}
    </div>
  );
}

export default App;
