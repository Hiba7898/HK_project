import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer | Integrator",
          "Building user-friendly web solutions for the modern world.",
          "Transform your vision into a stunning digital experience.",
          "Unlock the potential of your business with a tailor-made website.",
          "Your online success starts with a website built for results.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
