import { useState } from 'react';
import './App.css';
import Nav from "./components/Nav.jsx"
import Gallery  from './components/Gallery.jsx';
import Hero from './components/Hero.jsx';



function App() {
  return (
    <>
      <Nav/>
      <Gallery/>
      <Hero/>
      
    </>
  );
}

export default App;