import hr from "../assets/curve-hr.svg";
import ProjectCard from "./ProjectCard.js";

import netlyfe from "../assets/projects/netlyfe.gif"
import keeper from "../assets/projects/keeper.gif"
import portfolio from "../assets/projects/dev_portfolio.gif"

export default function Projects() {
  return (
    <div id="projects" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Projects</h1>
      <p className="font-light text-gray-400">
        I've applied my knowledge and skills in building these projects
      </p>

      <div className="flex flex-col md:flex-row mt-4 gap-5">
        <ProjectCard
          img={netlyfe}
          name="Netlyfe App"
          repoLink="https://github.com/bernie-dev-1/Netlyfe/tree/auth"
          desc="Web app for medical consultations and education on diseases"
        />
        <ProjectCard
          img={keeper}
          name="NoteKeeper"
          repoLink="https://github.com/richmond-gakpetor/keeper-app"
          desc="Need to write a note? Check out the Keeper app. Beatifully designed, excellent functionality!"
        />
        <ProjectCard
          img={portfolio}
          name="My Portfolio"
          repoLink="https://github.com/richmond-gakpetor/my-portfolio"
          desc="Here you'll find some of the projects I've worked on. Check it out!"
        />
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
