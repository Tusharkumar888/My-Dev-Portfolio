import Lottie from 'lottie-react'
import mylog from '../assets/logo.json'

export const LogoAnimation = () =>{
    
    return (
  
                <div className='w-28  cursor-pointer hidden md:inline-block'>
                     <Lottie animationData={mylog} autoplay={true} loop ={false} ></Lottie>
                </div>   
                
    
    )

}