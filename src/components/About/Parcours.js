import React from "react";
import { useTranslation } from "react-i18next";
import "./Parcours.css";

const entries = [
  {
    period: "parcours_p1_period",
    title: "parcours_p1_title",
    company: "parcours_p1_company",
    desc: "parcours_p1_desc",
    current: true,
  },
  {
    period: "parcours_p2_period",
    title: "parcours_p2_title",
    company: "parcours_p2_company",
    desc: "parcours_p2_desc",
    current: false,
  },
  {
    period: "parcours_p3_period",
    title: "parcours_p3_title",
    company: "parcours_p3_company",
    desc: "parcours_p3_desc",
    current: false,
  },
  {
    period: "parcours_p4_period",
    title: "parcours_p4_title",
    company: "parcours_p4_company",
    desc: "parcours_p4_desc",
    current: false,
  },
];

function Parcours() {
  const { t } = useTranslation();

  return (
    <section className="parcours-section">
      <div className="parcours-inner">
        <h2 className="parcours-heading">
          {t("parcours_heading1")}{" "}
          <em className="parcours-heading-accent">{t("parcours_heading2")}</em>{" "}
          {t("parcours_heading3")}
        </h2>

        <div className="parcours-timeline">
          {entries.map((entry, idx) => (
            <div className="parcours-entry" key={idx}>
              <div className="parcours-timeline-col">
                <div
                  className={`parcours-dot ${entry.current ? "parcours-dot--current" : ""}`}
                />
                {idx < entries.length - 1 && <div className="parcours-line" />}
              </div>
              <div className="parcours-content">
                <span className="parcours-period">{t(entry.period)}</span>
                <h3 className="parcours-title">{t(entry.title)}</h3>
                <span className="parcours-company">{t(entry.company)}</span>
                <p className="parcours-desc">{t(entry.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Parcours;
