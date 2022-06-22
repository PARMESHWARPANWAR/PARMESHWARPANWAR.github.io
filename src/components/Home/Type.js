import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ethusiastic Dev 🔴",
          "Full Stack Developre 💻",
          "MERN Stack Dev 😎",
          "Cross Platform v 🌐",
          "React/React Native Dev 📱",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
