import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import RecentlyPlayed from './pages/RecentlyPlayed';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/userpage" component={UserPage} />
        <Route exact path="/recentlyplayed" component={RecentlyPlayed} />
      </Switch>
    </Router>
  );
}

export default App;
