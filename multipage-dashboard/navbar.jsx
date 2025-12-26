import { Link } from "react-router-dom";

function Navbar() {

return (

<nav style={{ padding: "10px", background: "#222" }}>

<Link to="/" style={{ color: "white", margin: "10px" }}>Home</Link>

<Link to="/profile" style={{ color: "white", margin: "10px" }}>Profile</Link>

<Link to="/courses" style={{ color: "white", margin: "10px" }}>Courses</Link>

<Link to="/feedback" style={{ color: "white", margin: "10px" }}>Feedback</Link>

</nav>

);

}

export default Navbar;
