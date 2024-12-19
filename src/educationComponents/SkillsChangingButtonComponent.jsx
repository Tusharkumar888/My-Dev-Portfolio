
export const SkillsChangingButtonComponent = ({ text, renderSkills, setRenderSkillsValue}) => {
    return (
      
        <div className={` flex justify-center items-center md:border-r-0 border-r-2 px-1 cursor-pointer  hover:text-orange-300 hover:border-gray-400 transition-all duration-500 ${text==renderSkills?"!text-orange-500 border-gray-400":"button"}`} onClick={()=>{setRenderSkillsValue(text)}}>
          
          
          <button className="md:text-lg text-xs">{text}</button>
          </div>
  
  
      
    );
  };
  