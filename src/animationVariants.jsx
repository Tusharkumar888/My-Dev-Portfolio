
    export const animationVariants ={
        // left to right
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
            exit: { opacity: 0, x: -100, transition: { duration: 0.7 } },
            // right to left
            hidden2: { opacity: 0, x: 100 },
            visible2: { opacity: 1, x: 0, transition: { duration: 0.7 } },
            exit2: { opacity: 0, x: 100, transition: { duration: 0.7 } },

            fadeInOutHidden: { opacity: 0 },
            fadeInOutVisible: { opacity: 1, transition: { duration: 1.5 } }, // Fade-in over 1 second
            fadeInOutExit: { opacity: 0, transition: { duration: 1.5 } },

            // popup animation 

            clipHidden: {
    
              scale: 0.5,
              opacity: 0,
            },
            clipVisible: {
              scale: 1,
              opacity: 1,
            },
            clipExit: {
              clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
              scale: 0.5,
              opacity: 0,
            },
    };

