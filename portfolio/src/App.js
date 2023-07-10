import {Routes, Route, useLocation} from "react-router-dom"

import style from "./App.module.css";
import NavBar from "./components/NavBar/navBar";
import Landing from "./components/Landing/landing";
import About from "./components/About/about"
import Projects from "./components/Proyects/proyects"
import Contact from "./components/Contact/contact"

function App() {
  return (
      <div className={style.app}>
        <NavBar/>
        <Routes>
          <Route path="/landing" element={<Landing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
  );
}

export default App;

