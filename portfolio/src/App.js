import {Routes, Route, useLocation} from "react-router-dom"

import style from "./App.module.css";
import NavBar from "./components/NavBar/navBar";
import Landing from "./components/Landing/landing";
import About from "./components/About/about"
import Projects from "./components/Proyects/projects"
import Contact from "./components/Contact/contact"
import ContextProvider from "./context/CounterContext";
// import Titulo from "./components/Titulo/titulo"

function App() {
  return (
    <ContextProvider>
      <div className={style.app}>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          {/* <Route path="/contact" element={<Titulo titulo="TITULO" inicial="T"/>}/> */}
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;

