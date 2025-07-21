import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFigma, FaGithub} from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiKalilinux,
  SiCanva,
  SiAndroidstudio,
  SiEclipseche,
} from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseche/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub/>
      </Col>
    </Row>
  );
}

export default Toolstack;
