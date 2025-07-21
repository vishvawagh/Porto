import React from "react";
import Typewriter from "typewriter-effect";

const typewriterResponsiveStyle = {
  fontSize: '2.2em',
  fontWeight: 700,
  color: '#ff1744',
  textShadow: '0 0 8px #ff1744',
};

const styleTag = (
  <style>{`
    @media (max-width: 600px) {
      .typewriter-responsive {
        font-size: 1.2em !important;
      }
    }
  `}</style>
);

function Type() {
  return (
    <>
      {styleTag}
      <div className="typewriter-responsive" style={typewriterResponsiveStyle}>
        <Typewriter
          options={{
            strings: [
              "Software Developer",
              "LeetCoder",
              "MERN Stack Developer",
              "Quick Learner",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
    </>
  );
}

export default Type;
