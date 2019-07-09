import React, { useEffect } from 'react';
import './App.css';

import  Top from './container/pages/Top'
import { start } from 'repl';

const App: React.FC = () => {
  return (
    <div className="App">
      <Top />
    </div>
  );
}

export default Top;
