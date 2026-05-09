import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

/* SVG icons — inline, no extra lib needed */
const IconWebApp = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z"/>
  </svg>
);

const IconSAP = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm10 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
  </svg>
);

const IconERP = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
  </svg>
);

const IconDashboard = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
  </svg>
);

const IconTools = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
  </svg>
);

const SERVICES = [
  { key: "svc1", icon: <IconWebApp />, color: "#c770f0" },
  { key: "svc2", icon: <IconSAP />,    color: "#00b4d8" },
  { key: "svc3", icon: <IconERP />,    color: "#f4a261" },
  { key: "svc4", icon: <IconDashboard />, color: "#2a9d8f" },
  { key: "svc5", icon: <IconTools />,  color: "#e76f51" },
];

function ServiceCard({ svc, color, icon }) {
  const { t } = useTranslation();
  return (
    <div className="svc-card">
      <div className="svc-card__icon" style={{ background: `${color}1a`, border: `1.5px solid ${color}55` }}>
        <span style={{ color }}>{icon}</span>
      </div>
      <h3 className="svc-card__title">{t(`${svc}_title`)}</h3>
      <p className="svc-card__desc">{t(`${svc}_desc`)}</p>

      <div className="svc-card__benefit">
        <span className="svc-benefit-check">✅</span>
        <div>
          <span className="svc-benefit-label">{t("svc_benefit_label")} :</span>
          <p className="svc-benefit-text">{t(`${svc}_benefit`)}</p>
        </div>
      </div>

      <p className="svc-card__tech">{t(`${svc}_tech`)}</p>
    </div>
  );
}

function Services() {
  const { t } = useTranslation();

  return (
    <Container fluid className="svc-section" id="services">
      <Container>
        {/* Section header */}
        <Row className="justify-content-center">
          <Col md={8} className="text-center svc-header">
            <h1>
              {t("svc_section_title")}{" "}
              <span className="purple">{t("svc_section_title2")}</span>
            </h1>
            <p className="svc-section-sub">{t("svc_section_sub")}</p>
          </Col>
        </Row>

        {/* Cards grid */}
        <Row className="justify-content-center svc-grid">
          {SERVICES.map(({ key, icon, color }) => (
            <Col key={key} lg={4} md={6} sm={12} className="svc-col">
              <ServiceCard svc={key} icon={icon} color={color} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Services;
