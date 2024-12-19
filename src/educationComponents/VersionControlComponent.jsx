
import { GradientCircularProgress } from "./GradientCircularProgress";
import { motion, AnimatePresence } from "framer-motion";
import { animationVariants } from "../../src/animationVariants";
export const VersionControlComponent = () => {
  const items = [

    {
      id: "Git",
      progress: 70,
      strokeColor: ["#A29BFE", "#E056FD"],
      imageUrl: "https://img.icons8.com/color/96/git.png",
    },
    {
      id: "GitHub",
      progress: 70,
      strokeColor: ["#A29BFE", "#E056FD"],
      imageUrl: "https://img.icons8.com/color/96/github--v1.png",
    },


  ];
  return (
    <>
      <div className="  grid md:grid-cols-5 relative grid-cols-2 grid-rows-2 w-[55%] gap-10 ">
        <div></div>
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
            key={item.id}
            initial="clipHidden"
            whileInView="clipVisible"
            exit="clipExit"
            viewport={{ once: false, amount: 0.6 }}
            variants={animationVariants}
              className="flex w-full h-full relative justify-center items-center  gap-10 flex-col"
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




