"use client";
import { projects } from "../data";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <div className="gap-5 flex flex-col lg:flex-row flex-wrap">
        {projects.map((project) => (
          <motion.div className="project" key={project.id} variants={gridVariants}>
            <Link href="/details/[id]" as={`details/${(project.id)}`} className="hover:text-white">
            <div className="relative transition duration-300 flex-grow">
              <Image
                src={project.thumbnail}
                alt="web-design"
                width={590}
                height={700}
                unoptimized={true}
                className="object-cover aspect-[4/3]"
              />
            <div className="overlay cursor-pointer opacity-0 hover:opacity-100 hover:bg-indigo-950 hover:bg-opacity-75 duration-300 absolute inset-0 flex justify-center items-center flex-col">
              <div className="overlay-text text-center">
                <p className="text-sm font-light">{project.subtitle}</p>
                <h4 className="font-bold text-sm uppercase">{project.title}</h4>
              </div>
            </div>
            </div>
            </Link>
          </motion.div>
        ))}
    </div>
  );

  return (
    <div className="section-container w-full">
      <motion.div
        id="portfolio"
        className="section flex flex-col items-center justify-center gap-5"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={portfolioVariants}
      >
        <h2 className="text-2xl">Portfolio</h2>
        {projectGrid}
      </motion.div>
    </div>
  );
}
