import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaSass,
  FaReact,
  FaDatabase,
  FaHdd,
  FaWordpress,
  FaTerminal,
  FaGit,
  FaDocker,
  FaNode,

} from 'react-icons/fa';
import { SiBulma, SiTailwindcss, SiNextdotjs, SiFirebase } from 'react-icons/si';



const Skills = () => {
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
        <title>My Skills | Fullstack Developer</title>
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
        className={`scroll-progress-bar-motion`}></motion.div>
      <div className={`container`}>
        <h1 className={`title`}>Skills</h1>
        <motion.div
          className={'columns is-multiline has-text-centered is-mobile'}
          animate={{
            scale: [2, 1],
            rotate: [90, 0],
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}>
          <div className={'column is-one-quarter'}>
            <motion.div
              whileHover={{
                scale: 1.3,
                transition: { duration: 0.1 },
              }}>
              <FaHtml5
                className={`icon-color skills-icon-color`}
                style={{ fontSize: '65px' }}
              />
            </motion.div>
            <p className={`has-text-weight-medium is-size-6-mobile`}>HTML5</p>
          </div>
          <div className={'column is-one-quarter'}>
            <FaCss3
              className={`icon-color skills-icon-color`}
              style={{ fontSize: '65px' }}
            />
            <p className={`has-text-weight-medium is-size-6-mobile`}>CSS3</p>
          </div>
          <div className={'column is-one-quarter'}>
            <FaJs
              className={`icon-color skills-icon-color`}
              style={{ fontSize: '65px' }}
            />
            <p className={`has-text-weight-medium is-size-6-mobile`}>
              JavaScript
            </p>
          </div>
          <div className={'column is-one-quarter'}>
            <SiBulma
              className={`icon-color skills-icon-color`}
              style={{ fontSize: '65px' }}
            />
            <p className={`has-text-weight-medium is-size-6-mobile`}>Bulma</p>
          </div>
          <div className={'column is-one-quarter'}>
            <SiTailwindcss
              className={`icon-color skills-icon-color`}
              style={{ fontSize: '65px' }}
            />
            <p className={`has-text-weight-medium is-size-6-mobile`}>
              TailwindCSS
            </p>
          </div>
          <div className={'column is-one-quarter'}>
            <FaSass
              className={`icon-color skills-icon-color`}
              style={{ fontSize: '65px' }}
            />
            <p className={`has-text-weight-medium is-size-6-mobile`}>
              SASS/SCSS
            </p>
          </div>

          <div className={'column is-one-quarter'}>
            <FaReact
              className={`icon-color skills-icon-color`}
              style={{ fontSize: '65px' }}
            />
            <p className={`has-text-weight-medium is-size-6-mobile`}>React.js</p>
          </div>
          <div className={'column is-one-quarter'}>
            <FaDatabase
              className={`icon-color skills-icon-color`}
              style={{ fontSize: '65px' }}
            />
            <p className={`has-text-weight-medium is-size-6-mobile`}>
              Sanity.io
            </p>
          </div>
          <div className={'column is-one-quarter'}>
            <SiNextdotjs
              className={`icon-color skills-icon-color`}
              style={{ fontSize: '65px' }}
            />
            <p className={`has-text-weight-medium is-size-6-mobile`}>Next.js</p>
          </div>
          <div className={'column is-one-quarter'}>
            <FaWordpress
              className={`icon-color skills-icon-color`}
              style={{ fontSize: '65px' }}
            />
            <p className={`has-text-weight-medium is-size-6-mobile`}>
              WordPress
            </p>
          </div>
          <div className={'column is-one-quarter'}>
            <SiFirebase
              className={`icon-color skills-icon-color`}
              style={{ fontSize: '65px' }}
            />
            <p className={`has-text-weight-medium is-size-6-mobile`}>Firebase</p>
          </div>
          <div className={'column is-one-quarter'}>
            <FaTerminal
              className={`icon-color skills-icon-color`}
              style={{ fontSize: '65px' }}
            />
            <p className={`has-text-weight-medium is-size-6-mobile`}>
              Terminal
            </p>
          </div>
          <div className={'column is-one-quarter'}>
            <FaGit
              className={`icon-color skills-icon-color`}
              style={{ fontSize: '65px' }}
            />
            <p className={`has-text-weight-medium is-size-6-mobile`}>Git</p>
          </div>
          <div className={'column is-one-quarter'}>
            <FaHdd
              className={`icon-color skills-icon-color`}
              style={{ fontSize: '65px' }}
            />
            <p className={`has-text-weight-medium is-size-6-mobile`}>
              Supabase
            </p>
          </div>
          <div className={'column is-one-quarter'}>
            <FaDocker
              className={`icon-color skills-icon-color`}
              style={{ fontSize: '65px' }}
            />
            <p className={`has-text-weight-medium is-size-6-mobile`}>Docker</p>
          </div>
          <div className={'column is-one-quarter'}>
            <FaNode
              className={`icon-color skills-icon-color`}
              style={{ fontSize: '65px' }}
            />
            <p className={`has-text-weight-medium is-size-6-mobile`}>Node.js</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
