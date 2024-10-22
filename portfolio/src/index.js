import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./redux/store";


import App from './App';
import ProjectInfo from './components/Proyects/projectInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/project/:name" element={<ProjectInfo />} />
      </Routes>
    </BrowserRouter>
  // </Provider>
)
