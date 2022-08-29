import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { LyfGuardLayout } from './common';

const App = () => {
  return (
    <Router>
      <LyfGuardLayout />
    </Router>
  )
};

export default App;
