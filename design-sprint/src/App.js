import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './Main/Login';
import FindTeam from './Main/FindTeam';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/team" component={FindTeam} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
