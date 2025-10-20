


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
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
import BaseHtml8 from "../../Assets/Base_html/HTML8.png";
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

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('My Recent')} <strong className="purple"> {t('Works')} </strong>
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
      </Container>
    </Container>
  );
}

export default Projects;