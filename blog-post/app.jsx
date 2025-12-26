import { useState } from "react";

function App() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (comment === "") {
      alert("Please enter a comment");
      return;
    }
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Blog Post</h2>
      <p>
        This is a simple blog article. Users can read the content and post their
        comments below. Comments appear instantly.
      </p>

      <hr />

      <h3>Leave a Comment</h3>
      <textarea
        rows="3"
        style={{ width: "100%" }}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment..."
      ></textarea>

      <br /><br />
      <button onClick={addComment}>Post Comment</button>

      <hr />

      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((c, index) => (
          <div
            key={index}
            style={{
              background: "#f2f2f2",
              padding: "10px",
              marginBottom: "8px",
              borderRadius: "5px"
            }}
          >
            {c}
          </div>
        ))
      )}
    </div>
  );
}

export default App;
