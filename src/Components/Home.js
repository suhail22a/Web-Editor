import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import homeImg from "../Assets/hero-img.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Home() {
  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <Container className="text-center">
        <Row>
          <Col md={6}>
            <img src={homeImg} className="img-fluid mb-4" alt="main img" />
          </Col>
          <Col md={6}>
            <h2 className="text-yellow-400">Code Websites From Anywhere</h2>
            <p className="text-gray-300">
              With this online code editor, you can edit HTML, CSS, and JavaScript code with an instant live preview.
            </p>
            <Button className="btn" as={Link} to="/web">
              Web Editor
            </Button>

            <h2 className="text-yellow-400 mt-6">Generate README in Seconds</h2>
            <p className="text-gray-300">
              An online markdown editor with a custom toolbar to help you easily create your README files.
            </p>
            <Button className="btn" as={Link} to="/markdown">
              Markdown Editor
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
