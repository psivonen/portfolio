'use client'
import { motion } from "framer-motion";

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
    <div className="section-container w-100 z-10">
      <motion.div
        id="about"
        className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-3"
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={aboutVariants}
      >
        <div>
          <h2 className="text-2xl">Kuka olen?</h2>
        </div>
        <div>
          <p className="leading-8 font-extralight text-lg">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
            quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs
            grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
            vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.
            Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV
            quiz. How quickly daft jumping zebras vex. Two driven jocks help fax
            my big quiz.
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
