import {BrowserRouter as Router,Route} from 'react-router-dom'
import React from 'react'
import Login from './Login.js'
import './App.css';

function App() {
  return (
    <Router>
        <Route path='/' component={Login} exact/>
    </Router>
  );
}

export default App;
