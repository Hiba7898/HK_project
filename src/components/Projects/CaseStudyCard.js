import { useTranslation } from "react-i18next";

/* ---- CSS Mockup sub-components ---- */

function MockupPointage({ color }) {
  const rows = [
    { name: "Ahmed K.", time: "08:00 – 17:00", status: "✓", ok: true },
    { name: "Sara M.",  time: "09:15 – 18:00", status: "✓", ok: true },
    { name: "Youssef B.", time: "08:30  +2h OT", status: "OT", ok: false },
  ];
  return (
    <div className="cs-mock cs-mock--pointage">
      <div className="cs-mock__topbar">
        <span className="cs-mock__dot" style={{ background: "#ff5f57" }} />
        <span className="cs-mock__dot" style={{ background: "#ffbd2e" }} />
        <span className="cs-mock__dot" style={{ background: "#28c940" }} />
        <span className="cs-mock__win-title">Pointage · Juillet 2024</span>
      </div>
      {rows.map((r, i) => (
        <div key={i} className="cs-mock__row">
          <span className="cs-mock__avatar" style={{ background: `${color}30`, color }}>{r.name[0]}</span>
          <span className="cs-mock__name">{r.name}</span>
          <span className="cs-mock__time">{r.time}</span>
          <span className="cs-mock__status" style={{ color: r.ok ? "#28c940" : color }}>{r.status}</span>
        </div>
      ))}
    </div>
  );
}

function MockupListing({ color }) {
  const cars = [
    { model: "BMW X5",         year: "2023", icon: "🚗" },
    { model: "Toyota Hilux",   year: "2022", icon: "🚙" },
    { model: "Mercedes C200",  year: "2024", icon: "🚘" },
  ];
  return (
    <div className="cs-mock cs-mock--listing">
      <div className="cs-mock__topbar">
        <span className="cs-mock__dot" style={{ background: "#ff5f57" }} />
        <span className="cs-mock__dot" style={{ background: "#ffbd2e" }} />
        <span className="cs-mock__dot" style={{ background: "#28c940" }} />
        <span className="cs-mock__win-title">Stock Véhicules · SAP B1</span>
      </div>
      <div className="cs-mock__search">
        <span style={{ opacity: 0.5 }}>🔍</span>
        <span className="cs-mock__search-placeholder">Rechercher véhicule...</span>
      </div>
      {cars.map((c, i) => (
        <div key={i} className="cs-mock__row">
          <span style={{ fontSize: "1rem" }}>{c.icon}</span>
          <span className="cs-mock__name">{c.model}</span>
          <span className="cs-mock__time">{c.year}</span>
          <span className="cs-mock__status" style={{ color }}>✓</span>
        </div>
      ))}
    </div>
  );
}

function MockupTracking({ color }) {
  const steps = ["Créé", "Départ", "Transit", "Arrivée"];
  const active = 2;
  return (
    <div className="cs-mock cs-mock--tracking">
      <div className="cs-mock__topbar">
        <span className="cs-mock__dot" style={{ background: "#ff5f57" }} />
        <span className="cs-mock__dot" style={{ background: "#ffbd2e" }} />
        <span className="cs-mock__dot" style={{ background: "#28c940" }} />
        <span className="cs-mock__win-title">Suivi Palettes · SAP</span>
      </div>
      <div className="cs-mock__pipeline">
        {steps.map((s, i) => (
          <div key={i} className="cs-mock__step">
            <div
              className="cs-mock__step-dot"
              style={{
                background: i <= active ? color : "rgba(255,255,255,0.12)",
                border: `2px solid ${i <= active ? color : "rgba(255,255,255,0.2)"}`,
              }}
            />
            {i < steps.length - 1 && (
              <div className="cs-mock__step-line" style={{ background: i < active ? color : "rgba(255,255,255,0.12)" }} />
            )}
            <span className="cs-mock__step-label" style={{ color: i <= active ? color : "rgba(255,255,255,0.35)" }}>{s}</span>
          </div>
        ))}
      </div>
      <div className="cs-mock__pal-row">
        <span className="cs-mock__pal-id" style={{ color }}>PAL-2024-087</span>
        <span className="cs-mock__pal-loc">→ Entrepôt B</span>
        <span className="cs-mock__pal-time">14:32</span>
      </div>
      <div className="cs-mock__pal-row">
        <span className="cs-mock__pal-id" style={{ color }}>PAL-2024-088</span>
        <span className="cs-mock__pal-loc">→ Entrepôt A</span>
        <span className="cs-mock__pal-time">09:15</span>
      </div>
    </div>
  );
}

