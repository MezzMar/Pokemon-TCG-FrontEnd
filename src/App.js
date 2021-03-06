import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Error from './components/Error';
import Navigation from './components/nav';



class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL} >
        <div>
          <Navigation/>
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
            <Route path={`${process.env.PUBLIC_URL}/about/:id`} component={About} />
            <Route path={`${process.env.PUBLIC_URL}/`} component={Home} exact />
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
