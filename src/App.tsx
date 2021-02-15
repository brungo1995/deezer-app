import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import SearchView from "./view/search/SearchView";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchView} />
        <Route exact path="/search/:q?" component={SearchView} />
        {/* <Route exact path="/search/:q" component={SearchView} /> */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
