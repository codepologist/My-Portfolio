import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false); // Add state for popup

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = (data) => {
    emailjs
      .send("service_idkjcja", "template_9hx2v0j", data, "YR_3TWs_Ceo4HG9Zl")
      .then(
        () => {
          console.log("SUCCESS!");
          reset();
          setShowPopup(true); // Show popup
          setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

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
        <title>Contact | Frontend Engineer</title>
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
      {showPopup && (
        <div className="popup">
          <p>Email sent successfully!</p>
        </div>
      )}
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
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(sendEmail)}
            >
              <div className={"field"}>
                <div className={`control`}>
                  <input type="hidden" name="to_name" value="ONeal Ombu" />
                </div>
              </div>
              <div className={`field`}>
                <div className={`control`}>
                  <input
                    {...register("user_name", { required: true })}
                    name="user_name"
                    className={`input px-5 py-5`}
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>
                {errors.user_name && (
                  <p class="help" style={{ color: "#B22222" }}>
                    This field is required
                  </p>
                )}
              </div>

              <div className={`field`}>
                <div className={`control`}>
                  <input
                    {...register("user_email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    })}
                    name="user_email"
                    className={`input px-5 py-5`}
                    type="email"
                    placeholder="Email address..."
                    required
                  />
                </div>
                {errors.user_email && (
                  <p class="help" style={{ color: "#B22222" }}>
                    {errors.user_email.type === "required" &&
                      "This field is required"}
                    {errors.user_email.type === "pattern" &&
                      "Please enter a valid email address"}
                  </p>
                )}
              </div>

              <div className={`field`}>
                <div className={`control`}>
                  <textarea
                    {...register("message", { required: true })}
                    name="message"
                    className={`textarea px-5 py5 has-fixed-size`}
                    placeholder="Write message here..."
                    rows={`10`}
                    cols={`30`}
                    required
                  ></textarea>
                </div>
                {errors.message && (
                  <p class="help" style={{ color: "#B22222" }}>
                    This field is required
                  </p>
                )}
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
                I'm available to work! Drop a comment, question, or a concern
                via the form.
              </motion.p>
              <motion.p
                initial={{ x: 200, scale: 0.1 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
              ></motion.p>

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
                  <a href="https://www.twitter.com/ONealOmbu" target={`_blank`}>
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
                    href="https://www.github.com/codepologist"
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
