import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

// مثال على صور إضافية - في الواقع ستكون صور مختلفة
import editorScreenshot1 from "../../Assets/Projects/codeEditor.png";
import editorScreenshot2 from "../../Assets/Projects/codeEditor.png";
import editorScreenshot3 from "../../Assets/Projects/codeEditor.png";

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
              additionalImages={[editorScreenshot1, editorScreenshot2, editorScreenshot3]} // 3 صور إضافية
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor built with React.js. Online Editor which supports HTML, CSS, and JS code with instant view of website. Online markdown editor for building README file which supports GFM, Custom HTML tags with toolbar and instant preview. Both editors support auto save of work using Local Storage."
              ghLink="https://github.com/yourusername/editor-io"
              demoLink="https://editor-io-demo.com"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;