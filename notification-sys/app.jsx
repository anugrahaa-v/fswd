import { useState } from "react";

function App() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const newNotification = "New notification at " + new Date().toLocaleTimeString();
    setNotifications([...notifications, newNotification]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard Notifications</h2>

      <button onClick={addNotification}>Add Notification</button>

      <hr />

      {notifications.length === 0 ? (
        <p>No notifications yet</p>
      ) : (
        <ul>
          {notifications.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
