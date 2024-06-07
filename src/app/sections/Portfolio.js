"use client";
import { projects } from "../data";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";

export default function Portfolio() {
  // Add scroll-margin-top into section, so it doesn't do under navbar
  useEffect(() => {
    const handleResize = () => {
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection) {
        const navbarHeight = window.innerWidth >= 1024 ? 220 : 100; // Adjust values based on different screen sizes
        portfolioSection.style.scrollMarginTop = `${navbarHeight}px`;
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Framer Motion animation for main div
  const portfolioVariants = {
    hide: {
      opacity: 0,
      y: 50,
      transition: {
        staggerChildren: 0.3,
        staggerDirection: -1,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
        staggerDirection: 1,
      },
    },
  };
  // Framer Motion animation for children elements inside div
  const gridVariants = {
    hide: {
      opacity: 0,
      y: 50,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  // Display projects in a grid
  const projectGrid = (
    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2">
      {projects.map((project) => (
        <motion.div
          className="project"
          key={project.id}
          viewport={{ once: true }}
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
              <h3 className="text-lg lg:text-2xl font-medium transition ease-linear duration-200 hover:text-purple-500 mb-1 flex items-center">
                {project.title} <ArrowRightIcon className="h-7 w-7 arrowAnimate" />
              </h3>
              <p className="text-sm">{project.subtitle}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );

  return (
      <motion.div
        id="portfolio"
        className="flex flex-col gap-5"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={portfolioVariants}
      >
        <h2 className="text-4xl lg:text-5xl">Portfolio</h2>
        <p className="mb-5 text-sm lg:text-lg">
          Pieni kokoelma omista koodaus projekteista. <br/>
          Näiden lisäksi{" "}
          <a
            href="https://www.behance.net/petrasivonen"
            target="_blank"
            className="text-white"
          >
            Bēhancesta
          </a>{" "}
          löytyy muita taidon näytteitä.
        </p>
        {projectGrid} {/* Projects in a grid */}
      </motion.div>
  );
}
