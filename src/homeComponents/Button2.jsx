import { SvgComponant } from "./SvgComponant";
export const Button2 = ({onClick}) => {
  
  return (
    <>
      <div onClick={onClick} className="text-white  bg-gradient-to-br hover:scale-110 transition duration-300 ease-in-out from-purple-600 to-blue-500 cursor-pointer hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-3xl text-sm w-40 h-11  shadow-lg shadow-blue-500 mt-8  flex justify-center items-center">
        <span className="mr-4">About Me </span>
        <span>
          <SvgComponant></SvgComponant>
        </span>
      </div>
    </>
  );
};
