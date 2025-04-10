import React from "react";
import { Helmet } from "react-helmet";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  project_1,
  project_2,
  project_3,
  project_4,
  project_5,
  project_6,
  project_7,
  project_8,
  project_9,
} from "../assets";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const ProjectList = [
    {
      id: 9,
      name: "Testo Fastfood Web App",
      imageUrl: project_9,
      text: "Live site",
      url: "https://testo-fastfood-app.vercel.app/",
      social: "GitHub",
      gitUrl: "https://github.com/codepologist/testo-fastfood-app.git",
    },
    {
      id: 1,
      name: "An eCommerce store for urban clothing",
      imageUrl: project_8,
      text: "Live site",
      url: "https://myfubu-store.vercel.app/",
      social: "GitHub",
      gitUrl: "https://github.com/codepologist/myfubu-store",
    },
    {
      id: 2,
      name: "An eCommerce app for ordering food",
      imageUrl: project_6,
      text: "Live site",
      url: "https://wingside-store.vercel.app/",
      social: "GitHub",
      gitUrl: "https://github.com/codepologist/wingside-store",
    },
    {
      id: 3,
      name: "HR Solutions for Distributed Teams",
      imageUrl: project_1,
      text: "Live site",
      url: "https://remote-clone.vercel.app/",
      social: "GitHub",
      gitUrl: "https://github.com/codepologist/Remote-Clone.git",
    },
    {
      id: 4,
      name: "E-commerce Food Delivery Portal",
      imageUrl: project_2,
      text: "Live site",
      url: "https://buymejollof.vercel.app/",
      social: "GitHub",
      gitUrl: "https://github.com/codepologist/buymejollof.git",
    },
    {
      id: 5,
      name: "E-commerce Market Place for Designers",
      imageUrl: project_3,
      text: "Live site",
      url: "https://dribbble-job-board.vercel.app/",
      social: "GitHub",
      gitUrl: "https://github.com/ombudev/dribbble-job-board.git",
    },
    {
      id: 6,
      name: "Elementary School Application Portal",
      imageUrl: project_4,
      text: "Live site",
      url: "https://elevo.vercel.app/",
      social: "GitHub",
      gitUrl: "https://github.com/codepologist/elevo.git",
    },
    {
      id: 7,
      name: "Gaming Portal",
      imageUrl: project_5,
      text: "Live site",
      url: "https://loop-studios-gules.vercel.app/",
      social: "GitHub",
      gitUrl: "https://github.com/codepologist/loop-studios.git",
    },

    {
      id: 8,
      name: "Starbucks Single Product Page",
      imageUrl: project_7,
      text: "Live site",
      url: "https://starbucks-product-single-page.vercel.app/",
      social: "GitHub",
      gitUrl:
        "https://github.com/codepologist/Starbucks-Product-Single-Page.git",
    },
  ];
  return (
    <section className={`section`}>
      <Helmet>
        <meta charset="UTF-8" />
        <title>My Projects | Frontend Engineer</title>
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
        <h1 className={`title`}>Projects</h1>
        <motion.div
          className={`columns is-multiline`}
          animate={{
            scale: [2, 1],
            rotate: [90, 0],
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {ProjectList.map((item) => {
            return (
              <div
                className={`column is-one-third is-flex is-align-items-stretch`}
                
                key={item.id}
              >
                <motion.div
                  key={item.id}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                >
                  <div className={`card`}>
                    <div className={`card-image`}>
                      <figure className={`image`}>
                        <img src={item.imageUrl} />
                      </figure>
                    </div>
                    <div className={`card-content`}>
                      <div className={`media`}>
                        <div className={`media-content`}>
                          <p className={`title is-size-6`}>{item.name}</p>
                        </div>
                      </div>
                    </div>
                    <footer className={"card-footer"}>
                      <p className={"card-footer-item"}>
                        <p className={"subtitle is-size-6"}>
                          <a href={item.url} target={"_blank"}>
                            {item.text}{" "}
                            <FaExternalLinkAlt style={{ fontSize: "15px" }} />
                          </a>
                        </p>
                      </p>
                      <p className={"card-footer-item"}>
                        <p className={"subtitle is-size-6"}>
                          <a href={item.gitUrl} target={"_blank"}>
                            {item.social}{" "}
                            <FaExternalLinkAlt style={{ fontSize: "15px" }} />
                          </a>
                        </p>
                      </p>
                    </footer>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
