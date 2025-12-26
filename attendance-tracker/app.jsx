import { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { name: "Anu", status: "Absent" },
    { name: "Ravi", status: "Absent" },
    { name: "Priya", status: "Absent" },
  ]);

  const markPresent = (index) => {
    const updated = [...students];
    updated[index].status = "Present";
    setStudents(updated);
  };

  const markAbsent = (index) => {
    const updated = [...students];
    updated[index].status = "Absent";
    setStudents(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Attendance Tracker</h2>

      {students.map((student, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <b>{student.name}</b> — Status: {student.status}
          <br />
          <button onClick={() => markPresent(index)}>Present</button>
          <button onClick={() => markAbsent(index)} style={{ marginLeft: "10px" }}>
            Absent
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
