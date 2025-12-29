import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div style={styles.container}>
        {/* Sidebar */}
        <nav style={styles.sidebar}>
          <h2 style={{ color: "white", marginBottom: "20px" }}>Student Dashboard</h2>
          <Link style={styles.link} to="/">Dashboard</Link>
          <Link style={styles.link} to="/profile">Profile</Link>
          <Link style={styles.link} to="/courses">Courses</Link>
          <Link style={styles.link} to="/grades">Grades</Link>
        </nav>

        {/* Main Content */}
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

/* Pages with more content */

function Dashboard() {
  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin.</p>
      <p>Here you can see your recent activities, notifications, and announcements.</p>
      <section>
        <h2>Announcements</h2>
        <ul>
          <li>Assignment 3 is due next Monday.</li>
          <li>New course materials have been uploaded.</li>
          <li>Campus will be closed on Friday.</li>
        </ul>
      </section>
      <section>
        <h2>Quick Links</h2>
        <ul>
          <li>Library</li>
          <li>Student Forum</li>
          <li>Exams Schedule</li>
        </ul>
      </section>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h1>Student Profile</h1>
      <p>Name: John Doe</p>
      <p>Roll Number: 12345</p>
      <p>Email: john.doe@example.com</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
      <p>Ut fringilla. Suspendisse potenti. Sed cursus ante dapibus diam.</p>
    </div>
  );
}

function Courses() {
  return (
    <div>
      <h1>My Courses</h1>
      <p>You are currently enrolled in the following courses:</p>
      <ul>
        <li>Mathematics</li>
        <li>Physics</li>
        <li>Chemistry</li>
        <li>English Literature</li>
      </ul>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales.</p>
    </div>
  );
}

function Grades() {
  return (
    <div>
      <h1>My Grades</h1>
      <p>Here is your latest grade report:</p>
      <ul>
        <li>Mathematics: A</li>
        <li>Physics: B+</li>
        <li>Chemistry: A-</li>
        <li>English Literature: B</li>
      </ul>
      <p>Keep working hard and aim for improvement in the next semester!</p>
    </div>
  );
}

/* Styles */
const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    background: "#f4f4f4",
  },
  sidebar: {
    width: "220px",
    background: "#2c3e50",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  link: {
    display: "block",
    color: "white",
    textDecoration: "none",
    marginBottom: "12px",
    padding: "8px",
    borderRadius: "4px",
    backgroundColor: "#34495e",
  },
  content: {
    flex: 1,
    padding: "30px",
  },
};

export default App;
