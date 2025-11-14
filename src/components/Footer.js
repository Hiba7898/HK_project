import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import LogoMDS from "../Assets/Logo_MDS.jpeg";

function Footer() {
  const { t } = useTranslation();
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{t('Developed by Hiba Kandaoui')}</h3>
         
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} , ❤️ {t('kandaoui')}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Hiba7898"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://github.com/Hiba7898"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li> */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/hiba-kandaoui-432890260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/mindevstudio?igsh=MXRodzV1OGdvN3E3Zw%3D%3D&utm_source=qr"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
             <img 
            src={LogoMDS}
            alt="MinDev Studio" 
            style={{ 
              width: "20px", 
              height: "20px", 
              marginTop: "8Spx", 
              borderRadius: "50%",      // هذا باش يولي دائري
              objectFit: "cover"        // يحافظ على تناسق الصورة داخل الدائرة
            }} 
          />
          </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;