import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineAndroid } from "react-icons/ai"
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiUnity,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < AiOutlineAndroid />
      </Col>
    </Row>
  );
}

export default Toolstack;
