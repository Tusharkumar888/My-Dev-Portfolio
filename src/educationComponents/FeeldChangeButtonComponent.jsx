

export const FeeldChangeButtonComponent = ({ text, ImgCopo, renderSide, setRenderSideValue}) => {
  return (
    
      <div className={` flex justify-center items-center space-x-2 cursor-pointer  hover:text-orange-300 transition-all duration-500 ${text==renderSide?"text-orange-500":"button"}`} onClick={()=>{setRenderSideValue(text)}}>
        
        <ImgCopo className ="text-4xl"></ImgCopo>
        <button className="text-lg">{text}</button>
        </div>


    
  );
};
