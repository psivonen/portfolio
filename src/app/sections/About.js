"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";

export default function About() {
  // Add scroll-margin-top into section, so it doesn't do under navbar
  useEffect(() => {
    const handleResize = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const navbarHeight = window.innerWidth >= 1024 ? 220 : 100; // Adjust values based on different screen sizes
        aboutSection.style.scrollMarginTop = `${navbarHeight}px`;
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Framer Motion animation for main div
  const aboutVariants = {
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
    <motion.div
      id="about"
      className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-y-7 gap-x-16"
      initial="hide"
      whileInView="show"
      viewport={{ once: true }}
      variants={aboutVariants}
    >
      <div className="lg:col-span-2">
        <motion.p
          className="uppercase section-button inline-block rounded-full py-2 px-5 mb-5"
          variants={itemVariants}
        >
          Minusta
        </motion.p>
        <motion.h2
          className="text-4xl lg:text-5xl mb-5"
          variants={itemVariants}
        >
          Rakastan luoda visuaalisesti upeita ja käyttäjäystävällisiä
          digitaalisia kokemuksia.
        </motion.h2>
        <motion.p className="lg:text-xl mb-5" variants={itemVariants}>
          Minulla on vankka perusta <span className="text-white">web-kehityksestä </span>
          sekä <span className="text-white">UI/UX-suunnittelusta</span>, ja pyrin yhdistämään tekniset taidot
          luoviin suunnittelu periaatteisiin houkuttelevien ja tehokkaiden
          palveluiden rakentamiseksi erilaisten käyttäjien tarpeisiin. 
          <br/>
          <br/>
          Olen <span className="text-white">omistautunut jatkuvaan oppimiseen</span> ja innokas <span className="text-white">ottamaan vastaan uusia
          haasteita</span>, jotta pysyn ajan tasalla alan viimeisimmistä trendeistä
          varmistaakseni, että taitoni ja tietoni ovat aina kärjessä.
        </motion.p>
        <motion.div className="m-0 flex items-start" variants={itemVariants}>
          <a
            href="/Petra-Sivonen-CV.pdf"
            target="_blank"
            className="link-underline text-white lg:text-xl flex items-center"
          >
            Lataa CV <ArrowRightIcon className="h-6 w-6 arrowAnimate" />
          </a>
        </motion.div>
      </div>
      <motion.div className="lg:col-span-1 m-auto" variants={itemVariants}>
        <Image
          src="/images/petra-sivonen.jpg"
          alt="Petra Sivonen"
          width={400}
          height={1000}
          className="object-cover mt-5 lg:mt-0"
        />
      </motion.div>
    </motion.div>
  );
}
