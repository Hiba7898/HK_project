import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";



function Contact() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
            <h5>Contact us</h5>
   			<h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>I'd Love <strong className="purple">To Hear From You.</strong></h1>

            
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
 
  );
}

export default Contact;
