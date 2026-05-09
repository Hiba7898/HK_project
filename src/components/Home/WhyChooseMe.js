import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ITEMS = [
  {
    key: "wcm1",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    color: "#c770f0",
  },
  {
    key: "wcm2",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm10 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
      </svg>
    ),
    color: "#00b4d8",
  },
  {
    key: "wcm3",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
      </svg>
    ),
    color: "#f4a261",
  },
  {
    key: "wcm4",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    color: "#2a9d8f",
  },
  {
    key: "wcm5",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zm0 4h4v6h-4zM6 7h5v5H6z"/>
      </svg>
    ),
    color: "#e76f51",
  },
];

function WhyChooseMe() {
  const { t } = useTranslation();

  return (
    <Container fluid className="wcm-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center wcm-header">
            <h1>
              {t("wcm_title")}{" "}
              <span className="purple">{t("wcm_title2")}</span>
            </h1>
            <p className="wcm-sub">{t("wcm_sub")}</p>
          </Col>
        </Row>

        <Row className="justify-content-center wcm-grid">
          {ITEMS.map(({ key, icon, color }) => (
            <Col key={key} lg={4} md={6} sm={12} className="wcm-col">
              <div className="wcm-card" style={{ "--wcm-color": color }}>
                <div
                  className="wcm-icon"
                  style={{ background: `${color}20`, border: `1.5px solid ${color}50` }}
                >
                  <span style={{ color }}>{icon}</span>
                </div>
                <h3 className="wcm-card__title">{t(`${key}_title`)}</h3>
                <p className="wcm-card__desc">{t(`${key}_desc`)}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default WhyChooseMe;
