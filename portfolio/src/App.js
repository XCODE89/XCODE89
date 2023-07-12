import {Routes, Route, useLocation} from "react-router-dom"

import style from "./App.module.css";
import NavBar from "./components/NavBar/navBar";
import Landing from "./components/Landing/landing";
import About from "./components/About/about"
import Projects from "./components/Proyects/proyects"
import Contact from "./components/Contact/contact"
import ParticlesBackground from "./components/Particles/particlesBackground";

function App() {
  return (
      <div className={style.app}>
        <ParticlesBackground/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
  );
}

export default App;

