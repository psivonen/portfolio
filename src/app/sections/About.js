"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const aboutVariants = {
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
      <motion.div
        id="about"
        className="section grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-y-8"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={aboutVariants}
      >
        <div className="lg:col-span-2">
          <h2 className="text-2xl lg:text-4xl mb-5">Kuka olen?</h2>
          <p className="leading-8 font-light lg:leading-10 lg:text-xl">
            Olen koulutukseltani <span className="text-white">tietojenkäsittelyn tradenomi</span>, jolta löytyy
            monipuolista ohjelmointi osaamista. Visuaalisena ihmisenä minua
            kiinnostaa eniten <span className="text-white">front end</span> ohjelmointi, mutta back end osaamista
            löytyy myös. Aiempien opintojen kautta löytyy <span className="text-white">graafisen suunnittelun</span> kokemusta. 
            <br />
            <br />
            Olen tehokas tiimi työskentelijä, mutta kykenen myös
            itsenäiseen työskentelyyn, enkä pelkää ottaa vastuuta. Haluan
            kehittyä jatkuvasti, joten uuden oppiminen ei pelota, vaan innolla
            otan uusia haasteita vastaan. Vapaa ajalla käytän aikaa viherkasvieni parissa, harrastan
            valokuvausta sekä teen käsitöitä. Ottamiani valokuvia voi katsella{" "}
            <a
              href="https://www.instagram.com/petrasivonen/"
              target="_blank"
              className="link-underline text-white"
            >
              Instagramissa
            </a>
            .
          </p>
        </div>
        <div className="lg:col-span-1 m-auto">
          <Image
            src="Images/petra-sivonen.jpg"
            alt="Petra Sivonen"
            width={300}
            height={300}
            unoptimized={true}
            className="object-cover aspect-square mt-5"
          />
        </div>
        <div>
          <a
            href="/Petra-Sivonen-CV.pdf"
            target="_blank"
            className="link-underline text-white text-xl"
          >
            Ansioluettelo
          </a>
        </div>
      </motion.div>
    </div>
  );
}
