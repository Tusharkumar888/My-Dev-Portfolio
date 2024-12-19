import { CardComponent } from "./CardComponent";
import todoApp from "../assets/todoApp.jpg"
import paymentApp from  "../assets/paymentApp.png"
export const FullStackProjectComponent = () => {
    return (
      <>
      <CardComponent
            projectName={"To-Do-App"}
            imageUrl={todoApp}
            paraGraph={
              "A simple To-Do app where users can: Sign up, log in, and log out securely. Create, view, delete, and mark tasks as done. Access all previously created tasks. Easy to use and built for efficient task management!"
            }
            projectLink={"https://to-do-app-z6j2.vercel.app/"}
            sourceCodeLink={"https://github.com/Tusharkumar888/To-Do-App"}
      ></CardComponent>
      <CardComponent
                  projectName={"Payment-App"}
                  imageUrl={paymentApp}
                  paraGraph={
                    "PayMaster is a secure, full-stack payment platform that simplifies online transactions for businesses and individuals. It supports multiple payment methods, including cards, digital wallets, and bank transfers. Built with modern web technologies, it ensures seamless user experience, security, and scalability for handling high transaction volumes."
                  }
                  projectLink={"https://github.com/Tusharkumar888/Full-Stack-payment-App"}
                  sourceCodeLink={"https://github.com/Tusharkumar888/Full-Stack-payment-App"}
      ></CardComponent>

      </>
    );
  };