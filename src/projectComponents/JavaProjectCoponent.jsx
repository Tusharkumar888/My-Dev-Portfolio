import { CardComponent } from "./CardComponent";
import paymentApp from "../assets/VoiceControlledFileManager.png";
export const JavaProjectCoponent = () => {
  const cardArray = [
    {
      projectName: "VoiceControlledFileManager",
      imageUrl: paymentApp,
      paraGraph: `sorts files into designated folders using voice commands.
                  It enables hands-free organization for a seamless workflow.
                  Perfect for effortless file management! 🎙️📂🚀`,
      projectLink:
        "https://github.com/Tusharkumar888/Full-Stack-payment-App-Underdevelopment-",
      sourceCodeLink:
        "https://github.com/Tusharkumar888/Full-Stack-payment-App-Underdevelopment-",
    },
  ];
  return (
    <>
      {cardArray.map((card, index) => {
        return (
          <CardComponent
            projectName={card.projectName}
            imageUrl={card.imageUrl}
            paraGraph={card.paraGraph}
            projectLink={card.projectLink}
            sourceCodeLink={card.sourceCodeLink}
            key={index}
          ></CardComponent>
        );
      })}
    </>
  );
};
