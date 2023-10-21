import { useState, useEffect } from "react";

import profile from "../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import hr from "../assets/curve-hr.svg";

export default function Hero() {
  const [loaded, setLoaded] = useState(true);

  // useEffect(() => {
  //   const navbarHeight = 68; 
  //   const hero = document.getElementById("home");
  //   if (hero) {
  //     hero.style.marginTop = `${navbarHeight}px`;
  //   }
  // }, []);

  return (
    <>
      {loaded ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center">
          Loading...
        </div>
      ) : null}
      <div
        id="about"
        className="flex w-full mt-4 flex-col md:flex-row gap-5 items-center justify-center text-white relative"
      >
        <div className="md:w-3/6 md:p-4">
          <img
            data-aos="flip-right"
            data-aos-duration="1500"
            data-aos-offset="200"
            src={profile}
            alt="profile"
            onLoad={() => setLoaded(false)}
            // className="w-full md:w-2/3 lg:w-1/2"
          />
        </div>
        <div
          className="md:w-3/6 mb-4"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
        >
          <div className="flex flex-col w-full mt-8">
            <h1 className="text-xl text-gray-400">Hi, I'm</h1>
            <h1 className="text-2xl font-bold">Richmond Gakpetor</h1>
            <p class="text-xl font-bold text-gray-300">Software Engineer</p>
            <p className="text-md font-light text-gray-400 ">
              I am a dedicated software developer with expertise in the MERN
              stack, boasting a proven ability to collaborate with
              cross-functional teams and clients to deliver outstanding
              projects. <br /> My passion for learning drives me to rapidly
              acquire knowledge. I am now seeking an opportunity to apply my
              skills and experience to a dynamic and innovative team within a
              challenging and rewarding environment. <br />
              Fun fact about me: I enjoy watching YouTube videos and have
              recently started creating content on my own channel,{" "}
              <a
                className=""
                href="https://www.youtube.com/@TechTrafficController"
              >
                <FontAwesomeIcon size="1x" icon={faYoutube} />
                Tech Traffic Controller
              </a>
              , to help individuals transition into the tech industry.
            </p>
          </div>

          <ul className="flex mt-2 gap-4 items-center">
            <li>
              <a
                href="https://github.com/richmond-gakpetor"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faGithub} />
              </a>
            </li>

            <li>
              <a
                href="htps://linkedin.com/richmond-gakpetor"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/_vision_richie"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faTwitter} />
              </a>
            </li>
          </ul>
        </div>
        <img src={hr} className="w-full mt-4 md:h-2 absolute bottom-0" alt="hr" />
      </div>
    </>
  );
}
