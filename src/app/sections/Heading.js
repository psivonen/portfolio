"use client";
import { motion } from "framer-motion";

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
        duration: 0.8,
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
          <p className="text-2xl lg:text-5xl lg:leading-12 break-words">
            Hei, olen <span className="text-white">Petra Sivonen</span>. Olen
            motivoitunut ja oma-aloitteisella asenteella varustettu koodarin
            alku, jolta löytyy intohimoa kiinnostavien ja{" "}
            <span className="text-white">
              käyttäjäystävällisten digitaalisten palveluiden
            </span>{" "}
            luomiseen. Olen valmis ottamaan haasteet vastaan, jatkuvasti
            kehittyvässä digitaalisessa maailmassa.
          </p>
          <div className="flex justify-start gap-7 pt-5 lg:text-lg">
            <a
              href="https://github.com/psivonen"
              target="_blank"
              className="link-underline"
            >
              Github
            </a>
            <a
              href="https://www.instagram.com/petrasivonen/"
              target="_blank"
              className="link-underline"
            >
              Instagram
            </a>
            <a
              href="https://www.behance.net/petrasivonen"
              target="_blank"
              className="link-underline"
            >
              Bēhance
            </a>
          </div>
        </div>
      </motion.header>
    </div>
  );
}
