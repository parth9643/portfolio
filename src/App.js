import './App.css';
import About from './PortfolioCont/About/About';
import Home from './PortfolioCont/Home/Home';
import Navbar from './PortfolioCont/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      
      <About/>
    </div>
  );
}

export default App;
