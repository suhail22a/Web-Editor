import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Importing icons

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center">
            <h5 className="footer-title">Connect with Me</h5>
            <div className="social-icons">
              <a href="https://github.com/suhail22a" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/suhail-ahmad-470816259/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
              </a>
              <a href="https://x.com/Suhail223sam" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} />
              </a>
            </div>
            <p className="footer-text">Made with ❤️ by Suhail</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
