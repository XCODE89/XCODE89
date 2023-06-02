import {Routes, Route} from "react-router-dom"

import style from "./App.module.css";
import Landing from "./components/Landing/landing";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </div>
  );
}

export default App;
