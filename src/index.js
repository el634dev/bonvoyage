import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Travel from './Extra/Travel';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Hero/Hero';
import Card from './Card/Card';
import Search from './Hero/Search';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
  <Routes>
    <Route path="/" element={<App />}>
      {/* Childern Go Here */}
      <Route path="travel" element={<Travel />} />
    </Route>
  </Routes>
</Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
