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
        duration: 0.8,
      },
    },
  };
  // Portfolio elements appear one by one
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
        delayChildren: 0.5,
      },
    },
  };

  const projectGrid = (
    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2">
      {projects.map((project) => (
        <motion.div
          className="project"
          key={project.id}
          variants={gridVariants}
        >
          <Link href="/details/[id]" as={`details/${project.id}`}>
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.title}
                height={650}
                width={650}
                unoptimized={true}
                className="object-cover h-full transition ease-in-out duration-300 hover:scale-105"
              />
            </div>
            <div className="mt-7">
              <h4 className="text-lg lg:text-xl transition ease-linear duration-200 hover:text-purple-500">
                {project.title}
              </h4>
              <p className="text-sm">{project.subtitle}</p>
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
        <h2 className="text-2xl lg:text-5xl">Portfolio</h2>
        <p className="mb-5 lg:w-1/3 text-sm lg:text-base">
          Pieni kokoelma omista koodaus projekteista. Näiden lisäksi{" "}
          <a
            href="https://www.behance.net/petrasivonen"
            target="_blank"
            className="text-white"
          >
            Bēhancesta
          </a>{" "}
          löytyy muita taidon näytteitä.
        </p>
        {projectGrid}
      </motion.div>
    </div>
  );
}
