import React from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";
const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
        <title>Contact | Fullstack Developer</title>
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
        <h1 className={`title`}>Contact</h1>
        <div className={"columns"}>
          <motion.div
            className={"column is-half"}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.2 }}
          >
            <form id={`contact-form`} onSubmit={handleSubmit(onSubmit)}>
              <div className={"field"}>
                <div className={`control`}>
                  <input type="hidden" name="to_name" value="ONeal Ombu" />
                </div>
              </div>
              <div className={`field`}>
                <div className={`control`}>
                  <input
                    name="user_name"
                    className={`input px-5 py-5`}
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>
              </div>

              <div className={`field`}>
                <div className={`control`}>
                  <input
                    name="user_email"
                    className={`input px-5 py-5`}
                    type="email"
                    placeholder="Email address..."
                    required
                  />
                </div>
              </div>

              <div className={`field`}>
                <div className={`control`}>
                  <textarea
                    name="message"
                    className={`textarea px-5 py5 has-fixed-size`}
                    placeholder="Write message here..."
                    rows={`10`}
                    cols={`30`}
                    required
                  ></textarea>
                </div>
              </div>

              <div className={`field`}>
                <div className={`control`}>
                  <button
                    className={`btn-custom-form-btn button`}
                    value="Send"
                    type="submit"
                  >
                    <span className={"icon-text"}>
                      <span>Submit</span>
                      <span className={`icon`}>
                        <FaPaperPlane />
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
          <div className={"column is-one-third is-offset-1"}>
            <div className={"content"}>
              <motion.h5
                className={`is-size-3 has-text-weight-bold`}
                initial={{ x: 200, scale: 0.1 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                Let's talk about everything web and mobile.
              </motion.h5>
              <motion.p
                initial={{ x: 200, scale: 0.1 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                If you have any questions about any project, don't hesitate to
                make contact.
              </motion.p>
              <motion.p
                initial={{ x: 200, scale: 0.1 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                I'm available to grab a snack and chat! Drop a comment,
                question, or a concern by E-mail or WhatsApp.
              </motion.p>
              <motion.p
                initial={{ x: 200, scale: 0.1 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <a className={`icon-color`} href="mailto:ombu.oneal@yahoo.com">
                  <span className={"icon-text"}>
                    <span className={"icon"}>
                      <FaEnvelope className={`icon-color`} />
                    </span>
                    <span>ombu.oneal@yahoo.com</span>
                  </span>
                </a>
                <a
                  className={`icon-color`}
                  href="https://wa.me/2347060487713"
                  target={`_blank`}
                >
                  <span className={"icon-text"}>
                    <span className={"icon"}>
                      <FaWhatsapp className={`icon-color`} />
                    </span>
                    <span>https://wa.me/2347060487713</span>
                  </span>
                </a>
              </motion.p>

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
                    href="https://www.linkedin/in/oneal-ombu"
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
                  <a
                    href="https://www.github.com/Codepologist"
                    target={`_blank`}
                  >
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

export default Contact;
