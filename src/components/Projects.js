import hr from "../assets/curve-hr.svg";
import ProjectCard from "./ProjectCard.js";

export default function Projects() {
  return (
    <div id="projects" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Projects</h1>
      <p className="font-light text-gray-400">
        I've applied my knowledge and skills in building these projects
      </p>

      <div className="flex flex-col md:flex-row mt-4 gap-5">
        <ProjectCard
          name="Uploading Soon..."
          issued="Dev-Richie"
          desc="MERN Stack"
        />
        <ProjectCard
          name="Uploading Soon..."
          issued="Dev-Richie"
          desc="MERN Stack"
        />
        <ProjectCard
          name="Uploading Soon..."
          issued="Dev-Richie"
          desc="MERN Stack"
        />
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
