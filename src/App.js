import './App.css';
import React from 'react';
import JsxExercise from './components/JsxExercise';
import Header from './components/Header';
import Footer from './components/Footer';
import MyComponent from './components/MyComponent';

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
    </div>
    
  );
}

export default App;
