import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workshop, setWorkshop] = useState("");
  const [preview, setPreview] = useState(false);

  const submitForm = () => {
    if (!name || !email || !workshop) {
      alert("Please fill all fields");
      return;
    }
    setPreview(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Workshop Registration</h2>

      {!preview ? (
        <>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br /><br />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />

          <select
            value={workshop}
            onChange={(e) => setWorkshop(e.target.value)}
          >
            <option value="">Select Workshop</option>
            <option value="Web Development">Web Development</option>
            <option value="AI & ML">AI & ML</option>
            <option value="Cyber Security">Cyber Security</option>
          </select>

          <br /><br />
          <button onClick={submitForm}>Preview Registration</button>
        </>
      ) : (
        <div>
          <h3>Registration Preview</h3>
          <p><b>Name:</b> {name}</p>
          <p><b>Email:</b> {email}</p>
          <p><b>Workshop:</b> {workshop}</p>

          <button onClick={() => alert("Registration Successful!")}>
            Confirm Registration
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
