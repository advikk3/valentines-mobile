import React from "react";
import "./Letter.css";

const Letter = () => {
  const letterContent = [
    "My Dearest Love, 💖",
    "",
    "blah blah",
    "blah blah",
    "blah blah",
    "",
    "blah blah",
    "blah blah",
    "blah blah",
    "",
    "blah blah",
    "blah blah",
    "blah blah",
    "",
    "blah blah",
    "blah blah",
    "blah blah",
    "",
    "blah blah",
    "blah blah",
    "blah blah",
    "",
    "blah blah",
    "blah blah",
    "blah blah",
    "",
    "blah blah",
    "blah blah",
    "",
    "blah blah",
  ];

  return (
    <div className="letter-container">
      <div className="vintage-letter-paper">
        <div className="letter-content-area">
          <pre className="handwritten-text">
            {letterContent.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {"\n"}
              </React.Fragment>
            ))}
          </pre>
        </div>

        <div className="wax-seal">💌</div>
      </div>

      <div className="typing-hint">
        Happy Valentine's Day! ❤️
      </div>
    </div>
  );
};

export default Letter;
