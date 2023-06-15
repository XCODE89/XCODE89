import {Routes, Route} from "react-router-dom"
import {Provider} from "react-redux"

import style from "./App.module.css";
import Landing from "./components/Landing/landing";
import Home from "./components/Home/home"
import store from "./redux/store";

function App() {
  return (
    // <Provider store={store}>
      <div className={style.app}>
        {}
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </div>
    // </Provider>
  );
}

export default App;
