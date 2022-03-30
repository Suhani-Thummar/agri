import React, { Component } from 'react';
import Cityname from './components/Cityname';
import Cart from './components/Cart';
import Search1 from './components/Search1';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DisplayCart from './components/DisplayCart';
import { Checkout } from './components/Checkout';
import Header from './Header';
import About from './components/About';
import ContectUs from './components/ContectUs';
import Slider from './components/Slider';
import Timer from './components/Timers';
import CardDes from './components/CardDes';
import TimeCard from './components/TimeCard';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
          <Route exact path="/timeCard" >
              <TimeCard />
            </Route>
            <Route exact path="/Timer" >
              <Timer />
            </Route>
            <Route exact path="/displaycart">
              <DisplayCart />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/About us">
              <About />
            </Route>
            <Route exact path="/Contect us">
              <ContectUs />
            </Route>
            <Route exact path="/Search">
              <Search1 />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/Slider">
              <Slider />
            </Route>
            <Route exact path="/cardDes">
              <CardDes />
            </Route>
            <Route exact path="/city">
              <Cityname />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}



