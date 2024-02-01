'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Contact() {

  const contactVariants = {
    hide: {
      opacity: 0,
      y: -50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="section-container contact">
      <motion.div
        id="contact"
        className="section flex flex-col items-center justify-center gap-5"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={contactVariants}
      >
      <h2 className="text-2xl lg:text-4xl">Ota yhteyttä</h2>
      <a href="mailto:petra.sivonen@gmail.com" className="contact-link text-lg lg:text-3xl">
        petra.sivonen@gmail.com
      </a>
      </motion.div>
    </div>
  );
}
