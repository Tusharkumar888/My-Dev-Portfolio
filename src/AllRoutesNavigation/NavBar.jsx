import { Button } from "../navigationComponents/Button"
import { LogoAnimation } from "../navigationComponents/LogoAnimation"
import { useEffect,useState } from "react";

export const NavBar = () =>{

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [selected, setSelected] = useState(0);
    const navText = ['Home', "Education", "Projects", "Contact"]
    
    useEffect(()=>{
      
      if(!localStorage.getItem("selected")){
        localStorage.setItem("selected",0)
        setSelected(localStorage.getItem("selected"))
      }else{
        setSelected(localStorage.getItem("selected"))
      }
      
    },[])
  
    // Function to handle scroll behavior
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY) {
          // Scrolling down, hide navbar
          setShowNavbar(false);
        } else {
          // Scrolling up, show navbar
          setShowNavbar(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };
  
    // Set up scroll listener
    useEffect(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", handleScroll);
        
        // Clean up listener on component unmount
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    }, [lastScrollY]);

    return <div className={`flex border-b-2 fixed z-50 bg-[#ffff]  justify-between top-0 left-0 w-screen pr-4 items-center  transition-all duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}>
                    <LogoAnimation></LogoAnimation>
                    <div className=" flex justify-around w-full md:w-[40%]">
                        <Button  value={navText} selected={selected}  setSelected={setSelected}></Button>
                    </div>
    
          </div>
}