import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Parmeshwar </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />I am B-Tech graduated from IIT Indore
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
{/* 
          <p style={{ color: "rgb(155 126 172)" }}>
            "Practice Make prefect !"{" "}
          </p>
          <footer className="blockquote-footer">Parmeshwar</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
