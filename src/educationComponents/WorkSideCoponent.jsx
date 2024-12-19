import { motion } from "framer-motion";
import { animationVariants } from "../../src/animationVariants";
export const WorkSideCoponent = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.6 }}
        variants={animationVariants}
        className=" flex flex-1 h-full items-center"
      >
        <p className="w-[40%] ">
          Designed and developed responsive user interfaces using modern
          frameworks like React
        </p>
      </motion.div>
      <motion.div
        initial="hidden2"
        whileInView="visible2"
        exit="exit2"
        viewport={{ once: false, amount: 0.6 }}
        variants={animationVariants}
        className="flex flex-row-reverse flex-1 h-full items-center "
      >
        <p className=" w-[40%] ">
          Developed scalable server-side applications with Node.js, and Express,
          integrating databases like MySQL, PostgreSQL, and MongoDB
        </p>
      </motion.div>

      <div className="h-[50%] w-[3px] bg-orange-500 absolute flex flex-col  items-center ">
        <div className="h-4 w-4 bg-orange-500 absolute rounded-full "></div>
        <div className="h-4 w-4 bg-orange-500 absolute rounded-full mt-40  "></div>
      </div>
    </>
  );
};
