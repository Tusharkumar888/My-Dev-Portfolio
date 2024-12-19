import React, { useState } from "react";
import { motion } from "framer-motion";
import { animationVariants } from "../../src/animationVariants";

export const CardComponent = ({ projectName,imageUrl,projectLink,sourceCodeLink,paraGraph }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <motion.section
        initial="clipHidden"
        whileInView="clipVisible"
        exit="clipExit"
        viewport={{ once: false, amount: 0.4 }}
        variants={animationVariants}
        className="w-auto h-[250px] flex rounded-xl items-center justify-center shadow-black  relative shadow-lg  overflow-hidden"
      >
        <div
          className={` w-full h-full bg-cover bg-center bg-no-repeat   rounded-lg overflow-hidden transition-all delay-150 duration-500 ease-in-out hover:scale-125  flex items-end ${
            clicked ? "scale-125 " : "scale-100"
          }`}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          onClick={() => {
            setClicked(!clicked);
          }}
        ></div>
        <div
          className={`bg-black bg-opacity-30  backdrop-blur-md grid grid-rows-4 rounded-lg border-gray-500 border-t absolute bottom-0  transition-all duration-500 ease-in-out w-full ${
            clicked ? "h-[50%]" : "h-0"
          } `}
        >
          <div className=" row-span-2 relative flex justify-center items-center overflow-hidden text-gray-100 w-full h-full px-2 ">
            <p className=" justify-self-center  md:text-sm text-xs font-normal myFont rounded-lg ">
             {paraGraph}
            </p>
          </div>
          <div className="  w-full h-full row-span-2 relative text-gray-300 flex justify-around font-normal myFont items-center overflow-hidden">
            <p className="w-[50%] text-xl myFont font-medium">{projectName}</p>
            <div className=" h-[80%] relative">
              <a href={projectLink} target="_blank">
                <img
                  className="relative h-full"
                  src="https://img.icons8.com/stickers/100/cloud-link.png"
                  alt="link"
                />
              </a>
            </div>
            <div className=" h-[80%] relative">
              <a href={sourceCodeLink} target ="_blank">
                <img className="relative h-full"
                  src="https://img.icons8.com/stickers/100/github.png"
                  alt="Source code"
                />
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};
