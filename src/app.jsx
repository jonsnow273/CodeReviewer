import React, { useState } from "react";
import CodeInput from "./components/CodeInput";
import ReviewOutput from "./components/ReviewOutput";

const App = () => {
  const [review, setReview] = useState("");

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      backgroundColor: "#1e1e1e",
      color: "white",
      fontFamily: "monospace"
    }}>
      <CodeInput onReviewComplete={(result) => setReview(result)} />
      <ReviewOutput review={review} />
    </div>
  );
};

export default App;