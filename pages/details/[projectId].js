import { projects } from "@/app/data";
import Link from "next/link";
import Image from "next/image";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

/* This function is used to generate the paths for all static pages at build time.
  It creates an array of paths by mapping over the projects array.
  Each path is an object with a params property, where projectId is set to the string representation of the project's ID.
*/
export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { projectId: String(project.id) },
  }));

  return { paths, fallback: false };
}
/* This function is responsible for fetching the data for a specific path at build time.
  It receives params as an argument, which contains the parameters for the current path.
  It converts the projectId parameter to an integer and uses it to find the corresponding project in the projects array.
*/
export async function getStaticProps({ params }) {
  const projectId = parseInt(params.projectId);
  const project = projects.find((project) => project.id === projectId);

  return {
    props: {
      project,
    },
  };
}

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
        delayChildren: 0.5,
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
      },
    },
  };

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
        className="w-100 lg:w-3/4 container mt-28 lg:mt-[200px] lg:mb-[150px] flex flex-col gap-10"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={projectVariants}
      >
        <div>
          {/* Link back to portfolio section */}
          <div className="mb-8">
            <Link
              href="/#portfolio"
              className="opacity-30 hover:opacity-100 hover:text-white p-0 text-center inline-flex items-center"
            >
              <ArrowLongLeftIcon className="h-6 w-6 inline-block me-3 p-0" />{" "}
              Portfolio
            </Link>
          </div>
          {/* Project title */}
          <h1 className="text-2xl lg:text-5xl mb-8">{project.title}</h1>
          {/* Project description */}
          <p className="text-xl leading-10 mb-7">{project.description}</p>
          {/* Tech stack */}
          <ul className="mt-2 flex flex-wrap">
            {project.stack.map((tech, index) => (
              <li
                key={index}
                className="mr-2 mb-2 opacity-30 hover:opacity-100 inline-flex transition duration-300 cursor-pointer"
              >
                #{tech}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={project.thumbnail}
          alt={"Projektin kansikuva"}
          width={1000}
          height={300}
          unoptimized={true}
          className="border border-gray-800 mt-10"
        />
        {/* Project key features */}
        <p className="text-xl leading-10 mt-7 mb-7">{project.features}</p>
        {/* Project images */}
        <div>{imageGrid}</div>
        {/* Project key features */}
        <p className="text-xl leading-10 mt-7">{project.conclusion}</p>
        {/* Project Demo and Github buttons */}
        <motion.div
          className="mt-10 flex justify-center gap-5"
          variants={gridVariants}
        >
          {/* If project demo doesn't exist link is disabled */}
          {project.demo ? (
            <Link
              href={project.demo}
              target="_blank"
              className="text-lg"
            >
              Demo
            </Link>
          ) : (
            <p className="text-lg opacity-50">Demo</p>
          )}
          <Link
            href={project.github}
            target="_blank"
            className="text-lg"
          >
            Github
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
