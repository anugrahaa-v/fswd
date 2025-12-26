import { useState } from "react";

function App() {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Classroom Poll</h2>
      <p>Do you understand today’s class?</p>

      <button onClick={() => setYes(yes + 1)}>Yes</button>
      <span> {yes}</span>

      <br /><br />

      <button onClick={() => setNo(no + 1)}>No</button>
      <span> {no}</span>
    </div>
  );
}

export default App;
