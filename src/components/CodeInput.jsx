import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { reviewCode } from "../api";

const CodeInput = ({ onReviewComplete }) => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python");
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    if (!code.trim()) {
      alert("Please paste some code first!");
      return;
    }
    setLoading(true);
    try {
      const result = await reviewCode(code, language);
      onReviewComplete(result.review);
    } catch (error) {
      alert("Something went wrong. Is your backend running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ flex: 1, padding: "20px" }}>
      <h2>Paste Your Code</h2>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", fontSize: "14px" }}
      >
        <option value="python">Python</option>
        <option value="javascript">JavaScript</option>
        <option value="java">Java</option>
        <option value="c++">C++</option>
        <option value="c">C</option>
      </select>

      <Editor
        height="400px"
        language={language}
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
        options={{
          fontSize: 14,
          minimap: { enabled: false },
        }}
      />

      <button
        onClick={handleReview}
        disabled={loading}
        style={{
          marginTop: "15px",
          padding: "10px 30px",
          fontSize: "16px",
          backgroundColor: loading ? "#555" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Reviewing..." : "Review Code"}
      </button>
    </div>
  );
};

export default CodeInput;