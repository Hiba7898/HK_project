/* import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/prgrm.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Home2() {
  const { t } = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               {t('LET ME')}<span className="purple"> {t('INTRODUCE')} </span> {t('MYSELF')} 
            </h1>
            <p className="home-about-body">
              <i>
                <b className="purple"> {t('Hiba Kandaoui')}</b>
              </i>
              {t('dv web')}

              <br />
              <br />
              {t('dv web2')}  &nbsp;
              <i>
                <b className="purple">{t('dv web3')}  </b>  {t('dv web4')} 
                
              </i>
              <br />
              <br />
               {t('dv web5')} 
                <b className="purple">{t('dv web6')} </b> 
                {t('dv web7')} 
              <i> 
                <b className="purple">
                  {" "}
                  {t('dv web8')} 
                </b>
                 
              </i> {t('dv web9')} 
              &nbsp;{t('dv web10')}    
              <b className="purple">
                  {" "}
                  {t('dv web11')}  
                </b> 
                {t('dv web12')}  
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
            <h1 style={{ fontSize: "2.6em" }}>
               {t('Our Main')}<span className="purple"> {t('Services')} </span> 
            </h1>
            
            <div className="services-grid">
            
              <div className="service-item">
                <div className="service-icon" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <i className="fas fa-globe" style={{ 
                    fontSize: '2.5em', 
                    color: '#c770f0',
                    display: 'inline-block',
                    padding: '20px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}></i>
                </div>
                <h3>{t('service1_title')}</h3>
                <p>{t('service1_desc')}</p>
                <ul>
                  <li>{t('service1_feat1')}</li>
                  <li>{t('service1_feat2')}</li>
                  <li>{t('service1_feat3')}</li>
                  <li>{t('service1_feat4')}</li>
                </ul>
              </div>

              <div className="service-item">
                <div className="service-icon" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <i className="fas fa-shopping-cart" style={{ 
                    fontSize: '2.5em', 
                    color: '#667eea',
                    display: 'inline-block',
                    padding: '20px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}></i>
                </div>
                <h3>{t('service2_title')}</h3>
                <p>{t('service2_desc')}</p>
                <ul>
                  <li>{t('service2_feat1')}</li>
                  <li>{t('service2_feat2')}</li>
                  <li>{t('service2_feat3')}</li>
                  <li>{t('service2_feat4')}</li>
                </ul>
              </div>

              <div className="service-item">
                <div className="service-icon" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <i className="fab fa-react" style={{ 
                    fontSize: '2.5em', 
                    color: '#36d1dc',
                    display: 'inline-block',
                    padding: '20px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}></i>
                </div>
                <h3>{t('service3_title')}</h3>
                <p>{t('service3_desc')}</p>
                <ul>
                  <li>{t('service3_feat1')}</li>
                  <li>{t('service3_feat2')}</li>
                  <li>{t('service3_feat3')}</li>
                  <li>{t('service3_feat4')}</li>
                </ul>
              </div>

       
              <div className="service-item">
                <div className="service-icon" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <i className="fas fa-server" style={{ 
                    fontSize: '2.5em', 
                    color: '#f093fb',
                    display: 'inline-block',
                    padding: '20px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}></i>
                </div>
                <h3>{t('service4_title')}</h3>
                <p>{t('service4_desc')}</p>
                <ul>
                  <li>{t('service4_feat1')}</li>
                  <li>{t('service4_feat2')}</li>
                  <li>{t('service4_feat3')}</li>
                  <li>{t('service4_feat4')}</li>
                </ul>
              </div>

          
              <div className="service-item">
                <div className="service-icon" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <i className="fas fa-layer-group" style={{ 
                    fontSize: '2.5em', 
                    color: '#ffecd2',
                    display: 'inline-block',
                    padding: '20px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}></i>
                </div>
                <h3>{t('service5_title')}</h3>
                <p>{t('service5_desc')}</p>
                <ul>
                  <li>{t('service5_feat1')}</li>
                  <li>{t('service5_feat2')}</li>
                  <li>{t('service5_feat3')}</li>
                  <li>{t('service5_feat4')}</li>
                </ul>
              </div>

           
              <div className="service-item">
                <div className="service-icon" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <i className="fas fa-tachometer-alt" style={{ 
                    fontSize: '2.5em', 
                    color: '#a8edea',
                    display: 'inline-block',
                    padding: '20px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}></i>
                </div>
                <h3>{t('service6_title')}</h3>
                <p>{t('service6_desc')}</p>
                <ul>
                  <li>{t('service6_feat1')}</li>
                  <li>{t('service6_feat2')}</li>
                  <li>{t('service6_feat3')}</li>
                  <li>{t('service6_feat4')}</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t('FIND ME ON')}  </h1>
            <p>
               {t('Feel free to')}<span className="purple"> {t('connect')}</span> {t('with me')}
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
export default Home2; */


























import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/prgrm.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Home2() {
  const { t } = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               {t('LET ME')}<span className="purple"> {t('INTRODUCE')} </span> {t('MYSELF')} 
            </h1>
            <p className="home-about-body">
              <i>
                <b className="purple"> {t('Hiba Kandaoui')}</b>
              </i>
              {t('dv web')}

              <br />
              <br />
              {t('dv web2')}  &nbsp;
              <i>
                <b className="purple">{t('dv web3')}  </b>  {t('dv web4')} 
                
              </i>
              <br />
              <br />
               {t('dv web5')} 
                <b className="purple">{t('dv web6')} </b> 
                {t('dv web7')} 
              <i> 
                <b className="purple">
                  {" "}
                  {t('dv web8')} 
                </b>
                 
              </i> {t('dv web9')} 
              &nbsp;{t('dv web10')}    
              <b className="purple">
                  {" "}
                  {t('dv web11')}  
                </b> 
                {t('dv web12')}  
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} style={{borderRadius: "200px"}} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>

          {/* Section des réseaux sociaux intégrée dans le même Row */}
          <Col md={12} className="home-about-social">
            <h1>{t('FIND ME ON')}  </h1>
            <p>
               {t('Feel free to')}<span className="purple"> {t('connect')}</span> {t('with me')}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Hiba7898"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hiba-kandaoui"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/hiba_kandaoui"
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