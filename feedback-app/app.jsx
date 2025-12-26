import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [list, setList] = useState([]);

  const submitFeedback = () => {
    if (name && feedback) {
      setList([...list, { name, feedback }]);
      setName("");
      setFeedback("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Feedback Form</h2>

      <input
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <textarea
        placeholder="Your Feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <br /><br />

      <button onClick={submitFeedback}>Submit</button>

      <h3>Feedback List</h3>
      {list.map((item, index) => (
        <p key={index}>
          <b>{item.name}:</b> {item.feedback}
        </p>
      ))}
    </div>
  );
}

export default App;
