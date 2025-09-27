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
          
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              additionalImages={[PierrePapierCiseaux1, PierrePapierCiseaux2, PierrePapierCiseaux3, PierrePapierCiseaux4, PierrePapierCiseaux5, PierrePapierCiseaux6 , PierrePapierCiseaux7]} // لا توجد صور إضافية
              isBlog={false}
              title="✊✋✌️ Rock-Paper-Scissors Game"
              description="Step into a fun and fast-paced battle of Rock-Paper-Scissors!
              This simple game of chance and strategy pits you against the computer in a quick decision-making showdown.

              👥 How to Play:
              Choose rock (✊), paper (✋), or scissors (✌️).

              The computer makes a random choice.

              The winner is determined by the classic rules:

              Rock beats scissors

              Scissors beat paper

              Paper beats rock

              If both choose the same, it’s a draw.

              💡 Why play?
              It’s easy, fun, and perfect for all ages. Play to pass time, settle debates, or just challenge the computer for fun!"
              ghLink="https://github.com/Hiba7898/Pierre-Papier-Ciseaux.git"
              demoLink="https://pierre-papier-ciseaux-weld.vercel.app/"
            />
          </Col>

         
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              additionalImages={[tictactoe1, tictactoe2, tictactoe3]}
              isBlog={false}
              title="🎮 Tic-Tac-Toe Game"
              description="Welcome to the timeless classic — Tic-Tac-Toe!
              This is a 2-player strategy game played on a 3x3 grid. The goal is simple: be the first to align three of your symbols (❌ or ⭕) either horizontally, vertically, or diagonally.

              👥 How to Play:
              Two players take turns placing their symbol (X or O) in an empty square.

              The first to get three in a row wins.

              If all squares are filled with no winner, it’s a draw.

              💡 Why play?
              Tic-Tac-Toe is quick, fun, and great for sharpening your logical thinking. Whether you're competing with a friend or challenging yourself, it’s a perfect brain break!"
              ghLink="https://github.com/Hiba7898/Tic-Tac-Toe.git"
              demoLink="https://tic-tac-toe-wine-seven-34.vercel.app/"
            />
          </Col>

          
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              additionalImages={[editorScreenshot1, editorScreenshot2, editorScreenshot3,editorScreenshot4,editorScreenshot5,editorScreenshot6]} // 3 صور إضافية
              isBlog={false}
              title="🔄 Interactive Unit Converter"
              description="This interactive unit converter was designed to make it easy and intuitive to switch between different measurement units across multiple categories. Whether you're working on science, travel, finance, or everyday tasks, this tool helps you convert values quickly and accurately.
              📂 Categories Included:
                Length (e.g., meters, kilometers, miles)

                Weight (e.g., grams, kilograms, pounds)

                Currency (e.g., USD, EUR, MAD) (real-time rates may vary)

                Temperature (Celsius, Fahrenheit, Kelvin)

                Time (seconds, minutes, hours, days)

                🧭 How to Use:
                Select a conversion category using the tabs at the top.

                Enter a value and choose the input/output units.

                Instantly view the result, along with a visual or contextual explanation.

                💡 Why use it?
                This tool is ideal for students, professionals, and travelers. It offers a clear, interactive way to understand relationships between units and ensures that you never make a miscalculation again."
              ghLink="https://github.com/Hiba7898/convertisseur-unites.git"
              demoLink="https://convertisseur-unites-snowy.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={BaseHtml1}
              additionalImages={[ BaseHtml2, BaseHtml3, BaseHtml4, BaseHtml5, BaseHtml6 , BaseHtml7 , BaseHtml9]} // لا توجد صور إضافية
              isBlog={false}
              title="Bases-html-pour-les-d-butants"
              description="منصة تعليمية حديثة لتعلم أساسيات تطوير الويب باللغة العربية
              . الصفر HTML موقع تعليمي تفاعلي مصمم خصيصاً للمبتدئين العرب الراغبين في تعلم
              .يجمع الموقع بين التعليم النظري والتطبيق العملي في بيئة سهلة الاستخدام
              "
              ghLink="https://github.com/Hiba7898/Bases-HTML-pour-les-d-butants.git"
              demoLink="https://bases-html-pour-les-d-butants.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={HORLOGE1}
              additionalImages={[ HORLOGE6 ,HORLOGE2, HORLOGE3 ,HORLOGE4 , HORLOGE5 ]} // لا توجد صور إضافية
              isBlog={false}
              title="Digital Clock Mini-Project"
              description="This project is a web-based digital clock built using HTML, CSS, and JavaScript.
               Its purpose is to demonstrate dynamic updates on a web page and client-side time handling.
              "
              ghLink="https://github.com/Hiba7898/horloge-numrique-mindev-studio.git"
              demoLink="https://mini-projet-une-horloge-num-rique-e.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={game1}
              additionalImages={[ game2 ,game3, game4 ,game5]} // لا توجد صور إضافية
              isBlog={false}
              title="moroccan-memory-game"
              description="Cultural Expl The game showcases various elements of Moroccan

                M Players can choose from three difficulty levels—Easy, Medium, and Hard—

                Multiplayer Mode: Engage in friendly competition with a second player in the multiplayer

                User-Friendly Interface: The game boasts a clean and intuitive design, ensuring a seamless experience for players of all ages.

                Responsive Design: Optimized for both desktop and mobile devices, allowing players to enjoy the game on various platforms.

                Whether you're looking to challenge your memory, learn about Moroccan culture, or simply have fun, the Moroccan Memory Game offers an engaging experience for everyone.
                              "
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