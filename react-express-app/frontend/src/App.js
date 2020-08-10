import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import Homepage from './components/Homepage';
import FAQ from './components/FAQ';
import AboutContact from './components/AboutContact';
import Registration from './components/Registration';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App h-100">
      <Header />
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

export default App;