function MockupRestaurant({ color }) {
  return (
    <div className="cs-mock cs-mock--restaurant">
      <div className="cs-mock__nav" style={{ borderBottom: `1px solid ${color}40` }}>
        <span className="cs-mock__logo" style={{ color }}>🍽 Le Jardin</span>
        <div className="cs-mock__nav-links">
          <span>Menu</span><span>Réserver</span><span>Contact</span>
        </div>
      </div>
      <div className="cs-mock__hero" style={{ background: `${color}18` }}>
        <div>
          <div className="cs-mock__line" style={{ width: "65%", background: color, height: 7, borderRadius: 4 }} />
          <div className="cs-mock__line" style={{ width: "45%", background: `${color}70`, height: 5, borderRadius: 4, marginTop: 6 }} />
        </div>
        <button className="cs-mock__btn" style={{ background: color }}>Réserver</button>
      </div>
      <div className="cs-mock__menu-grid">
        {[1, 2, 3].map(i => (
          <div key={i} className="cs-mock__menu-item" style={{ border: `1px solid ${color}25`, background: `${color}08` }}>
            <div style={{ height: 28, background: `${color}20`, borderRadius: 4 }} />
            <div className="cs-mock__line" style={{ width: "55%", background: `${color}45`, height: 4, borderRadius: 4, marginTop: 6 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function MockupAnalytics({ color }) {
  const bars = [55, 80, 42, 95, 60, 73];
  return (
    <div className="cs-mock cs-mock--analytics">
      <div className="cs-mock__topbar">
        <span className="cs-mock__dot" style={{ background: "#ff5f57" }} />
        <span className="cs-mock__dot" style={{ background: "#ffbd2e" }} />
        <span className="cs-mock__dot" style={{ background: "#28c940" }} />
        <span className="cs-mock__win-title">Analytics Dashboard</span>
      </div>
      <div className="cs-mock__kpi-row">
        {[["95K", "Revenue"], ["312", "Orders"], ["1.2K", "Clients"]].map(([v, k], i) => (
          <div key={i} className="cs-mock__kpi" style={{ background: `${color}10`, border: `1px solid ${color}30` }}>
            <span className="cs-mock__kpi-val" style={{ color }}>{v}</span>
            <span className="cs-mock__kpi-key">{k}</span>
          </div>
        ))}
      </div>
      <div className="cs-mock__chart">
        {bars.map((h, i) => (
          <div key={i} className="cs-mock__bar" style={{ height: `${h}%`, background: i === 3 ? color : `${color}55` }} />
        ))}
      </div>
    </div>
  );
}

/* ---- Mockup type map ---- */
const MOCKUP_MAP = {
  cs1: MockupPointage,
  cs2: MockupListing,
  cs3: MockupTracking,
  ps1: MockupRestaurant,
  ps2: MockupAnalytics,
};

/* ---- Main component ---- */
function CaseStudyCard({ icon, color, csKey, isPortfolio }) {
  const { t } = useTranslation();

  const features = [
    t(`${csKey}_f1`),
    t(`${csKey}_f2`),
    t(`${csKey}_f3`),
  ].filter((f) => f && !f.startsWith(`${csKey}_`));

  const MockupComponent = MOCKUP_MAP[csKey] || MockupPointage;

  const handleCTA = () => {
    if (isPortfolio) {
      window.open(
        "mailto:hibakandaoui083@gmail.com?subject=Portfolio%20Inquiry",
        "_blank"
      );
    } else {
      window.open("https://wa.me/212604570150", "_blank");
    }
  };

  return (
    <div className="cs-card" style={{ "--cs-color": color }}>

      {/* Visual mockup header */}
      <div className="cs-mockup-wrap">
        <MockupComponent color={color} />
      </div>

      {/* Domain badge + private indicator */}
      <div className="cs-meta-row">
        <span
          className="cs-domain-badge"
          style={{ background: `${color}20`, border: `1px solid ${color}50`, color }}
        >
          {t(`${csKey}_badge`)}
        </span>
        {!isPortfolio && (
          <span className="cs-private-pill">🔒 Confidential</span>
        )}
      </div>

      {/* Title */}
      <h3 className="cs-card__title">{t(`${csKey}_title`)}</h3>

      {/* Tech line */}
      <p className="cs-card__tech">{t(`${csKey}_tech`)}</p>

      {/* Tagline for portfolio samples */}
      {isPortfolio && (
        <p className="cs-tagline">✨ {t(`${csKey}_tagline`)}</p>
      )}

      {/* Features — max 3 */}
      <ul className="cs-features">
        {features.map((f, i) => (
          <li key={i}>
            <span className="cs-check" style={{ color }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      {/* Impact stat — case studies only */}
      {!isPortfolio && (
        <div
          className="cs-impact"
          style={{ background: `${color}12`, borderLeft: `3px solid ${color}` }}
        >
          <span className="cs-impact__icon">⚡</span>
          <span className="cs-impact__text">{t(`${csKey}_impact`)}</span>
        </div>
      )}

      {/* CTA button */}
      <button
        className="cs-cta-btn"
        onClick={handleCTA}
        style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}99 100%)` }}
      >
        {isPortfolio ? `✉  ${t("cs_cta_details")}` : `💬  ${t("cs_cta_contact")}`}
      </button>
    </div>
  );
}

export default CaseStudyCard;
