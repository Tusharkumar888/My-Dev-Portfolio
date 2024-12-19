import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; 
import { particalBg } from "../assets/particalBg";

export const ParticelComponent = () => {
    const particlesInit = useCallback(async engine => {
       
        await loadSlim(engine);
    }, []);

    return (
            <Particles
            id="tsparticles"
            init={particlesInit}
          
            options={particalBg}
            />


        
    );
};