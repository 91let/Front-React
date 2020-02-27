import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import MyRouter from './common/router';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <Menu />
      <MyRouter />
    </Router>
  );
}

export default App;
