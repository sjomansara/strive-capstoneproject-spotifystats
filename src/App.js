import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import RecentlyPlayed from './pages/RecentlyPlayed';
import Tracks from './pages/Tracks';
import Artists from './pages/Artists';
import Details from './pages/Details';
import Recommended from './pages/Recommended';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/userpage" component={UserPage} />
        <Route exact path="/recentlyplayed" component={RecentlyPlayed} />
        <Route exact path="/tracks/:time" component={Tracks} />
        <Route exact path="/artists/:time" component={Artists} />
        <Route exact path="/details/:type/:id" component={Details} />
        <Route exact path="/recommended/:type" component={Recommended} />
      </Switch>
    </Router>
  );
}

export default App;
