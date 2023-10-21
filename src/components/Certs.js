import CertCard from "./CertCard.js";

import hr from "../assets/curve-hr.svg";
import agile from "../assets/certs/agile-scrum-master.png";
import cloud from "../assets/certs/cloud-computing.png";
import android from "../assets/certs/android.png";
import react from "../assets/certs/react.jpg";

export default function Certs() {
  return (
    <div id="certs" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Certifications</h1>
      <p className="font-light text-gray-400">
        Here are some of my Certifications
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        <CertCard
          name="React.js Essential Training"
          img={react}
          issued="LinkedIn Learning"
          date="Sep 2023"
        />
        <CertCard
          name="Agile Scrum Master"
          img={agile}
          issued="Simplilearn"
          date="Jan 2023"
        />
        <CertCard
          name="Intro to Cloud Computing"
          img={cloud}
          issued="Simplilearn"
          date="Jan 2023"
        />
        {/* <CertCard
          name="Android Development"
          img={android}
          issued="Google Developers"
          date="Mar 2023"
        /> */}
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
