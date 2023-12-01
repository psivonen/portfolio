"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Heading() {
  const introHeaderVariants = {
    hide: {
      opacity: 0,
      y: -200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="heading-container w-full lg:w-100">
        <motion.header
          className="flex flex-col lg:flex-row"
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={introHeaderVariants}
        >
          <div className="flex justify-center flex-col gap-5 lg:w-3/4">
          <h3 className="text-2xl">
            Hei, minä olen
          </h3>
          <h1 className="text-5xl lg:text-6xl font-bold">
            Petra Sivonen
          </h1>
          <p className="text-lg lg:text-xl font-light leading-8 lg:w-3/4">
          Olen motivoitunut ja oma-aloitteisella asenteella varustettu koodarin alku, 
          jolta löytyy visuaalista näkemystä ja web-ohjelmointi osaamista opiskelujen sekä
          omien projektien kautta.
          </p>
          <div className="flex justify-start gap-3 socials pb-8">
            <a
              href="https://github.com/psivonen"
              target="_blank"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
            <a
              href="https://www.instagram.com/petrasivonen/"
              target="_blank"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
          </div>
          </div>
        
        </motion.header>
    </div>
  );
}
