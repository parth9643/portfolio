import './App.css';
import About from './PortfolioCont/About/About';
import Home from './PortfolioCont/Home/Home';
import Navbar from './PortfolioCont/Navbar/Navbar';
import Skills from './PortfolioCont/Skills/Skills';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
