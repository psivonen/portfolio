"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

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
    <div className="section-container w-full">
        <motion.header
          className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-5"
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={introHeaderVariants}
        >
          <h1 className="font-bold">
            Petra
            <br />
            Sivonen
          </h1>
        <div>
          <p className="text-2xl leading-9 font-light">
            Olen motivoitunut ja oma-aloitteisella asenteella varustettu
            koodarin alku, jolta löytyy visuaalista näkemystä ja web-ohjelmointi
            osaamista opiskelujen sekä omien projektien kautta. Tavoitteena on
            päästä kehittymään ja oppimaan uutta inspiroivassa työympäristössä.
          </p>
          <div className="socials pt-3">
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
