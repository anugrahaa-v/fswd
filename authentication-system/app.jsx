import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    if (username === "" || password === "") {
      alert("All fields are required!");
    } 
    else if (username === "admin" && password === "1234") {
      setLoggedIn(true);
    } 
    else {
      alert("Invalid username or password");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {!loggedIn ? (
        <>
          <h2>Login</h2>

          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br /><br />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />

          <button onClick={login}>Login</button>
        </>
      ) : (
        <h2>Login Successful! Welcome {username}</h2>
      )}
    </div>
  );
}

export default App;
