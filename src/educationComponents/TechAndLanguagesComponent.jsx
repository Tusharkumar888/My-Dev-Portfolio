import { GradientCircularProgress } from "./GradientCircularProgress";
import { motion, AnimatePresence } from "framer-motion";
import { animationVariants } from "../../src/animationVariants";
export const TechAndLanguagesComponent = () => {
  const items = [
    {
      id: "Python",
      progress: 70,
      strokeColor: ["#0077b6", "#00b4d8"],
      imageUrl: "https://img.icons8.com/3d-fluency/94/python.png",
    },
    {
      id: "Java",
      progress: 65,
      strokeColor: ["#0077b6", "#00b4d8"],
      imageUrl: "https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png",
    },
    {
      id: "C",
      progress: 60,
      strokeColor: ["#0077b6", "#00b4d8"],
      imageUrl: "https://img.icons8.com/3d-fluency/94/copyright.png",
    },
    {
      id: "JavaScript",
      progress: 80,
      strokeColor: ["#0077b6", "#00b4d8"],
      imageUrl: "https://img.icons8.com/fluency/96/node-js.png",
    },
    {
      id: "TypeScript",
      progress: 50,
      strokeColor: ["#0077b6", "#00b4d8"],
      imageUrl: "https://img.icons8.com/fluency/96/typescript--v1.png",
    },
    {
      id: "H.T.M.L",
      progress: 90,
      strokeColor: ["#0077b6", "#00b4d8"],
      imageUrl: "https://img.icons8.com/fluency/94/html-5.png",
    },
    {
      id: "C.S.S",
      progress: 90,
      strokeColor: ["#0077b6", "#00b4d8"],
      imageUrl: "https://img.icons8.com/color/96/css3.png",
    },
  ];
  return (
    <>
      <div className=" row-span-2 grid md:grid-cols-5 myFont md:text-lg text-sm font-medium text-gray-600 grid-cols-2 w-[55%] gap-10 justify-items-center relative">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
            key={item.id}
            initial="clipHidden"
            whileInView="clipVisible"
            exit="clipExit"
            viewport={{ once: false, amount: 0.6 }}
            variants={animationVariants}
              className="flex w-full h-full relative justify-center items-center  gap-10 flex-col "
            >
              <GradientCircularProgress
                progress={item.progress}
                strokeColor={item.strokeColor}
                imageUrl={item.imageUrl}
              ></GradientCircularProgress>
              <p>{item.id}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};
