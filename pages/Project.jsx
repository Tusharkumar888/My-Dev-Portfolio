import { ProjectButtonComponent } from "../src/projectComponents/ProjectButtonComponent";
import { useState } from "react";
import { RenderProjectComponent } from "../src/projectComponents/RenderProjectComponent";
import { motion } from "framer-motion";
import { animationVariants } from "../src/animationVariants";
export const Project = () => {
  const projecButtonArr = ["All", "Full Stack", "Front end", "Java"];
  const [renderValue, setRenderValue] = useState(0);
  return (
    <div>
      <div className="w-full h-auto  pt-20 flex flex-col justify-center items-center pb-10 px-4 lg:px-20 relative  bg-[#ffff]">
        <motion.div
          initial="fadeInOutHidden"
          whileInView="fadeInOutVisible"
          exit="fadeInOutExit"
          viewport={{ once: false, amount: 0.2 }}
          variants={animationVariants}
          className="w-full h-56 flex justify-center items-center flex-col space-y-20 "
        >
          <h1 className="text-6xl jost-Font leading-10 ">Projects</h1>
          <div className="flex lg:space-x-8 space-x-2">
            <ProjectButtonComponent
              buttons={projecButtonArr}
              renderValue={renderValue}
              setRenderValue={setRenderValue}
            ></ProjectButtonComponent>
          </div>
        </motion.div>

        <section className="grid md:grid-cols-2  w-full h-full items-center gap-4 relative sm:grid-cols-1 ">
          <RenderProjectComponent
            renderValue={renderValue}
          ></RenderProjectComponent>
        </section>
      </div>
    </div>
  );
};
