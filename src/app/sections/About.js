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
        className="section grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={aboutVariants}
      >
        <div>
          <h2 className="text-2xl">Kuka olen?</h2>
          <Image
                src="Images/petra-sivonen.jpg"
                alt="Petra"
                width={150}
                height={150}
                unoptimized={true}
                className="object-cover aspect-square rounded-full mt-5"
              />
        </div>
        <div>
          <p className="leading-8 text-lg font-light">
            Olen koulutukseltani tietojenkäsittelyn tradenomi, jolta löytyy
            monipuolista ohjelmointi osaamista. Visuaalisena ihmisenä minua
            kiinnostaa eniten front end ohjelmointi, mutta back end osaamista
            löytyy myös. Aiempien opintojen kautta löytyy graafisen suunnittelun
            kokemusta. Olen tehokas tiimi työskentelijä, mutta kykenen myös
            itsenäiseen työskentelyyn, enkä pelkää ottaa vastuuta. Haluan
            kehittyä jatkuvasti, joten uuden oppiminen ei pelota, vaan innolla
            otan uusia haasteita vastaan.
            <br />
            <br />
            Vapaa ajalla käytän aikaa viherkasvieni parissa, harrastan
            valokuvausta sekä teen käsitöitä. Ottamiani valokuvia voi katsella{" "}
            <a
              href="https://www.instagram.com/petrasivonen/"
              target="_blank"
              className="link-underline"
            >
              Instagramissa
            </a>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
}
