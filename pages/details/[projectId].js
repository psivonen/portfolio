import { projects } from "@/app/data";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon, ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

export default function ProjectDetails({ project }) {

  const projectVariants = {
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

  if (!project) {
    return <div>Projektia ei löydy.</div>;
  }

  const imageGrid = (
    <div className="grid gap-10 grid-cols-1">
      {project.images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Kuva ${index}`}
          width={1000}
          height={300}
          unoptimized={true}
        />
      ))}
    </div>
  );

  return (
    <main className="main">
      <motion.div
        id="portfolio"
        className="w-100 lg:w-3/4 container mt-28"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={projectVariants}
      >
        <div className="mb-10">
          <Link href="/#portfolio" className="opacity-50 hover:opacity-100 hover:text-white p-0 text-center inline-flex items-center">
            <ArrowLongLeftIcon className="h-6 w-6 inline-block me-3 p-0"/> Portfolio
          </Link>
        </div>
        <h1 className="text-3xl mb-10">{project.title}</h1>
        <p className="text-lg leading-9 font-light mb-7">
          {project.description}
        </p>
        <ul className="mt-2 flex flex-wrap">
          {project.stack.map((tech, index) => (
            <li key={index} className="mr-2 mb-2 opacity-50 hover:opacity-100 inline-flex transition-all cursor-pointer">
              #{tech}
            </li>
          ))}
        </ul>
        <div className="mt-60">{imageGrid}</div>
        <div className="mt-10 flex justify-center gap-3">
          <button type="button" className="inline-flex items-center transition-all text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
             Demo <ArrowUpRightIcon className="h-5 w-5 inline-block"/>  
          </button>
          <Link href={project.github} target="_blank">
            <button type="button" className="inline-flex items-center transition-all text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
              Github <ArrowUpRightIcon className="h-5 w-5 inline-block"/>
            </button>
          </Link>
        </div>
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