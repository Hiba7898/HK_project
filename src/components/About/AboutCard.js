import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from 'react-i18next';


function AboutCard() {
  const { t } = useTranslation();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t('AboutCard1')}<span className="purple">{t('AboutCard2')}</span>
            {t('AboutDesc1')} 
            <br />
            <br />
            {t('AboutDesc2')}
            {t('AboutDesc3')}  
            <br />
            <br />
            {t('AboutJourney1')}
            {t('AboutJourney2')} 💻🚀
            <br />
            <br />
            {t('AboutJourney3')}
            {t('AboutCode1')}
            <br />
            <br />
            {t('AboutCode2')}
          </p>
          <footer className="blockquote-footer">HK</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
