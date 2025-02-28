import { Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import { NavBar } from './AllRoutesNavigation/NavBar'; 
import { Home } from '../pages/Home';
import { ContactMe } from '../pages/ContactMe';
import { Education } from '../pages/Education';
import { Project } from '../pages/Project';
import { NotFound } from '../pages/NotFound';
import { useEffect } from 'react';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem("selected")){
      if(localStorage.getItem("selected") === "0"){
        navigate("/");
      } else if(localStorage.getItem("selected") === "3"){
        navigate("/contact");
      }else if(localStorage.getItem("selected") === "1"){
        navigate("/education");
      }else if(localStorage.getItem("selected") === "2"){
        navigate("/projects");
      }
    }
  }, []);


  const showNavbarRoutes = ["/", "/contact", "/education", "/projects"];
  const showNavbar = showNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <NavBar />}

      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Project />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
      </Routes>
    </>
  );
};

export default App;
