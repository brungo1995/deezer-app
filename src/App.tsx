import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import PrimarySearchAppBar from './Components/generic/NavBar';
import SearchView from "./view/search/SearchView";
import ArtistDetailView from "./view/artist/ArtistDetailView";

function App() {
  return (
    <Router>
      <CssBaseline />
      <PrimarySearchAppBar />
      <Switch>
        {/* <Route exact path="/" component={SearchView} /> */}
        <Route exact path="/search/:q?" component={SearchView} />
        <Route exact path="/artist/:id" component={ArtistDetailView} />
        <Redirect to="/search" />
      </Switch>
    </Router>
  );
}

export default App;
