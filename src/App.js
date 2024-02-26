import React from "react";
// Import navbar and small bar that shows logos below
import Navbar from "./Navbar/Navbar";
import Logobar from "./Navbar/Logobar";
// Import Hero Section
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import Card from "./Card/Card";
import Search from "./Hero/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Logobar />
      <Hero />
      <Search />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
