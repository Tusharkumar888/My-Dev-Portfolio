import { GradientCircularProgress } from "./GradientCircularProgress";
import { motion, AnimatePresence } from "framer-motion";
import { animationVariants } from "../../src/animationVariants";
export const DatabaseTechnologiesComponent = () => {
  const items = [

    {
      id: "MySQL",
      progress: 60,
      strokeColor: ["#FF6347", "#FFD700"],
      imageUrl: "https://img.icons8.com/fluency/94/my-sql.png",
    },
    {
      id: "MongoDB",
      progress: 75,
      strokeColor: ["#FF7F50", "#FF4500"],
      imageUrl: "https://img.icons8.com/color/96/mongo-db.png",
    },
    {
      id: "PostgreSQL",
      progress: 40,
      strokeColor: ["#FF7F50", "#FF4500"],
      imageUrl: "https://img.icons8.com/plasticine/100/postgreesql.png",
    },

  ];
  return (
    <>
      <div className="  grid md:grid-cols-5 grid-cols-2 relative grid-rows-2 w-[55%] gap-10 ">
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
