import { motion, AnimatePresence } from "framer-motion";
import { animationVariants } from "../../src/animationVariants";
import { GradientCircularProgress } from "./GradientCircularProgress";
export const FrameworksAndLibraries = () => {
  const items = [
    {
      id: "React",
      progress: 80,
      strokeColor: ["#FF7F50", "#FF4500"],
      imageUrl: "https://img.icons8.com/nolan/96/react-native.png",
    },
    {
      id: "Express",
      progress: 40,
      strokeColor: ["#FF7F50", "#FF4500"],
      imageUrl: "https://img.icons8.com/nolan/96/express-js.png",
    },
    {
      id: "Recoil",
      progress: 70,
      strokeColor: ["#FF7F50", "#FF4500"],
      imageUrl: "https://img.icons8.com/color/96/recoil-js.png",
    },
    {
      id: "Node.js",
      progress: 85,
      strokeColor: ["#FF7F50", "#FF4500"],
      imageUrl: "https://img.icons8.com/color/96/nodejs.png",
    },
    {
      id: "Tailwind",
      progress: 90,
      strokeColor: ["#FF7F50", "#FF4500"],
      imageUrl: "https://img.icons8.com/color/96/tailwind_css.png",
    },
    {
      id: "React Router",
      progress: 90,
      strokeColor: ["#FF7F50", "#FF4500"],
      imageUrl:"./src/assets/reactrouter.png",
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
