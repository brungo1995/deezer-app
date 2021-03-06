import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import NavBar from './Components/generic/NavBar';
import SearchView from "./view/search/SearchView";
import ArtistDetailView from "./view/artist/ArtistDetailView";

function App() {
  return (
    <Router>
      <CssBaseline />
      <NavBar />
      <Switch>
        <Route exact path="/artist/:id" component={ArtistDetailView} />
        <Route exact path="/search/:name?" component={SearchView} />
        <Redirect to='/search' />
      </Switch>
    </Router>
  );
}

export default App;
