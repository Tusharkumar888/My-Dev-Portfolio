import { CardComponent } from "./CardComponent";
import foodApp from "../assets/frontend1.jpg";
import marketingApp from "../assets/frontend2.jpg"

import portfolioApp from "../assets/frontend3.jpg"
export const FrontEndProjectComponent = () => {
  return (
    <>
      <CardComponent
      projectName={"Meal Ordering"}
        imageUrl={foodApp}
        paraGraph={
          "The Frontend Food Website is a responsive, user-friendly platform showcasing food items, recipes, or menus, crafted using HTML, CSS, and JavaScript for an engaging browsing experience."
        }
        projectLink={"https://tusharkumar888.github.io/meal-ordering-frontend/"}
        sourceCodeLink={"https://github.com/Tusharkumar888/meal-ordering-frontend"}
      ></CardComponent>
      <CardComponent
      projectName={'Marketing Funds'}
        imageUrl={marketingApp}
        paraGraph={"A responsive website with sections for Home, Services, Courses, About, and Contact. Built using HTML, CSS, and JavaScript, it features a modern design and interactivity."}
        projectLink={'https://tusharkumar888.github.io/marketing-funds-website/'}
        sourceCodeLink={"https://github.com/Tusharkumar888/marketing-funds-website"}
      ></CardComponent>
      <CardComponent
      projectName={'Frontend Portfolio'}
        imageUrl={portfolioApp}
        paraGraph={
          "The Frontend Portfolio Website is a sleek, responsive platform highlighting personal information, qualifications, manifesto, blog, and contact details, built using HTML, CSS, and JavaScript"
        }
        projectLink={"https://tusharkumar888.github.io/frontend-portfolio/"}
        sourceCodeLink={"https://github.com/Tusharkumar888/frontend-portfolio"}
      ></CardComponent>
      
    </>
  );
};