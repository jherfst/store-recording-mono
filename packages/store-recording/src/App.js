import React, {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'q-sig-navbar';
import Details from './components/Details';
import ProductList from 'q-sig-product-list-page';
import Cart from './components/Cart';
import Default from 'q-sig-default-page';
import Modal from './components/Modal';

class App extends Component {

  render() {
      return (
          <Router>

             <Navbar/>
             <Switch>
               <Route exact path="/" component={ProductList} />
               <Route path="/details" component={Details} />
               <Route path="/cart" component={Cart} />
               <Route component={Default} />
             </Switch>

             <Modal/>

          </Router>
      );
  }


}

export default App;
