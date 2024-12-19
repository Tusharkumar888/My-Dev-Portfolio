import { Link } from "react-router-dom";
export const Button3 = ({ to ,value, onClick}) => {
    return (
      <>
             <Link to={to} className="bg-indigo-400 duration-200 hover:!border-b-2 mx-2 text-white rounded-xl drop-shadow-lg group flex flex-col items-center justify-center border-2 border-b-[6px] border-blue-950 cursor-pointer active:bg-indigo-500 overflow-hidden w-60 h-10 " onClick={onClick}>
                    {value}    
            </Link>
      </>
    );
  };
  