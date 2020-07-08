import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./components/Auth";
import Newsfeed from "./components/Newsfeed";
import Following from "./components/Following";
import Post from "./components/Post";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/user/create">
              <Auth />
            </Route>
            <Route path="/user/login" exact>
              <Auth />
            </Route>
            <Route path="/user/profile">
              <Profile />
            </Route>
            <Route path="/newsfeed">
              <Newsfeed />
            </Route>
            <Route path="/post">
              <Post />
            </Route>
            <Route path="/following">
              <Following />
            </Route>
            <Route path="/" exact>
              <Auth />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
