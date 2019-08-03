import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import  Top from './container/pages/Top';
import Products from './container/pages/Products';
import ZakuToNaisho from './container/pages/product/ZakuToNaisho';
import Footer from './container/organisms/Footer';
import { start } from 'repl';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Top} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/zakutonaisho" component={ZakuToNaisho} />
      </div>
      <Footer />
      <div style={{backgroundColor:"#f3f3f3",width:"100%",textAlign:"center"}}>
				<span style={{fontSize:10}}>© 2019 イノウエ模型</span>
			</div>
    </BrowserRouter>
  );
}

export default App;
