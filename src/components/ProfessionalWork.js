import React from "react";
import HrCurve from "./HrCurve";
import hr from "../assets/curve-hr.svg"

const projectsData = [
  {
    name: "Hyperpay GH",
    description:
      "A short description of Project 1 A short description of Project 1",
    technologies: ["React", "Tailwind CSS", ],
    liveWebsiteURL: "https://example.com/project1",
  },
  {
    name: "Roverman Events Ticketing",
    description: "Roverman Events Ticketing",
    technologies: ["React", "Redux", "Express"],
    liveWebsiteURL: "https://example.com/project2",
  },
  {
    name: "GMM Electrical Solutions",
    description: "A short description of Project 1",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    liveWebsiteURL: "https://example.com/project1",
  },
  {
    name: "Project 2",
    description: "A short description of Project 2",
    technologies: ["React", "Redux", "Express"],
    liveWebsiteURL: "https://example.com/project2",
  },
  {
    name: "Project 1",
    description: "A short description of Project 1",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    liveWebsiteURL: "https://example.com/project1",
  },
  {
    name: "Project 2",
    description: "A short description of Project 2",
    technologies: ["React", "Redux", "Express"],
    liveWebsiteURL: "https://example.com/project2",
  },
  // Add more project data as needed
];

const ProfessionalWork = () => {
  return (
    <div className="flex flex-wrap justify-center mt-4">
      {/* <h1 className="text-2xl font-bold text-white">Professional Work</h1> */}
      {projectsData.map((project, index) => (
        <div key={index} className="m-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="bg-gray-900 p-4 rounded-lg shadow-md transition-transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-white">
              {project.name}
            </h2>
            <p className="text-gray-400">{project.description}</p>
            <div className="mt-2 space-y-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 mx-0.5 bg-gray-700 text-white text-sm rounded inline-block"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.liveWebsiteURL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center text-blue-400 hover:text-blue-300 transition justify-center"
            >
              View
              <svg
                className="ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
       <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
};

export default ProfessionalWork;
