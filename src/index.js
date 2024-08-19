import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import reportWebVitals from './reportWebVitals';
import { Approuter } from './components/AppRouter/Approuter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Approuter/>
  </React.StrictMode>
);

reportWebVitals();