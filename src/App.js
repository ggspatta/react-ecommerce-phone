import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Default from './components/Default'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Details from './components/Details'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path='/' component={ProductList}></Route>
        </Switch>
        
        <Details />
        <Cart />
        <Default />
      </React.Fragment>
    );
  }
}

export default App;
