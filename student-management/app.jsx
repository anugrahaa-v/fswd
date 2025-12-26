import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  const students = [
    { id: 1, name: "Anu", course: "Computer Science" },
    { id: 2, name: "Ravi", course: "Information Technology" },
    { id: 3, name: "Meena", course: "Data Science" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Management Dashboard</h2>

      {/* Navigation */}
      <button onClick={() => setPage("home")}>Home</button>{" "}
      <button onClick={() => setPage("students")}>Students</button>{" "}
      <button onClick={() => setPage("about")}>About</button>

      <hr />

      {/* Pages */}
      {page === "home" && (
        <div>
          <h3>Welcome</h3>
          <p>This is a simple student management dashboard.</p>
        </div>
      )}

      {page === "students" && (
        <div>
          <h3>Student List</h3>
          {students.map((s) => (
            <p key={s.id}>
              {s.name} - {s.course}
            </p>
          ))}
        </div>
      )}

      {page === "about" && (
        <div>
          <h3>About</h3>
          <p>This system helps manage student information easily.</p>
        </div>
      )}
    </div>
  );
}

export default App;
