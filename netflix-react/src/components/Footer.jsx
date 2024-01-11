import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';

export default function Footer() {
  return (
    <Container>
      <Row className="text-center mt-5">
        <Col className="col-6 offset-3">
          <Row>
            <Col>
              <i class="fa fa-facebook footer-icon"></i>
              <i class="fa fa-instagram footer-icon"></i>
              <i class="fa fa-twitter footer-icon"></i>
              <i class="fa fa-youtube footer-icon"></i>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
            <Col>
              <Row>
                <Col className="col-12 footer-links">
                  <p>
                    <a href="#" alt="footer link">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Contact us
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="col-12 footer-links">
                  <p>
                    <a href="#" alt="footer link">
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Legal Notices
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="col-12 footer-links">
                  <p>
                    <a href="#" alt="footer link">
                    Help Center
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                    Jobs
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                    Cookie Preferences
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="col-12 footer-links">
                  <p>
                    <a href="#" alt="footer link">
                    Cookie Preferences
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                    Terms of Use
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                    Corporate Information
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 text-left mb-2">
                <Button className="btn-sm footer-button rounded-0 mt-3">
                    Service code
                </Button>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 text-left mb-2 mt-2 copyright">
            &copy; 1997-2022 Netflix, Inc.
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
