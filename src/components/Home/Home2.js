import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/prgrm.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <i>
                <b className="purple">Hiba Kandaoui , </b>
              </i>
              a full stack web developer skilled in both front-end and back-end technologies.
              <br />
              <br />
              I specialize in creating innovative websites and web applications.  &nbsp;
              <i>
                <b className="purple"> Welcome to my world of coding 💻 </b> and 
                creativity! 🎨
              </i>
              <br />
              <br />
              Proficient in languages such
               as <b className="purple">JavaScript, Php, Python </b> 
               I excel in both 
              <i> 
                <b className="purple">
                  {" "}
                  front-end and back-end
                </b>
                 
              </i> development .
              &nbsp;  Whether building dynamic server-side applications or working with frameworks like 
              <b className="purple">
                  {" "}
                  Laravel and React.
                </b> 
                I'm passionate about bringing ideas to life through code.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} style={{borderRadius: "200px"}} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Hiba7898"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Hiba7898"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Hiba7898"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Hiba7898"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;