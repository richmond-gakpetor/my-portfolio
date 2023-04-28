import { useState } from "react";

import profile from "../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from "../assets/curve-hr.svg";

export default function Hero() {
  const [loaded, setLoaded] = useState(true);

  return (
    <>
      {loaded ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center">
          Loading...
        </div>
      ) : null}
      <div
        id="home"
        className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative"
      >
        <div className="md:w-3/6 md:p-4">
          <img
            data-aos="flip-right"
            data-aos-duration="1500"
            data-aos-offset="200"
            src={profile}
            alt="profile"
            onLoad={() => setLoaded(false)}
          />
        </div>
        <div
          className="md:w-3/6"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
        >
          <div className="flex flex-col w-full mt-8">
            <h1 className="text-xl text-gray-400">Hi, I'm</h1>
            <h1 className="text-2xl font-bold">Richmond Gakpetor</h1>
            <p class="text-xl font-bold text-gray-300">Full-stack Developer</p>
            <p className="text-md font-light text-gray-400 ">
              I'm a passionate developer with expertise in the MERN (MongoDB,
              Express.js, React.js, and Node.js) stack.
              <p>
                Having proven communication skills, I'm good at collaborating
                with cross-functional teams and clients to deliver exceptional
                projects within tight deadlines.
              </p>
              <p>
                I'm truly passionate about learning and do consume knowledge
                pretty fast too.
              </p>{" "}
              <p>
                I'm seeking to leverage my skills and experience to contribute
                to a dynamic and innovative team in a challenging and rewarding
                environment.
              </p>
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
            {/* <li>
                        <a href='https://instagram.com/damaasth' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                    </li> */}
            <li>
              <a
                href="htps://linkedin.com/richmond-gakpetor"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>
        <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
      </div>
    </>
  );
}
