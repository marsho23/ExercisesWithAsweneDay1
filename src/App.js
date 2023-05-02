import './App.css';
import React from 'react';
import JsxExercise from './components/JsxExercise';
import Header from './components/Header';
import Footer from './components/Footer';
import MyComponent from './components/MyComponent';
import Props from './components/Props';
import ComponentWithProps from './components/ComponentWithProps';
import MilesAhead from './components/MilesAhead';
import Login from './components/Login';
import Car from './components/Car';
import ProductTable from './components/ProductTable';


function App() {
  return (
    <div style={{backgroundColor:'pink'}}>
      <p><b>Introduction Exercise</b></p>
      <p><b>JSX exercise</b></p>
      <JsxExercise/>
      <p><b>Component Hierarchy Tutorial and Exercise</b></p>
      <Header/>
      <Footer/>
      <p><b>Components Tutorial and Exercise</b></p>
      <MyComponent/>
      <p><b>Props Tutorial and Exercise</b></p>
      <Props/>
      <ComponentWithProps/>
      <p><b>States Tutorial and Exercise</b></p>
      <MilesAhead/>
      <Login/>
      <Car/>
      <br/>
      <ProductTable/>
    </div>
    
  );
}

export default App;
