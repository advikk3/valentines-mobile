import React, { useState } from "react";
import "./jar.css";
import jarImage from "./jor.png"; // your jar image

// Paragraph messages
const paragraphs = [
  "You are amazing! Keep shining and never doubt yourself. Every day is a fresh start full of possibilities.",
  "Believe in yourself! You have the power to overcome challenges and make today incredible.",
  "Stay positive and keep smiling. Your energy can brighten the day of everyone around you.",
  "You are stronger than you think. Trust your journey, embrace every moment, and love yourself.",
  "Take a deep breath and relax. The world is full of opportunities, and you are ready for them.",
  "Sending you love and happiness! Remember, little steps every day lead to big achievements.",
  "No matter what happens today, you are important, loved, and capable of amazing things.",
  "Stay motivated! Keep your head up and your heart full of hope. Wonderful things are coming.",
];

const Jar = () => {
  const [message, setMessage] = useState(null);

  // Show a random paragraph
  const showRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    setMessage(paragraphs[randomIndex]);
  };

  return (
    <div className="jar-container">
      {/* Jar image */}
      <img
        src={jarImage}
        alt="Feel Better Jar"
        className="jar-image"
        onClick={showRandomMessage}
      />

      {/* Decorative chits inside jar */}
      <div className="chits-container">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className={`chit ${index % 2 === 0 ? "blue" : "red"}`}
            />
          ))}
      </div>

      {/* Pink sticky note */}
      {message && (
        <div className="sticky-note">
          <pre>{message}</pre>
          <button className="take-another" onClick={showRandomMessage}>
            Take another one
          </button>
        </div>
      )}
    </div>
  );
};

export default Jar;
