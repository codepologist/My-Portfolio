import React from "react";
import { Helmet } from "react-helmet";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaCloudDownloadAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiBulma,
  SiTypescript,
  SiReact,SiTailwindcss, SiFirebase
} from "react-icons/si";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { GiDatabase } from "react-icons/gi";
import { about } from "../assets";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <section className={`section`}>
      <Helmet>
        <meta charset="UTF-8" />
        <title>About O'Neal Ombu | Frontend Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="author" content="O'Neal Ombu" />
        <meta
          name="description"
          content="Professional Frontend Web Developer with expertise in HTML, CSS, JavaScript, React and responsive design. Skilled in creating high-performance, user-friendly websites and web applications."
        />
        <meta
          name="keywords"
          content="frontend web developer, web development, HTML, CSS, JavaScript, React, frontend developer, react developer, responsive design"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="language" content="English" />
      </Helmet>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className={`scroll-progress-bar-motion`}
      ></motion.div>
      <div className={`container`}>
        <h1 className={`title ml-5`}>A little bit about O'Neal</h1>
        <div className={`columns is-multiline`}>
          <div className={`column is-one-third is-offset-1`}>
            <motion.figure
              className={`image`}
              initial={{ x: -300, scale: 0.5 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img src={about} alt="Software Engineer" />
            </motion.figure>
          </div>
          <div className={`column is-one-third is-offset-1`}>
            <div className={`content`}>
              <motion.p
                className={`sub-text`}
                initial={{ x: 200, scale: 0.1 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                I am a professional Frontend Engineer with experience building
                scalable and efficient client-side applications using React and
                other various frameworks.
              </motion.p>
              <motion.p
                className={`sub-text`}
                initial={{ x: 200, scale: 0.1 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                I have a deep understanding of the latest web technologies and
                their best practices. My experience ranges from small web
                applications to large-scale enterprise systems, and I have a
                track record of delivering high-quality software on time and on
                budget.
              </motion.p>
              <motion.p
                className={`sub-text`}
                initial={{ x: 200, scale: 0.1 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                My expertise includes responsive design, cross-browser
                compatibility, accessibility, and performance optimization. I am
                also experienced in agile development methodologies and have
                collaborated with cross-functional teams to deliver successful
                projects.
              </motion.p>
              <motion.p
                className={`sub-text`}
                initial={{ x: 200, scale: 0.1 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                I am always looking for new challenges and opportunities to
                expand my skill set. I am passionate about software development
                and excited to bring my expertise to any organization.
              </motion.p>
              <motion.p
                className={`sub-text`}
                initial={{ x: 200, scale: 0.1 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                My current tech stack includes{" "}
                <span className={`icon-text`}>
                  <span className={`icon-color has-text-weight-medium`}>
                    React
                  </span>
                  <span className={`icon`}>
                    <SiReact style={{ color: "#61dafb" }} />
                  </span>
                </span>
                <span className={`icon-text`}>
                  <span className={`icon-color has-text-weight-medium`}>
                    JavaScript
                  </span>
                  <span className={`icon`}>
                    <SiJavascript style={{ color: "#e4d04b" }} />
                  </span>
                </span>{" "}
                <span className={`icon-text`}>
                  <span className={`icon-color has-text-weight-medium`}>
                    {" "}
                    Sanity.io
                  </span>
                  <span className={`icon`}>
                    <GiDatabase style={{ color: "#5aaa46" }} />
                  </span>
                </span>{" "}
                <span className={`icon-text`}>
                  <span className={`icon-color has-text-weight-medium`}>
                    {" "}
                    Firebase
                  </span>
                  <span className={`icon`}>
                    <SiFirebase style={{ color: "#5aaa46" }} />
                  </span>
                </span>{" "}
                <span className={`icon-text`}>
                  <span className={`icon-color has-text-weight-medium`}>
                    {" "}
                    TailwindCss
                  </span>
                  <span className={`icon`}>
                    <SiTailwindcss style={{ color: "#61dafb" }} />
                  </span>
                </span>{" "}
                and{" "}
                <span className={`icon-text`}>
                  <span className={`icon-color has-text-weight-medium`}>
                    Bulma
                  </span>
                  <span className={`icon`}>
                    <SiBulma style={{ color: "#00d1b2" }} />
                  </span>
                </span>
              </motion.p>
              <motion.p
                className={`sub-text`}
                initial={{ x: 200, scale: 0.1 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                Currently assimilating{" "}
                <span className={`icon-text`}>
                  <span className={`icon-color has-text-weight-medium`}>
                    Next.js
                  </span>
                  <span className={`icon`}>
                    <TbBrandNextjs style={{ color: "#000000" }} />
                  </span>
                </span>{" "}
                <span className={`icon-text`}>
                  <span className={`icon-color has-text-weight-medium`}>
                    Node.js
                  </span>
                  <span className={`icon`}>
                    <FaNodeJs style={{ color: "#5aaa46" }} />
                  </span>
                </span>{" "}
                <span className={`icon-text`}>
                  <span className={`icon-color has-text-weight-medium`}>
                    TypeScript
                  </span>
                  <span className={`icon`}>
                    <SiTypescript style={{ color: "#2f74c0" }} />
                  </span>
                </span>{" "}
                <span className={`icon-text`}>
                  <span className={`icon-color has-text-weight-medium`}>
                    React Native
                  </span>
                  <span className={`icon`}>
                    <TbBrandReactNative style={{ color: "#5ed3f3" }} />
                  </span>
                </span>{" "}
                and{" "}
                <span className={`icon-text`}>
                  <span className={`icon-color has-text-weight-medium`}>
                    Supabase
                  </span>
                  <span className={`icon`}>
                    <GiDatabase style={{ color: "#5aaa46" }} />
                  </span>
                </span>
              </motion.p>
              <div className={`mt-5 mb-5`}>
                <a
                  href="https://drive.google.com/drive/folders/1IPPR-JsXEux0gYhdz_WRVGwQp2FG85Bt?usp=sharing"
                  className={`btn-custom`}
                  target={`_blank`}
                >
                  <span className={`icon-text`}>
                    <span>My CV (pdf 39.4kb)</span>
                    <span className={`icon`}>
                      <FaCloudDownloadAlt />
                    </span>
                  </span>
                </a>
              </div>
              <div
                className={`is-flex is-flex-direction-row is-justify-content-space-evenly`}
              >
                <motion.div
                  whileHover={{
                    scale: 2.0,
                    transition: { duration: 0.5 },
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/oneal-ombu/"
                    target={`_blank`}
                  >
                    <FaLinkedin
                      className={`icon-color`}
                      style={{ fontSize: "20px" }}
                    />
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 2.0,
                    transition: { duration: 0.5 },
                  }}
                >
                  <a
                    href="https://www.twitter.com/ONealOmbu"
                    target={`_blank`}
                  >
                    <FaTwitter
                      className={`icon-color`}
                      style={{ fontSize: "20px" }}
                    />
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 2.0,
                    transition: { duration: 0.5 },
                  }}
                >
                  <a href="https://www.github.com/React-Ruler" target={`_blank`}>
                    <FaGithub
                      className={`icon-color`}
                      style={{ fontSize: "20px" }}
                    />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
