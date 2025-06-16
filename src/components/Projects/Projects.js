import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Project_All/1.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

// مثال على صور إضافية - في الواقع ستكون صور مختلفة
import editorScreenshot1 from "../../Assets/Project_All/2.png";
import editorScreenshot2 from "../../Assets/Project_All/3.png";
import editorScreenshot3 from "../../Assets/Project_All/5.png";
import editorScreenshot4 from "../../Assets/Project_All/6.png";
import editorScreenshot5 from "../../Assets/Project_All/7.png";
import editorScreenshot6 from "../../Assets/Project_All/8.png";

import chatifyMobile from "../../Assets/Projects/codeEditor.png";
import chatifyDesktop from "../../Assets/Projects/codeEditor.png";

import blogHome from "../../Assets/Projects/codeEditor.png";
import blogPost from "../../Assets/Projects/codeEditor.png";
import blogDark from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* مشروع مع صورة واحدة فقط */}
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              additionalImages={[]} // لا توجد صور إضافية
              isBlog={false}
              title="Portfolio Entreprise"
              description="A comprehensive enterprise portfolio showcasing professional services and modern web development practices with responsive design."
              ghLink="https://github.com/yourusername/portfolio-enterprise"
              demoLink="https://portfolio-enterprise-demo.com"
            />
          </Col>

          {/* مشروع مع صور متعددة */}
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              additionalImages={[blogHome, blogPost, blogDark]} // 3 صور إضافية
              isBlog={false}
              title="Bits-of-Code"
              description="My personal blog page built with Next.js and Tailwind CSS which takes the content from markdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/yourusername/bits-of-code"
              demoLink="https://bits-of-code-demo.com"
            />
          </Col>

          {/* مشروع مع 4 صور */}
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              additionalImages={[editorScreenshot1, editorScreenshot2, editorScreenshot3,editorScreenshot4,editorScreenshot5,editorScreenshot6]} // 3 صور إضافية
              isBlog={false}
              title="convertisseur d'unités"
              description="Ce convertisseur d'unités interactif a été développé pour faciliter les conversions dans différentes catégories : longueur, poids, devises, température et temps.
              Utilisez les onglets pour naviguer entre les différentes catégories de conversion, et profitez des visualisations interactives pour mieux comprendre les rapports entre les unités."
              ghLink="https://github.com/Hiba7898/convertisseur-unites.git"
              demoLink="https://convertisseur-unites-snowy.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;