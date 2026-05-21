import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const ReviewOutput = ({ review }) => {
  if (!review) {
    return (
      <div style={{
        flex: 1,
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#888",
        fontSize: "18px"
      }}>
        Your code review will appear here...
      </div>
    );
  }

  const parts = review.split("```");

  return (
    <div style={{
      flex: 1,
      padding: "20px",
      overflowY: "auto",
      borderLeft: "2px solid #333"
    }}>
      <h2>Review Result</h2>
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          const lines = part.split("\n");
          const language = lines[0] || "python";
          const code = lines.slice(1).join("\n");
          return (
            <SyntaxHighlighter
              key={index}
              language={language}
              style={vscDarkPlus}
            >
              {code}
            </SyntaxHighlighter>
          );
        }
        return (
          <p key={index} style={{
            whiteSpace: "pre-wrap",
            lineHeight: "1.6",
            color: "#ddd"
          }}>
            {part}
          </p>
        );
      })}
    </div>
  );
};

export default ReviewOutput;