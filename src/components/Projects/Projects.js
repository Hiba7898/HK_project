


import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CaseStudyCard from "./CaseStudyCard";
import editor from "../../Assets/convertisseur_d'unités/1.png";
import chatify from "../../Assets/tic-tac-toe/1.png";
import bitsOfCode from "../../Assets/Pierre-Papier-Ciseaux/4.png";

import editorScreenshot1 from "../../Assets/convertisseur_d'unités/2.png";
import editorScreenshot2 from "../../Assets/convertisseur_d'unités/3.png";
import editorScreenshot3 from "../../Assets/convertisseur_d'unités/5.png";
import editorScreenshot4 from "../../Assets/convertisseur_d'unités/6.png";
import editorScreenshot5 from "../../Assets/convertisseur_d'unités/7.png";
import editorScreenshot6 from "../../Assets/convertisseur_d'unités/8.png";

import tictactoe1 from "../../Assets/tic-tac-toe/1.png";
import tictactoe2 from "../../Assets/tic-tac-toe/2.png";
import tictactoe3 from "../../Assets/tic-tac-toe/3.png";

import PierrePapierCiseaux1 from "../../Assets/Pierre-Papier-Ciseaux/4.png";
import PierrePapierCiseaux2 from "../../Assets/Pierre-Papier-Ciseaux/5.png";
import PierrePapierCiseaux3 from "../../Assets/Pierre-Papier-Ciseaux/6.png";
import PierrePapierCiseaux4 from "../../Assets/Pierre-Papier-Ciseaux/7.png";
import PierrePapierCiseaux5 from "../../Assets/Pierre-Papier-Ciseaux/8.png";
import PierrePapierCiseaux6 from "../../Assets/Pierre-Papier-Ciseaux/9.png";
import PierrePapierCiseaux7 from "../../Assets/Pierre-Papier-Ciseaux/10.png";

import BaseHtml1 from "../../Assets/Base_html/HTML1.png";
import BaseHtml2 from "../../Assets/Base_html/HTML2.png";
import BaseHtml3 from "../../Assets/Base_html/HTML3.png";
import BaseHtml4 from "../../Assets/Base_html/HTML4.png";
import BaseHtml5 from "../../Assets/Base_html/HTML5.png";
import BaseHtml6 from "../../Assets/Base_html/HTML6.png";
import BaseHtml7 from "../../Assets/Base_html/HTML7.png";
/* import BaseHtml8 from "../../Assets/Base_html/HTML8.png"; */
import BaseHtml9 from "../../Assets/Base_html/HTML9.png";

import HORLOGE1 from "../../Assets/Horloge_Numirique/HORLOGE1.png";
import HORLOGE2 from "../../Assets/Horloge_Numirique/HORLOGE2.png";
import HORLOGE3 from "../../Assets/Horloge_Numirique/HORLOGE3.png";
import HORLOGE4 from "../../Assets/Horloge_Numirique/HORGLOGE4.png";
import HORLOGE5 from "../../Assets/Horloge_Numirique/HORLOGE5.png";
import HORLOGE6 from "../../Assets/Horloge_Numirique/HORLOGE6.png";

