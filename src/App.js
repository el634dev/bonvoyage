import React from "react";
// Import navbar and small bar that shows logos below
import Navbar from "./Navbar/Navbar";
import Logobar from "./Navbar/Logobar";
// Import Hero Section
import Hero from "./Hero/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Logobar />
      <Hero />
    </div>
  );
}

export default App;
