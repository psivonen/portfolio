"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const aboutVariants = {
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
    <div className="section-container w-full">
      <motion.div
        id="about"
        className="section grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-y-7 gap-x-10"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={aboutVariants}
      >
        <div className="lg:col-span-2">
          <h2 className="text-2xl lg:text-5xl mb-5">Minusta</h2>
          <p className="leading-8 lg:leading-10 lg:text-xl">
            Olen{" "}
            <span className="text-white">tietojenkäsittelyn tradenomi</span>,
            jolta löytyy ohjelmointi osaamista opiskelujen sekä omien projektien
            kautta. Olen visuaalinen ihminen, joten erityisesti olen painottunut{" "}
            <span className="text-white">front end</span> puoleen. Tuttuja
            juttuja ovat esimerkiksi HTML, CSS, JavaScript, React ja uusimpana
            Next.js. Koodaamisen lisäksi minulla on kokemusta{" "}
            <span className="text-white">UI/UX-suunnittelusta</span> ja{" "}
            <span className="text-white">palvelumuotoilusta</span>. Haluan
            kehittyä jatkuvasti, joten otan innolla{" "}
            <span className="text-white">uusia haasteita vastaan</span>.
            <br />
            <br />
            Vapaa ajalla käytän aikaa viherkasvieni parissa, harrastan
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
            width={400}
            height={400}
            unoptimized={true}
            className="object-cover aspect-square mt-5"
          />
        </div>
        <div>
          <a
            href="/Petra-Sivonen-CV.pdf"
            target="_blank"
            className="link-underline text-white lg:text-xl"
          >
            Lataa CV
          </a>
        </div>
      </motion.div>
    </div>
  );
}
