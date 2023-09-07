import React from 'react';
import './App.css';
import Navbar from './component/Navbar/navbar'
import Header from './component/Header/header'
import Cards from './component/cards/cards'

function App() {
  return (
    <div className='container-fluid'>

    <Navbar />
    <Header />
    <Cards />
    
    </div>   
  );
}

export default App;