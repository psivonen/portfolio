"use client";

import Image from "next/image";
import { useState } from "react";

export default function Portfolio() {
  const [projects, setProjects] = useState([1, 2, 3, 4, 5, 6]);

  const projectGrid = (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
    {/* The key={index} attribute is used to provide a unique identifier for each project in the mapping, using the index value. */}
      {projects.map((_, index) => (
        <div className="project" key={index}>
          <div className="h-min overflow-hidden">
          <Image
            src="/images/web-design.jpg"
            alt="web-design"
            width={400}
            height={300}
            className="hover:scale-125 transition duration-500 cursor-pointer hover:opacity-30"
          />
          </div>
          <div>
            <div>
              <p className="text-sm font-light mt-4">Web-ohjelmointi</p>
              <h3 className="text-lg mb-3 font-bold">Projektin nimi</h3>
            </div>
            <div>
              <p className="text-md font-light">
                The quick, brown fox jumps over a lazy dog. DJs flock by when MTV
                ax quiz prog. Junk MTV quiz graced by fox whelps.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="section-container z-10 w-full">
      <div
        id="portfolio"
        className="flex flex-col items-center justify-center gap-5"
      >
        <h2 className="text-2xl">Portfolio</h2>
        <div className="category flex gap-3 text-xs sm:text-sm">
          <a className="kaikki mb-3 link-underline">Kaikki</a>
          <a className="web-ohjelmointi mb-3">Web-ohjelmointi</a>
          <a className="ui-design mb-3">UI Design</a>
          <a className="kuvitukset mb-3">Kuvitukset</a>
        </div>
        {projectGrid}
      </div>
    </div>
  );
}
