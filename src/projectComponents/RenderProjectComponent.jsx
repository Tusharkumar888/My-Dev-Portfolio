import { AllProjectComponent } from "./AllProjectComponent";
import { FrontEndProjectComponent } from "./FrontEndProjectComponent";
import { FullStackProjectComponent } from "./FullStackProjectComponent";
import { JavaProjectCoponent } from "./JavaProjectCoponent";

export const RenderProjectComponent = ({ renderValue }) => {
  switch (renderValue) {
    case 0:
        return <AllProjectComponent></AllProjectComponent>;
        break; 
    case 1:
      return <FullStackProjectComponent></FullStackProjectComponent>;
      break; 
    case 2:
      return <FrontEndProjectComponent></FrontEndProjectComponent>;
      break;
    case 3:
      return <JavaProjectCoponent></JavaProjectCoponent>;
      break;
  }
};