import game1 from "../../Assets/Morrocan_Game/1.png";
import game2 from "../../Assets/Morrocan_Game/2.png";
import game3 from "../../Assets/Morrocan_Game/3.png";
import game4 from "../../Assets/Morrocan_Game/3.png";
import game5 from "../../Assets/Morrocan_Game/game5.png";
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();
  
  // Helper function to build project descriptions
  const getRPSDescription = () => {
    return `${t('rps_desc1')}

${t('rps_howto')}
${t('rps_step1')}
${t('rps_step2')}
${t('rps_step3')}
- ${t('rps_rule1')}
- ${t('rps_rule2')}
- ${t('rps_rule3')}
${t('rps_draw')}

${t('rps_why')}
${t('rps_why_desc')}`;
  };

  const getTTTDescription = () => {
    return `${t('ttt_desc1')}

${t('ttt_howto')}
${t('ttt_step1')}
${t('ttt_step2')}
${t('ttt_step3')}

${t('ttt_why')}
${t('ttt_why_desc')}`;
  };

  const getConverterDescription = () => {
    return `${t('conv_desc1')}

${t('conv_categories')}
- ${t('conv_cat1')}
- ${t('conv_cat2')}
- ${t('conv_cat3')}
- ${t('conv_cat4')}
- ${t('conv_cat5')}

${t('conv_howto')}
${t('conv_step1')}
${t('conv_step2')}
${t('conv_step3')}

${t('conv_why')}
${t('conv_why_desc')}`;
  };

  const getHTMLDescription = () => {
    return `${t('html_desc1')}
${t('html_desc2')}
${t('html_desc3')}`;
  };

  const getClockDescription = () => {
    return `${t('clock_desc1')}
${t('clock_desc2')}`;
  };

  const getGameDescription = () => {
    return `${t('game_desc1')}
${t('game_desc2')}
${t('game_desc3')}
${t('game_desc4')}
${t('game_desc5')}
${t('game_desc6')}`;
  };

  /* Icons for case studies */
  const IconClock = () => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
    </svg>
  );
  const IconCar = () => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5zm-8-4H8v2h3v-2zm6 0h-3v2h3v-2z"/>
    </svg>
  );
  const IconBox = () => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
      <path d="M20 7l-8-4-8 4v10l8 4 8-4V7zm-8 11.54L5 15.09V8.46l7 3.5v6.58zm1-8.19L6.04 7 12 4.46 17.96 7 13 10.35zm7 5.74l-7 3.45V10.35l7-3.44v6.18z"/>
    </svg>
  );
  const IconRestaurant = () => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
      <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
    </svg>
  );
  const IconDashboard = () => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
    </svg>
  );

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>

        {/* ── Section 1: Personal Projects ── */}
        <h1 className="project-heading">
          {t('projects_personal_title')} <strong className="purple"> {t('projects_personal_title2')} </strong>
        </h1>
        <p style={{ color: "white" }}>
          {t("Here are a few projects I've worked on recently.")}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              additionalImages={[PierrePapierCiseaux1, PierrePapierCiseaux2, PierrePapierCiseaux3, PierrePapierCiseaux4, PierrePapierCiseaux5, PierrePapierCiseaux6, PierrePapierCiseaux7]}
              isBlog={false}
              title={t('rps_title')}
              description={getRPSDescription()}
              ghLink="https://github.com/Hiba7898/Pierre-Papier-Ciseaux.git"
              demoLink="https://pierre-papier-ciseaux-weld.vercel.app/"
            />
          </Col>
         
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              additionalImages={[tictactoe1, tictactoe2, tictactoe3]}
              isBlog={false}
              title={t('ttt_title')}
              description={getTTTDescription()}
              ghLink="https://github.com/Hiba7898/Tic-Tac-Toe.git"
              demoLink="https://tic-tac-toe-wine-seven-34.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              additionalImages={[editorScreenshot1, editorScreenshot2, editorScreenshot3, editorScreenshot4, editorScreenshot5, editorScreenshot6]}
              isBlog={false}
              title={t('conv_title')}
              description={getConverterDescription()}
              ghLink="https://github.com/Hiba7898/convertisseur-unites.git"
              demoLink="https://convertisseur-unites-snowy.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={BaseHtml1}
              additionalImages={[BaseHtml2, BaseHtml3, BaseHtml4, BaseHtml5, BaseHtml6, BaseHtml7, BaseHtml9]}
              isBlog={false}
              title={t('html_title')}
              description={getHTMLDescription()}
              ghLink="https://github.com/Hiba7898/Bases-HTML-pour-les-d-butants.git"
              demoLink="https://bases-html-pour-les-d-butants.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={HORLOGE1}
              additionalImages={[HORLOGE6, HORLOGE2, HORLOGE3, HORLOGE4, HORLOGE5]}
              isBlog={false}
              title={t('clock_title')}
              description={getClockDescription()}
              ghLink="https://github.com/Hiba7898/horloge-numrique-mindev-studio.git"
              demoLink="https://mini-projet-une-horloge-num-rique-e.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={game1}
              additionalImages={[game2, game3, game4, game5]}
              isBlog={false}
              title={t('game_title')}
              description={getGameDescription()}
              ghLink="https://github.com/Hiba7898/moroccan-memory-game.git"
              demoLink="https://moroccan-memory-game.vercel.app/"
            />
          </Col>

        </Row>

        {/* ── Section 2: Professional Case Studies ── */}
        <div className="projects-section-divider" />
        <h1 className="project-heading">
          {t('projects_case_title')} <strong className="purple"> {t('projects_case_title2')} </strong>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "40px" }}>
          {t("projects_case_sub")}
        </p>
        <Row style={{ justifyContent: "center", gap: "0" }}>

          <Col md={6} lg={4} className="project-card">
            <CaseStudyCard csKey="cs1" color="#c770f0" icon={<IconClock />} />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <CaseStudyCard csKey="cs2" color="#00b4d8" icon={<IconCar />} />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <CaseStudyCard csKey="cs3" color="#f4a261" icon={<IconBox />} />
          </Col>

        </Row>

        {/* ── Section 3: Portfolio Samples ── */}
        <div className="projects-section-divider" />
        <h1 className="project-heading">
          {t('projects_portfolio_title')} <strong className="purple"> {t('projects_portfolio_title2')} </strong>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "40px" }}>
          {t("projects_portfolio_sub")}
        </p>
        <Row style={{ justifyContent: "center" }}>

          <Col md={6} lg={4} className="project-card">
            <CaseStudyCard csKey="ps1" color="#2a9d8f" icon={<IconRestaurant />} isPortfolio />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <CaseStudyCard csKey="ps2" color="#e76f51" icon={<IconDashboard />} isPortfolio />
          </Col>

        </Row>

      </Container>
    </Container>
  );
}

export default Projects;