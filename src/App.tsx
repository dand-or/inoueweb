import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import  Top from './container/pages/Top';
import Products from './container/pages/Products';
import Footer from './container/organisms/Footer';
import { start } from 'repl';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Top} />
        <Route path="/products" component={Products} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
