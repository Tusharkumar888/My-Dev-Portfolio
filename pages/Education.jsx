import { SlGraduation } from "react-icons/sl";
import { BsBriefcase } from "react-icons/bs";
import { FeeldChangeButtonComponent } from "../src/educationComponents/FeeldChangeButtonComponent";
import { useState } from "react";
import { RenderSideComponent } from "../src/educationComponents/RenderSideComponent";
import { RenderSkillComponent } from "../src/educationComponents/RenderSkillsComponent";
import { SkillsChangingButtonComponent } from "../src/educationComponents/SkillsChangingButtonComponent";
import { motion } from "framer-motion";
import { animationVariants } from "../src/animationVariants";
export const Education = () => {
  const [renderSide, setRenderSideValue] = useState("Education");
  const [renderSkills, setRenderSkillsValue] = useState("Tech and Languages");
  return (
    <>
      <section className="w-[screen] h-[100vh] flex items-center justify-center px-5  ">
        <div className="w-[768px] h-[591px] myFont grid grid-rows-7 ">
          <motion.div
            initial="fadeInOutHidden"
            whileInView="fadeInOutVisible"
            exit="fadeInOutExit"
            viewport={{ once: false, amount: 0.2 }}
            variants={animationVariants}
            className="  row-span-2  flex flex-col items-center justify-center leading-10"
          >
            <p className="text-4xl font-medium">Qualifications</p>
            <p className="  font-normal">My personal journey</p>
          </motion.div>
          <motion.div
            initial="fadeInOutHidden"
            whileInView="fadeInOutVisible"
            exit="fadeInOutExit"
            viewport={{ once: false, amount: 0.2 }}
            variants={animationVariants}
            className="text-gray-500 font-normal row-span-1 grid grid-cols-2 md:px-24 "
          >
            <FeeldChangeButtonComponent
              text={"Education"}
              ImgCopo={SlGraduation}
              renderSide={renderSide}
              setRenderSideValue={setRenderSideValue}
            ></FeeldChangeButtonComponent>
            <FeeldChangeButtonComponent
              text={"Work"}
              ImgCopo={BsBriefcase}
              renderSide={renderSide}
              setRenderSideValue={setRenderSideValue}
            ></FeeldChangeButtonComponent>
          </motion.div>
          <div className=" row-span-4 grid grid-cols-1 relative justify-items-center items-center text-gray-600 font-normal md:text-lg text-sm overflow-hidden">
            <RenderSideComponent
              renderSideValue={renderSide}
            ></RenderSideComponent>
          </div>
        </div>
      </section>
      <section className="w-[screen] h-[100vh] flex flex-col items-center ">
        <div className="w-full h-[590px]  grid grid-flow-row grid-rows-2 justify-items-center md:px-20 ">
          <motion.div
            initial="fadeInOutHidden"
            whileInView="fadeInOutVisible"
            exit="fadeInOutExit"
            viewport={{ once: false, amount: 0.2 }}
            variants={animationVariants}
            className="   flex flex-col items-center justify-evenly leading-10  w-full "
          >
            <p className="md:text-5xl text-4xl font-medium">Skills</p>
            <div className="text-gray-500  flex justify-evenly w-full myFont font-normal ">
              <SkillsChangingButtonComponent
                text={"Tech and Languages"}
                renderSkills={renderSkills}
                setRenderSkillsValue={setRenderSkillsValue}
              ></SkillsChangingButtonComponent>
              <SkillsChangingButtonComponent
                text={"Frameworks and Libraries"}
                renderSkills={renderSkills}
                setRenderSkillsValue={setRenderSkillsValue}
              ></SkillsChangingButtonComponent>
              <SkillsChangingButtonComponent
                text={"Database"}
                renderSkills={renderSkills}
                setRenderSkillsValue={setRenderSkillsValue}
              ></SkillsChangingButtonComponent>
              <SkillsChangingButtonComponent
                text={"Version Control"}
                renderSkills={renderSkills}
                setRenderSkillsValue={setRenderSkillsValue}
              ></SkillsChangingButtonComponent>
            </div>
          </motion.div>
          <RenderSkillComponent
            renderSkillValue={renderSkills}
          ></RenderSkillComponent>
        </div>
      </section>
    </>
  );
};
