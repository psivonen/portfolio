import { projects } from "@/app/data";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon, ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

export default function ProjectDetails({ project }) {

  const projectVariants = {
    hide: {
      opacity: 0,
      y: -50,
      transition: {
        staggerChildren: 1,
        staggerDirection: -1,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 1,
        staggerDirection: 1,
        delayChildren: 0.5
      },
    },
  };

  const gridVariants = {
    hide: {
      opacity: 0,
      y: -20,
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      } 
    },
  };

  if (!project) {
    return <div>Projektia ei löydy.</div>;
  }

  const imageGrid = (
    <motion.div className="grid gap-10 grid-cols-1" variants={projectVariants}>
      {project.images.map((image, index) => (
        <motion.div key={index} variants={gridVariants}>
          <Image
            key={index}
            src={image}
            alt={`Kuva ${index}`}
            width={1000}
            height={300}
            unoptimized={true}
            className="border border-gray-800"
          />
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <main className="main">
      <motion.div
        id="project"
        className="w-100 lg:w-3/4 container mt-28 lg:mt-[200px] lg:mb-[150px]"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={projectVariants}
      >
        <div className="mb-10">
          <Link href="/#portfolio" className="opacity-30 hover:opacity-100 hover:text-white p-0 text-center inline-flex items-center">
            <ArrowLongLeftIcon className="h-6 w-6 inline-block me-3 p-0"/> Portfolio
          </Link>
        </div>
        <h1 className="text-2xl lg:text-4xl mb-10">{project.title}</h1>
        <p className="text-lg leading-9 font-light mb-7">
          {project.description}
        </p>
        <ul className="mt-2 flex flex-wrap">
          {project.stack.map((tech, index) => (
            <li key={index} className="mr-2 mb-2 opacity-30 hover:opacity-100 inline-flex transition duration-300 cursor-pointer">
              #{tech}
            </li>
          ))}
        </ul>
        <div className="mt-40">{imageGrid}</div>
        <motion.div className="mt-10 flex justify-center gap-3" variants={gridVariants}>
          {/* If project demo exists display demo button, otherwise button is disabled */}
          {project.demo ? (
          <Link href={project.demo} target="_blank">
            <button type="button" className="inline-flex items-center transition duration-300 text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
              Demo <ArrowUpRightIcon className="h-5 w-5 inline-block"/>  
            </button>
          </Link>
          ) : (
            <button type="button" className="opacity-50 inline-flex items-center text-purple-700 border border-purple-70 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400" disabled>
              Demo <ArrowUpRightIcon className="h-5 w-5 inline-block"/>  
            </button>
          )}
          <Link href={project.github} target="_blank">
            <button type="button" className="inline-flex items-center transition duration-300 text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
              Github <ArrowUpRightIcon className="h-5 w-5 inline-block"/>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { projectId: String(project.id) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const projectId = parseInt(params.projectId);
  const project = projects.find((project) => project.id === projectId);

  return {
    props: {
      project,
    },
  };
}