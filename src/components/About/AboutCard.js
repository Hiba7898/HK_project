import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings! 👋 I'm <span className="purple"> a Full Stack web development </span>
            enthusiast driven by a deep curiosity to explore the limitless possibilities of technology.
            With a strong foundation in both front-end and back-end technologies, I dedicate myself to transforming concepts into immersive,
            user-centric digital experiences. Whether it's building intuitive interfaces or creating robust, scalable back-end architectures,
            my goal is always to blend creativity with functionality.
            <br />
            <br />
            My journey into programming began with a passion for problem-solving and a desire to bring ideas to life in the digital world.
            What started as curiosity has now grown into a commitment to crafting innovative, tangible solutions that have real-world impact. 💻🚀
            <br />
            <br />
            From developing dynamic websites to architecting complex web applications, 
            I thrive on the challenge of turning abstract ideas into powerful digital tools. 
            Every line of code is an opportunity to innovate, and every project is a chance to learn, grow, and push the boundaries of what's possible.
            <br />
            <br />
            I'm excited to continue exploring new technologies, honing my skills, and contributing to projects that inspire, engage, and make a difference.
          </p>
          <footer className="blockquote-footer">HK</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
