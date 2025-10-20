import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import homeLogo from "../../Assets/homeimg.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Function to handle About navigation
  const handleAboutClick = () => {
    console.log("About button clicked!"); // للتأكد من أن الfunction تشتغل
    navigate('/about');
  };

  // Function to handle Contact email
  const handleContactClick = () => {
    console.log("Contact button clicked!"); // للتأكد من أن الfunction تشتغل
    const emailUrl = `mailto:hibakandaoui083@gmail.com?subject=${encodeURIComponent('Portfolio Inquiry')}&body=${encodeURIComponent('Hello Hiba,\n\nI saw your portfolio and I\'m interested in discussing a project.\n\nPlease let me know your availability.\n\nBest regards')}`;
    window.open(emailUrl, '_blank');
  };
  
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t('Welcome')}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                {t('im')}
                <strong className="main-name"> {t('nam')}</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              {/* New Buttons Section */}
              <div 
                className="home-buttons-container" 
                style={{ 
                  padding: "20px 50px", 
                  display: "flex", 
                  gap: "15px", 
                  flexWrap: "wrap"
                }}
              >
                {/* About Me Button */}
                <Button
                  variant="outline-light"
                  className="home-about-btn"
                  onClick={handleAboutClick}
                  style={{
                    borderRadius: "25px",
                    padding: "12px 30px",
                    fontWeight: "600",
                    fontSize: "1rem",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    color: "white",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                    textDecoration: "none"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.2)";
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.boxShadow = "0 8px 25px rgba(199, 112, 240, 0.3)";
                    e.target.style.borderColor = "rgba(199, 112, 240, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.1)";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
                  }}
                >
                  <i className="fas fa-user" style={{ fontSize: "0.9rem" }}></i>
                    {t('About me')}
                </Button>

                {/* Contact Me Button */}
                <Button
                  className="home-contact-btn"
                  onClick={handleContactClick}
                  style={{
                    borderRadius: "25px",
                    padding: "12px 30px",
                    fontWeight: "600",
                    fontSize: "1rem",
                    border: "none",
                    background: "linear-gradient(135deg, #c770f0 0%, #764ba2 100%)",
                    color: "white",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 4px 15px rgba(199, 112, 240, 0.3)",
                    cursor: "pointer",
                    textDecoration: "none"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "linear-gradient(135deg, #d87bfa 0%, #8a5bb8 100%)";
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.boxShadow = "0 8px 25px rgba(199, 112, 240, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "linear-gradient(135deg, #c770f0 0%, #764ba2 100%)";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 15px rgba(199, 112, 240, 0.3)";
                  }}
                >
                  <i className="fas fa-envelope" style={{ fontSize: "0.9rem" }}></i>
                   {t('Contact me')}
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius: "150px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;