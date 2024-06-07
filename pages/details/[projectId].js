import { projects } from "@/app/data";
import Link from "next/link";
import Image from "next/image";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

/* This function is used to generate the paths for all static pages.
  It creates an array of paths by mapping over the projects array.
  Each path is an object with a params property, where projectId is set to the string representation of the project's ID.
*/
export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { projectId: String(project.id) },
  }));

  return { paths, fallback: false };
}
/* This function is responsible for fetching the data for a specific path.
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

  // Project images
  const imageGrid = (
    <motion.div className="grid gap-10 grid-cols-1" variants={gridVariants}>
      {project.images.map((image, index) => (
        <div key={index}>
          <Image
            key={index}
            src={image}
            alt={`Kuva ${index}`}
            width={1000}
            height={300}
            unoptimized={true}
            className="border border-gray-800"
          />
        </div>
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
          <h2 className="text-3xl lg:text-5xl mb-8">{project.title}</h2>
          {/* Project description */}
          <p className="lg:text-xl leading-8 lg:leading-10 mb-7">
            {project.description}
          </p>
          {/* Tech stack */}
          <ul className="mt-2 flex flex-wrap leading-5">
            {project.stack.map((tech, index) => (
              <li
                key={index}
                className="mr-2 mb-2 opacity-30 hover:opacity-100 inline-flex transition duration-300 cursor-pointer text-sm lg:text-base"
              >
                #{tech}
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          variants={gridVariants}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Image
            src={project.thumbnail}
            alt={"Projektin kansikuva"}
            width={1000}
            height={300}
            unoptimized={true}
            className="border border-gray-800 mt-10"
          />
        </motion.div>
        {/* Project key features */}
        <motion.div
          className="mt-7 mb-7"
          variants={gridVariants}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h5 className="text-sm font-bold uppercase mb-1">
            Päätoiminnot
          </h5>
          <p className="lg:text-xl leading-8 lg:leading-10">
            {project.features}
          </p>
        </motion.div>
        {/* Project images */}
        <motion.div
          variants={gridVariants}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
        >
          {imageGrid}
        </motion.div>
        {/* Project conclusion */}
        <motion.div
          className="lg:mt-7"
          variants={gridVariants}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}>
        <h5 className="text-sm font-bold uppercase mb-1">
          Johtopäätökset
        </h5>
        <p
          className="lg:text-xl leading-8 lg:leading-10"
        >
          {project.conclusion}
        </p>
        </motion.div>
        {/* Project Demo and Github buttons */}
        <motion.div
          className="flex justify-start gap-5 mb-12 lg:mb-0"
          variants={gridVariants}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* If project demo doesn't exist the link is hidden */}
          {project.demo ? (
            <Link
              href={project.demo}
              target="_blank"
              className="text-lg link-underline"
            >
              Live demo
            </Link>
          ) : (
            <span className="hidden">Demo</span>
          )}
          <Link
            href={project.github}
            target="_blank"
            className="text-lg link-underline"
          >
            Github
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
