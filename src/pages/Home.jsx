import React from "react";
import { Helmet } from "react-helmet";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className={`hero is-halfheight`}>
      <Helmet>
        <meta charset="UTF-8" />
        <title>O'Neal Ombu | Frontend Engineer</title>
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
      <div className={`hero-body`}>
        <div className={`container`}>
          <div className={`columns`}>
            <div className={`column`}>
              <motion.div
                className={`i-am`}
                initial={{ x: -300, scale: 0.5 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h6>Hi! there, I'm O'Neal Ombu</h6>
              </motion.div>
              <motion.h1
                className={`title homepage_hero_text is-size-3-mobile`}
                initial={{ x: 300, scale: 0.5 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 1 }}
              >
                Frontend Engineer
              </motion.h1>
              <motion.p
                className={`sub_text`}
                initial={{ x: 200, scale: 0.1 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 2 }}
              >
                With my solid front-end experience. I enjoy blending logic and
                creative design to create visually appealing, accessible,
                user-friendly websites and applications using state-of-the-art libraries and
                frameworks.
              </motion.p>
              <motion.div
                initial={{ x: -50, scale: 0.5 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <NavLink className={`btn-custom`} to="/About">
                  <span className={`icon-text`}>
                    <span>more about me</span>
                    <span className={`icon`}>
                      <FaArrowRight />
                    </span>
                  </span>
                </NavLink>
              </motion.div>
            </div>
            <div className={`column`}>
              <div className={`hero-me`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
