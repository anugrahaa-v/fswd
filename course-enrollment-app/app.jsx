import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [enrollments, setEnrollments] = useState([]);

  const enrollStudent = () => {
    if (name === "" || course === "") return;

    setEnrollments([...enrollments, { name, course }]);
    setName("");
    setCourse("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Course Enrollment Form</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Course Name"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <br /><br />

      <button onClick={enrollStudent}>Enroll</button>

      <hr />

      <h3>Enrolled Students</h3>

      {enrollments.map((item, index) => (
        <p key={index}>
          <b>{item.name}</b> enrolled in <i>{item.course}</i>
        </p>
      ))}
    </div>
  );
}

export default App;
