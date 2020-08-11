import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import Homepage from './components/Homepage';
import FAQ from './components/FAQ';
import AboutContact from './components/AboutContact';
import Registration from './components/Registration';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {apiResponse: ''};
  }

  callAPI(){
    fetch('http://localhost:5000/test')
      .then( res => res.text() )
      .then( res => this.setState({ apiResponse: res }))
      .catch( err => err );
  }

  componentDidMount = () => {
    this.callAPI();
  }

  render(){
    return (
      <div className="App h-100">
        <Header />
        <p>
          {!this.state.apiResponse ? this.state.apiResponse : "Non Funziona"}
        </p>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about_contact" component={AboutContact} />
            <Route path="/faq" component={FAQ} />
            <Route path="/registration" component={Registration} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
