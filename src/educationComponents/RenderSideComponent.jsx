import { EducationSideComponent } from "./EducationSideComponent";
import { WorkSideCoponent } from "./WorkSideCoponent";

export const RenderSideComponent = ({ renderSideValue }) => {
    switch (renderSideValue) {
      case "Education":
          return <EducationSideComponent></EducationSideComponent>;
          break; 
      case "Work":
        return <WorkSideCoponent></WorkSideCoponent>;
        break; 
    }
  };