import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function HomeSocial() {
  const { t } = useTranslation();
  return (
    <Container fluid className="home-about-section">
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t('FIND ME ON')}</h1>
            <p>
              {t('Feel free to')}<span className="purple"> {t('connect')}</span> {t('with me')}
            </p>
            <ul className="home2-about-social-links">
              <li className="social-icons2">
                <a
                  href="https://github.com/Hiba7898"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons2">
                <a
                  href="https://www.linkedin.com/in/hiba-kandaoui-432890260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons2">
                <a
                  href="https://www.instagram.com/mindevstudio?igsh=MXRodzV1OGdvN3E3Zw%3D%3D&utm_source=qr"
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

export default HomeSocial;
