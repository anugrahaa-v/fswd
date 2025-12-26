import { useState } from "react";

function App() {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitFeedback = () => {
    if (rating === "" || comment === "") {
      alert("Please give rating and feedback");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      {!submitted ? (
        <>
          <h2>Student Feedback Form</h2>

          <label>Rating:</label><br />
          <select onChange={(e) => setRating(e.target.value)}>
            <option value="">Select Rating</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>

          <br /><br />

          <label>Comments:</label><br />
          <textarea
            rows="4"
            placeholder="Write your feedback"
            onChange={(e) => setComment(e.target.value)}
          ></textarea>

          <br /><br />
          <button onClick={submitFeedback}>Submit Feedback</button>
        </>
      ) : (
        <div>
          <h3>Thank You for Your Feedback!</h3>
          <p><b>Rating:</b> {rating}</p>
          <p><b>Comment:</b> {comment}</p>
        </div>
      )}
    </div>
  );
}

export default App;
