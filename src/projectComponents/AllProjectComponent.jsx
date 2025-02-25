import { FrontEndProjectComponent } from "./FrontEndProjectComponent";
import { FullStackProjectComponent } from "./FullStackProjectComponent";
import { JavaProjectCoponent } from "./JavaProjectCoponent";

export const AllProjectComponent = () => {
    return (
      <>
        <FullStackProjectComponent></FullStackProjectComponent>
        <FrontEndProjectComponent></FrontEndProjectComponent>
        <JavaProjectCoponent></JavaProjectCoponent>
      </>
    );
  };