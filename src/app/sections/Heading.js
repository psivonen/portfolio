"use client";

import { motion } from "framer-motion";
//import Image from "next/image";

export default function Heading() {
  const introHeaderVariants = {
    hide: {
      opacity: 0,
      y: -50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <motion.header
        className="flex flex-col lg:flex-row"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={introHeaderVariants}
      >
        <div className="flex justify-center flex-col gap-5">
          <p className="text-2xl lg:text-6xl leading-10 break-words">
            Hei, olen <span className="text-white">Petra Sivonen</span>.
            Motivoitunut ja oma-aloitteisella asenteella varustettu koodarin
            alku, jolta löytyy{" "}
            <span className="text-white">visuaalista näkemystä</span> ja{" "}
            <span className="text-white">web-ohjelmointi</span> osaamista
            opiskelujen sekä omien projektien kautta.
          </p>
          <div className="flex justify-start gap-7 pt-5">
            <a
              href="https://github.com/psivonen"
              target="_blank"
              className="link-underline text-xl"
            >
              Github
            </a>
            <a
              href="https://www.instagram.com/petrasivonen/"
              target="_blank"
              className="link-underline text-xl"
            >
              Instagram
            </a>
            <a
              href="https://www.behance.net/petrasivonen"
              target="_blank"
              className="link-underline text-xl"
            >
              Bēhance
            </a>
          </div>
        </div>
      </motion.header>
    </div>
  );
}
