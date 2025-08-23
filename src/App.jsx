import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
// import Project from './pages/Project';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import BlogDetails from './components/BlogDetails';
import ScrollToTopButton from './components/ScrollToTopButton';

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <ScrollToTopButton />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/portfolio/:id" element={<Project />} />         */}

        <Route path="/careers" element={<Careers />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
