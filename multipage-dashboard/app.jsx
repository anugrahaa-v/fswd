import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./Home";

import Profile from "./Profile";

import Courses from "./Courses";

import Feedback from "./Feedback";


function App() {

return (

<>

<Navbar />

<Routes>

<Route path="/" element={<Home />} />

<Route path="/profile" element={<Profile />} />

<Route path="/courses" element={<Courses />} />

<Route path="/feedback" element={<Feedback />} />

</Routes>

</>

);

}

export default App;
