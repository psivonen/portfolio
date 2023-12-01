'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Contact() {

  const contactVariants = {
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
    <div className="section-container">
      <motion.div
        id="contact"
        className="section flex flex-col items-center justify-center gap-5"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={contactVariants}
      >
      <h2 className="text-2xl">Ota yhteyttä</h2>
      <a href="mailto:petra.sivonen@gmail.com" className="contact-link text-lg">
        petra.sivonen@gmail.com
      </a>
      <div className="socials pt-3 flex justify-center gap-3">
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
      </motion.div>
    </div>
  );
}
