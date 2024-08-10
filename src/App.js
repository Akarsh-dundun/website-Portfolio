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
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import Tools from './components/tools';

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
      <Tools />
      <Papers />
      <Works />
      <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
      </div>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
    
  );
}

export default App;
