// import logo from './logo.svg';
import React from "react";
import Contact from "./component/Contact";
import Feature from "./component/Feature";
import Header from "./component/home";
import Navbar from "./component/Navbar";
import Coaches from "./component/Coaches";
import Offer from "./component/Offer";
import About from "./component/About";
import Price from "./component/price";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Coaches />
      <Price />
      <Contact />
    </div>
  );
}

export default App;
