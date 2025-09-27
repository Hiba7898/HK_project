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
          {/* <Col md={8} className="home-about-description"></Col> */}
            {/* <h1 style={{ 
              color: 'white', 
              fontSize: '2.5em', 
              fontWeight: '700', 
              marginBottom: '50px',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #c770f0 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {t('Our Main Services')}
            </h1> */}
            <h1 style={{ fontSize: "2.6em" }}>
               {t('Our Main')}<span className="purple"> {t('Services')} </span> 
            </h1>
            
            <div className="services-grid">
              {/* Site Web Vitrine */}
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
                <h3>Site Web Vitrine</h3>
                <p>Création de sites web élégants et professionnels pour présenter votre entreprise ou votre marque avec un design moderne et responsive.</p>
                <ul>
                  <li>Design responsive et mobile-first</li>
                  <li>Optimisation SEO intégrée</li>
                  <li>Interface utilisateur moderne</li>
                  <li>Performance optimisée</li>
                </ul>
              </div>

              {/* E-Commerce */}
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
                <h3>Site E-commerce</h3>
                <p>Développement de boutiques en ligne complètes avec gestion des produits, paiements sécurisés et tableau de bord administrateur.</p>
                <ul>
                  <li>Catalogue produits avancé</li>
                  <li>Intégration passerelles de paiement</li>
                  <li>Gestion des commandes et stock</li>
                  <li>Panneau d'administration</li>
                </ul>
              </div>

              {/* Front-End Development */}
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
                <h3>Développement Front-End</h3>
                <p>Création d'interfaces utilisateur interactives et responsives avec les dernières technologies web modernes.</p>
                <ul>
                  <li>HTML5, CSS3, JavaScript ES6+</li>
                  <li>React.js, Vue.js, Angular</li>
                  <li>Animations et effets dynamiques</li>
                  <li>Accessibilité et UX optimisée</li>
                </ul>
              </div>

              {/* Back-End Development */}
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
                <h3>Développement Back-End</h3>
                <p>Développement d'applications côté serveur robustes avec bases de données et APIs sécurisées.</p>
                <ul>
                  <li>Node.js, Express.js, PHP, Laravel</li>
                  <li>Bases de données SQL/NoSQL</li>
                  <li>APIs REST et GraphQL</li>
                  <li>Authentification et sécurité</li>
                </ul>
              </div>

              {/* Full-Stack Development */}
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
                <h3>Développement Full-Stack</h3>
                <p>Solutions complètes de A à Z, du front-end au back-end, avec déploiement sur plateformes cloud.</p>
                <ul>
                  <li>Applications web complètes</li>
                  <li>Intégration front-end/back-end</li>
                  <li>Déploiement cloud (AWS, Vercel, Netlify)</li>
                  <li>Architecture scalable</li>
                </ul>
              </div>

              {/* Web App Optimization */}
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
                <h3>Optimisation & Maintenance</h3>
                <p>Amélioration des performances, correction de bugs et mise à jour vers les standards modernes.</p>
                <ul>
                  <li>Optimisation des performances</li>
                  <li>Amélioration SEO</li>
                  <li>Correction de bugs</li>
                  <li>Refactorisation de code</li>
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
export default Home2;