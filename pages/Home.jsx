import { Button2 } from "../src/homeComponents/Button2";
import { ChangeText } from "../src/homeComponents/ChangeText";
import GitHubIcon from "../src/homeComponents/GitHubIcon";
import { FirstRightAnimationGIif } from "../src/homeComponents/FirstRightAnimationGIif";
import { LeftAnimationGIif } from "../src/homeComponents/LeftAnimation";
import { ParticelComponent } from "../src/homeComponents/ParticelComponent";
import LinkedInIcon from "../src/homeComponents/LinkedInIcon";
import InstagramIcon from "../src/homeComponents/InstagramIcon";
import TwitterIcon from "../src/homeComponents/TwitterIcon";
import EmailIcon from "../src/homeComponents/EmailIcon";
import LeetCodeIcon from "../src/homeComponents/LeetCodeIcon";
import { Button3 } from "../src/homeComponents/Button3";
import { useRef } from "react";
import { motion } from "framer-motion";
import {animationVariants} from "../src/animationVariants"
import { DownloadResumeButton } from "../src/homeComponents/DownloadResumeButton";
export const Home = () => {
  const divRef = useRef(null);

  return (
    <div className="overflow-hidden">
      <section className="w-[screen] h-[calc(100vh)] md:flex grid grid-cols-1 md:px-10 px-5 animate-appear">
        <ParticelComponent></ParticelComponent>

        <div className=" grid md:grid-cols-2 grid-cols-1 z-10 ">
          {/* left part */}
          <div className="  flex items-center  ">
            <motion.div
              className=" z-10 "
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false, amount: 0.4 }}
              variants={animationVariants}
            >
              <div className="text-5xl leading-10 pb-10 font-bold " >
                <h1 className="pb-8 text-customBlue ">Hi all, </h1>
                <span className="pb-4 text-customBlue">I'm </span>
                <span className="text-customOrange">Tushar</span>
              </div>
              <ChangeText></ChangeText>
              <Button2
                onClick={() => {
                  divRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              ></Button2>
            </motion.div>
          </div>
          {/* right part */}
          <motion.div
            initial="hidden2"
            whileInView="visible2"
            exit="exit2"
            viewport={{ once: false, amount: 0.4 }}
            variants={animationVariants}
            className=" flex items-center z-10"
          >
            <FirstRightAnimationGIif></FirstRightAnimationGIif>
          </motion.div>
        </div>
      </section>

      <section
        ref={divRef}
        className="w-[screen] h-[100vh] bg-[#faf3e0] grid md:grid-cols-2  grid-cols-1 md:px-10 px-5 animate-appear"
      >
        {/* left part */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.4 }}
          variants={animationVariants}
          className="h-[calc(100vh)] md:flex items-center  hidden "
        >
          <LeftAnimationGIif></LeftAnimationGIif>
        </motion.div>
        {/* right part */}
        <motion.div
                  initial="hidden2"
                  whileInView="visible2"
                  exit="exit2"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={animationVariants}
          ref={divRef}
          className="h-[calc(100vh)]  flex flex-col  justify-center items-center "
        >
          <div className=" flex flex-col items-center ">
            <h1 className="text-3xl font-bold  myFont  ">About Me</h1>
            <p className="text-gray-600 text-lg md:text-xl myFont font-light md:!leading-10 !leading-8">
              🚀 Passionate Full Stack Developer with a proven history of
              delivering dynamic and high-performance web applications. Skilled
              in JavaScript, React.js, and Node.js, I bring a deep understanding
              of modern frameworks and libraries to build responsive, scalable,
              and user-focused solutions. With a commitment to innovation and
              excellence, I strive to create seamless digital experiences that
              meet both user needs and business goals
            </p>
          </div>

          <div className="flex h-32  items-center  w-full justify-evenly">
            <GitHubIcon></GitHubIcon>
            <LeetCodeIcon size={48} color="#FFA116" />
            <LinkedInIcon></LinkedInIcon>
            <EmailIcon></EmailIcon>
            <InstagramIcon></InstagramIcon>
            <TwitterIcon></TwitterIcon>
          </div>
          <div className="flex   items-center  justify-center w-full ">
                <DownloadResumeButton></DownloadResumeButton>
          </div>
          <div className="flex   items-center  justify-center w-full ">
            <Button3
              to={"/contact"}
              value={"Contact Me"}
              onClick={() => {
                localStorage.setItem("selected", 3);
              }}
            ></Button3>
            <Button3
              to={"/projects"}
              value={"Projects"}
              onClick={() => {
                localStorage.setItem("selected", 2);
              }}
            ></Button3>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
