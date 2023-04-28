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
          name="Top 10 SELEKNAS ASEAN Skills Competition ITNSA 2022"
          issued="KEMENAKER RI"
          desc="Linux Server, Windows Server, Linux Routing, Cisco Troubleshooting, Cisco Network Analysis, Network and System Programmabillity, Containerized Service."
        />
        <ProjectCard
          name="3rd Place Winner of IT Network System Administration - LKS Jawa Tengah"
          issued="KEMENDIKBUD RI"
          desc="Linux Server, Windows Server, Cisco Configuration, Cisco Troubleshooting, Network and System Programmabillity, Containerized Service."
        />
        <ProjectCard
          name="1st Place Winner of IT Network System Administration - LKS Kab. Tegal"
          issued="KEMENDIKBUD RI"
          desc="Linux Server, Cisco Configuration."
        />
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
