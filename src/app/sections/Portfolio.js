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
        delayChildren: 0.5
      },
    },
  };

  const projectGrid = (
    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2">
        {projects.map((project) => (
          <motion.div className="project" key={project.id} variants={gridVariants}>
            <Link href="/details/[id]" as={`details/${(project.id)}`}>
              <Image
                src={project.thumbnail}
                alt={project.title}
                height={400}
                width={650}
                unoptimized={true}
                className="object-cover aspect-[4/3] transition ease-linear duration-300 hover:scale-[1.02]"
              />
              <div className="mt-7">
                <p className="text-xs font-bold uppercase">{project.subtitle}</p>
                <h4 className="text-sm lg:text-lg font-bold transition ease-linear duration-200 hover:text-purple-500">{project.title}</h4>
                <p className="text-sm lg:text-base line-clamp-2 w-3/4">{project.description}</p>
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
        className="section flex flex-col gap-5"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={portfolioVariants}
      >
        <h2 className="text-2xl lg:text-4xl mb-10">Portfolio</h2>
        {projectGrid}
      </motion.div>
    </div>
  );
}
