import React, { useState, useEffect } from "react";
import "./Hero.css";
import profilePic from "./assets/profilepic.jpg"; // check capitalization folder 'assets'

// Typewriter component
const Typewriter = ({ text = "", speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, displayedText, speed]);

  return (
    <span className="typewriter">
      {displayedText}
      <span className="cursor">|</span>
    </span>
  );
};
