import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from 'react-i18next';

function Type() {
  const { t } = useTranslation();
  return (
    <Typewriter
      options={{
        strings: [
          t('Type1'), 
           t('Type2'), //Building user-friendly web solutions for the modern world.
           t('Type3'),//Transform your vision into a stunning digital experience.
           t('Type4'),//Unlock the potential of your business with a tailor-made website.
           t('Type5'),//Your online success starts with a website built for results.
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
