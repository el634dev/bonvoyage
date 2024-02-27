import React from "react";
// Import navbar and small bar that shows logos below
import Navbar from "./Navbar/Navbar";
import Logobar from "./Navbar/Logobar";
// Import Hero Section
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import Card from "./Card/Card";
import Search from "./Hero/Search";
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div>
      <Navbar />
      <Logobar />
      <Hero />
      <Search />
      <Card />
      <Outlet />
      <Footer />
    </div>
    </div>
  );
}

export default App;
