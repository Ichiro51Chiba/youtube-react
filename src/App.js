import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Serch from './pages/Serch';
import Top from './pages/Top';
import Wacth from './pages/Wacth';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/serch" component={Serch} />
          <Route exact path="/watch" component={Wacth} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
