import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Vishvachaitanya Wagh</span> from <span className="purple">Pune, India</span>.<br />
            <br />
            I am a driven technologist and a relentless builder, always pushing the boundaries of what’s possible with code.<br />
            <br />
            Currently, I am pursuing my Bachelor’s in Computer Science at Dr. D.Y. Patil Institute Of Technology, Pimpri, Pune, where I sharpen my skills and fuel my ambition to lead in the tech world.<br />
            <br />
            My journey began with a Diploma in Computer Engineering at Government Polytechnic, MZR, where I laid a rock-solid foundation in core computing and problem-solving.<br />
            <br />
           
            <b>My mantra: Outwork, outlearn, and outperform—every single day.</b>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Conquering new coding challenges
            </li>
            <li className="about-activity">
              <ImPointRight /> Absorbing the latest in tech and innovation
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new places and perspectives
            </li>
          </ul>

          <p style={{ color: "#ff1744", fontWeight: 700 }}>
            "I don’t just code—I create impact."
          </p>
          <footer className="blockquote-footer">Vishva</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
