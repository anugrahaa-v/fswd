import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    if (username === "" || role === "") {
      alert("Please enter username and select role");
      return;
    }
    setLoggedIn(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      {!loggedIn ? (
        <>
          <h2>Login</h2>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br /><br />

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>

          <br /><br />
          <button onClick={login}>Login</button>
        </>
      ) : (
        <div>
          <h2>Welcome {username}!</h2>

          {role === "Admin" && <p>Redirected to Admin Dashboard</p>}
          {role === "Student" && <p>Redirected to Student Dashboard</p>}
          {role === "Teacher" && <p>Redirected to Teacher Dashboard</p>}
        </div>
      )}
    </div>
  );
}

export default App;
