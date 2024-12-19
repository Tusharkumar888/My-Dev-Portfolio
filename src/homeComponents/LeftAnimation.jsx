import Lottie from "lottie-react"
import leftSide from '../assets/right2.json'
export const LeftAnimationGIif =()=>{

    return <div className="z-0">
        <Lottie animationData={leftSide} autoplay={true} loop ={true} ></Lottie>
    

    </div>
}