import React, { useState, useEffect }  from 'react';
import './App.css';
import About from './PortfolioCont/About/About';
import Conatct from './PortfolioCont/Contact/Conatct';
import Footer from './PortfolioCont/Footer/Footer';
import Home from './PortfolioCont/Home/Home';
import Navbar from './PortfolioCont/Navbar/Navbar';
import Project from './PortfolioCont/Projects/Project';
import Skills from './PortfolioCont/Skills/Skills';
import Spinner from './PortfolioCont/Spinner/Spinner';




function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false when your app is ready
    }, 2000); // Replace with actual initialization time

    // Cleanup logic if necessary
    return () => {
    };
  }, []);
  return (
    <div className="App">
    {loading ? (
      <Spinner />
    ) : (
      <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Project/>
        <Conatct/>
        <Footer/>
      </div>
    )}
    </div>
  );
}

export default App;
