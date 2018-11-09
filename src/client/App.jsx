import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { createStore } from "redux";
// import { Provider } from "react-redux";

import Header from './layout/Header'
import Artist from './pages/Artist'
import Index from './pages/Index'

const App = () => (
  <Router>
    <div className="App">
      <Header />
      {/* The Routes begins here */}
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/artist/:artist" component={Artist} />
      </Switch>
    </div>
  </Router>
)

export default App
