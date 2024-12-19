export const ProjectButtonComponent = ({buttons, renderValue, setRenderValue}) => {
    return (
      <>
      
        {
            buttons.map((text, index) =>{
              return <button key={index} className={`border-2 rounded-lg w-20 h-10 font-semibold hover:bg-orange-400 hover:text-white transition-all duration-500 ${index==renderValue?"text-white bg-orange-500":" button"}`} onClick={()=>{
                setRenderValue(index)
              }}>{text}</button>
            })
        }
      </>
    );
  };
  