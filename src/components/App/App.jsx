import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Pizza from '../Pizza/Pizza';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Header />
     <Router>
        <Route exact path='/api/pizza'>
          <Pizza />
        </Route>
        
     </Router>
      {/* <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
   */}
    </div>
  );
}

export default App;
