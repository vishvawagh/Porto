import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", background: "#18181b", borderRadius: "16px", color: "#fff" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px", color: "#ff1744" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="vishvawagh"
        blockSize={15}
        blockMargin={5}
        color="#ff1744"
        fontSize={16}
        style={{ color: "#fff" }}
      />
    </Row>
  );
}

export default Github;
