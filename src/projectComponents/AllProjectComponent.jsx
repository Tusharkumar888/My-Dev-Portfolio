import { FrontEndProjectComponent } from "./FrontEndProjectComponent";
import { FullStackProjectComponent } from "./FullStackProjectComponent";
import { PythonProjectCoponent } from "./PythonProjectCoponent";

export const AllProjectComponent = () => {
    return (
      <>
        <FullStackProjectComponent></FullStackProjectComponent>
        <FrontEndProjectComponent></FrontEndProjectComponent>
        <PythonProjectCoponent></PythonProjectCoponent>
      </>
    );
  };