import React from 'react';
import './App.css';
import NavBar from './components/navbar.component';
import Boxes from './components/boxes.component';
import { } from 'react-router-dom';
import Showcase from './components/showcase.component';
import Breaker from './components/breaker.component';
import Quote from './components/quote.component';
import Products from './components/products.component';
import Contact from './components/contact.component';
import Footer from './components/footer.component';


function App() {
  return (
    <div className="App">
      <span><NavBar /></span>
      <Showcase />
      <Boxes />
      <Breaker />
      <Quote />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
