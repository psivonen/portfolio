"use client";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function Heading() {
  // Framer Motion animation for main div
  const introHeaderVariants = {
    hide: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };
  // Framer Motion animation for children elements inside div
  const itemVariants = {
    hide: {
      opacity: 0,
      y: 50,
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
    <div className="w-full h-screen flex justify-center items-center flex-col lg:flex-row pt-52 lg:pt-20 pb-40 lg:pb-0">
      <motion.div
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={introHeaderVariants}
        className="flex justify-center flex-col gap-10"
      >
        <motion.h1
          className="text-5xl font-bold lg:text-8xl break-words"
          variants={itemVariants}
        >
          Hei, olen <span className="text-white">Petra Sivonen</span>,
          intohimoinen <span className="text-white">suunnittelija</span> ja{" "}
          <span className="text-white">kehittäjä</span>.
        </motion.h1>
        <motion.div
          className="flex justify-start gap-5 lg:text-xl"
          variants={itemVariants}
        >
          <a
            href="https://github.com/psivonen"
            target="_blank"
            className="link-underline flex items-center"
          >
            Github <ArrowRightIcon className="h-5 w-5 arrowAnimate" />
          </a>
          <a
            href="https://www.behance.net/petrasivonen"
            target="_blank"
            className="link-underline flex items-center"
          >
            Bēhance <ArrowRightIcon className="h-5 w-5 arrowAnimate" />
          </a>
          <a
            href="https://www.instagram.com/petrasivonen/"
            target="_blank"
            className="link-underline flex items-center"
          >
            Instagram <ArrowRightIcon className="h-5 w-5 arrowAnimate" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
