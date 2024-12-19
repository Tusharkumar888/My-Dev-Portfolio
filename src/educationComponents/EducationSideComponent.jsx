import { motion } from "framer-motion";
import { animationVariants } from "../../src/animationVariants";
export const EducationSideComponent = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.6 }}
        variants={animationVariants}
        className=" flex flex-1 h-full items-center "
      >
        <p className=" w-[40%] ">
          10th Grade, Government Sarvodaya Bal Vidyalaya, Sunder Nagri, Delhi -
          110093.
        </p>
      </motion.div>
      <motion.div
        initial="hidden2"
        whileInView="visible2"
        exit="exit2"
        viewport={{ once: false, amount: 0.6 }}
        variants={animationVariants}
        className=" flex flex-row-reverse flex-1 h-full items-center "
      >
        <p className=" w-[40%] ">
          12th Grade, Government Sarvodaya Bal Vidyalaya, Sunder Nagri, Delhi -
          110093.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.6 }}
        variants={animationVariants}
        className=" flex flex-1 h-full items-center"
      >
        <p className="w-[40%] ">
          Diploma in Computer Science and Engineering, G.N.D.I.T, Rohini, Delhi.
        </p>
      </motion.div>
      <div className="h-[70%] w-[3px] bg-orange-500 absolute flex flex-col items-center ">
        <div className="h-4 w-4 bg-orange-500 absolute rounded-full "></div>
        <div className="h-4 w-4 bg-orange-500 absolute rounded-full mt-28  "></div>
        <div className="h-4 w-4 bg-orange-500 absolute rounded-full mt-56  "></div>
      </div>
    </>
  );
};
