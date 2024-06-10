import React from "react";
import HrCurve from "./HrCurve";
import hr from "../assets/curve-hr.svg";

const projectsData = [
  {
    name: "RoverApp",
    description:
      "A custom-built mobile app for Roverman Productions-the biggest drama production house in Ghana",
    technologies: ["React Native", "NativeWind", "Expo Router"],
    liveWebsiteURL: "https://play.google.com/store/apps/details?id=com.hyperpay.rovermanapp",
  },
  {
    name: "EazyEd",
    description: "An engaging e-learning platform for Ghanaian students",
    technologies: ["Serverless", "Node.js", "DynamoDB", "Docker"],
    liveWebsiteURL: "https://eazyed.org/",
  },
  {
    name: "Hyperpay GH",
    description: "Event ticketing and payment platform for Ghanaian events",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    liveWebsiteURL: "https://www.hyperpaygh.com/",
  },
  {
    name: "Roverman Events Ticketing",
    description: "Roverman Events Ticketing",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    liveWebsiteURL: "https://roverman.hyperpaygh.com/",
  },
  {
    name: "Hyper Conference Portal",
    description: "Conference registration, verification, and check-in portal",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    liveWebsiteURL: "https://conference.hyperpaygh.com/",
  },
  {
    name: "Tres-Sol Freight & Logistics",
    description: "Business website for Tres-Sol Freight & Logistics Company",
    technologies: ["WordPress", "Web Design"],
    liveWebsiteURL: "https://tres-solfreight.com/",
  },
];

const ProfessionalWork = () => {
  return (
    <div id="professional-work" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Professional Work</h1>
      <p className="font-light text-gray-400">
        Here are some of professional work
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        {projectsData.map((project, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-offset="100"
            className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4"
          >
            <div key={index} className="">
              <div className="bg-gray-800 p-4 rounded-lg shadow-md transition-transform hover:scale-105">
                <h2 className="text-xl font-semibold text-white">
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
                  className="mt-4 flex items-center text-gray-400 hover:text-blue-300 transition justify-center"
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
          </div>
        ))}
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
};

export default ProfessionalWork;
