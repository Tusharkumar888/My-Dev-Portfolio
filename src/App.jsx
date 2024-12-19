import { Routes, Route, useLocation } from 'react-router-dom';
import { NavBar } from './AllRoutesNavigation/NavBar'; 
import { Home } from '../pages/Home';
import { ContactMe } from '../pages/ContactMe';
import { Education } from '../pages/Education';
import { Project } from '../pages/Project';
import { NotFound } from '../pages/NotFound';

const App = () => {
  const location = useLocation();

  // Define the routes where you want to show the navbar
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
