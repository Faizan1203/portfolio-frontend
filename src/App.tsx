import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Loader from './components/Loader/Loader';
import Header from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/ContactPage';

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Router>
        <Loader load={load} />
        <div id={load ? 'no-scroll' : 'scroll'}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
