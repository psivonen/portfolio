"use client";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function Contact() {
  // Framer Motion animation for main div
  const contactVariants = {
    hide: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
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
    <div className="contact w-full flex items-center">
      <motion.div
        id="contact"
        className="flex flex-col gap-10"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={contactVariants}
      >
        <div className="flex flex-col">
          <h4 className="lg:text-2xl">Ota yhteyttä</h4>
          <motion.div variants={itemVariants} className="flex gap-4">
            <a
              href="mailto:petra.sivonen@gmail.com"
              className="text-2xl md:text-5xl font-bold"
            >
              petra.sivonen@gmail.com
            </a>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex justify-start gap-5 lg:text-xl mt-8"
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
        </div>
      </motion.div>
    </div>
  );
}
