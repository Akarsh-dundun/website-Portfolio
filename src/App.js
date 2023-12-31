import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './components/About';
import Experience from './components/Experience';
import Tech from './components/Tech';
import Works from './components/Works';
import Contact from './components/Contact';
import StarsCanvas from './components/Stars';
import Papers from './components/Papers';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Banner />
      </div>
      <About />
      <Experience />
      <Tech />
      <Papers />
      <Works />
      <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
      </div>
    </BrowserRouter>
  );
}

export default App;
