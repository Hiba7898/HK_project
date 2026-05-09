
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/prgrm.png";
import Tilt from "react-parallax-tilt";
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
      </Container>
    </Container>
  );
}
export default Home2;