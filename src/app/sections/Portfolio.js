"use client";

import { projects } from "../data";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Portfolio() {
  const gridVariants = {
    hide: {
      opacity: 0,
    },
    show: { 
      opacity: 1,
      transition: {
        duration: 0.5,
      } 
    },
  };

  const portfolioVariants = {
    hide: {
      opacity: 0,
      y: -200,
      transition: {
        staggerChildren: 0.6,
        staggerDirection: -1,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.6,
        staggerDirection: 1,
      },
    },
  };

  const projectGrid = (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {/* The key={index} attribute is used to provide a unique identifier for each project in the mapping, using the index value. */}
        {projects.map((project) => (
          <motion.div className="project" key={project} variants={gridVariants}>
            <div className="overflow-hidden col-span-6 md:col-span-4 lg:col-span-3 aspect-video w-full relative rounded-2xl">
              <Image
                src={project.image}
                alt="web-design"
                width={600}
                height={600}
                className="hover:scale-125 transition duration-500 cursor-pointer hover:opacity-30 object-contain"
              />
            </div>
            <div>
              <div>
                <p className="text-sm font-light mt-4">{project.subtitle}</p>
                <h3 className="text-lg mb-3 font-bold">{project.title}</h3>
              </div>
              <div>
                <p className="text-md font-light">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
    </div>
  );

  return (
    <div className="section-container z-10 w-full">
      <motion.div
        id="portfolio"
        className="flex flex-col items-center justify-center gap-5"
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={portfolioVariants}
      >
        <h2 className="text-2xl">Portfolio</h2>
        <p className="leading-8 font-extralight text-lg text-center w-7/12 mb-5">
          The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
          quiz prog. Junk MTV quiz graced by fox whelps. Bright vixens jump;
          dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs
          blow, vexing daft Jim.
        </p>
        {projectGrid}
      </motion.div>
    </div>
  );
}
