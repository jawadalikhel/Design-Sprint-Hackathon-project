import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './Main/Login';
import FindTeam from './Main/FindTeam';
import Task from './Main/Task';
import Draw from './Main/Draw';
import Vote from './Main/Vote';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/team" component={FindTeam} />
          <Route path="/task" component={Task} />
          <Route path="/draw" component={Draw} />
          <Route path="/vote" component={Vote} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
