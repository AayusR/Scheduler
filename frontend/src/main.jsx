import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';

import "./dist/css/main.css"


import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css";
import "aos/dist/aos.css";



import{BrowserRouter} from "react-router-dom";
import NavbarComponent from './Components/NavbarComponent.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
