import { Link } from "react-router-dom";

export const Button = ({ value, selected, setSelected}) => {
  return (
    <>
      { 
        value.map((text,index)=>{
         return <Link key={index}
          className={` transition-all duration-300 font-medium jost-Font rounded m-2 text-zinc-500 text-lg hover:text-red-300  ${index==selected?"!text-red-500":" button"}`}
          to={`${text=="Home"? "/"  : "/"+text.toLowerCase()}`}
          onClick={()=>{
            setSelected(index)
            localStorage.setItem('selected',index)
          
          }}
        >
          {text}
        </Link>
        })
      }
    </>
  );
};
