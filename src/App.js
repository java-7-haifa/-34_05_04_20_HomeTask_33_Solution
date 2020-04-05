import React from 'react';
import Header from './components/header/Header';
import {Container} from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import ProductList from './components/product-list/ProductList';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div>
      <Header/>
      <Container>
        <Switch>
          <Route path='/' exact component={ProductList}/>
          <Route path='/cart' component={Cart}/> 
        </Switch>
      </Container>
    </div>
  );
}

export default App;
