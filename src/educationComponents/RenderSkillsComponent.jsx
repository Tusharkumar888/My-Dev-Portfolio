import { DatabaseTechnologiesComponent } from "./DatabaseTechnologiesComponent";
import { FrameworksAndLibraries } from "./FrameworksAndLibraries";
import { TechAndLanguagesComponent } from "./TechAndLanguagesComponent";
import { VersionControlComponent } from "./VersionControlComponent";

export const RenderSkillComponent = ({ renderSkillValue }) => {
  switch (renderSkillValue) {
    case "Tech and Languages":
      return <TechAndLanguagesComponent></TechAndLanguagesComponent>;
      break;
    case "Frameworks and Libraries":
      return <FrameworksAndLibraries></FrameworksAndLibraries>;
      break;
    case "Database":
      return <DatabaseTechnologiesComponent></DatabaseTechnologiesComponent>
      break;
    case "Version Control":
      return <VersionControlComponent></VersionControlComponent>
      break;
  }
};
