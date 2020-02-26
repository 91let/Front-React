import React from 'react';
import MyRouter from './common/router';
import { HashRouter as Router, Link } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <div className="TopMenu">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/Lists">Go Lists</Link>
        </div>
      </div>
      <MyRouter />
    </Router>
  );
}

export default App;
