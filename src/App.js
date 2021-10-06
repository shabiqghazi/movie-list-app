import { Component } from "react";
import Navbar from "./component/MainComp/Navbar";
import "./App.css";
import MovieContainer from "./container/MovieContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleMovieComp from "./component/MovieComp/SingleMovieComp";
import PlaylistContainer from "./container/PlaylistContainer";

class App extends Component {
  MovieContainer = () => {
    <MovieContainer />;
  };
  SingleMovieComp = () => {
    <SingleMovieComp />
  }
  PlaylistContainer = () => {
    <PlaylistContainer />
  }
  render() {
    return (
      <Router>
        <div style={{ marginTop: '150px' }}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={MovieContainer}></Route>
            <Route path="/movies/:id" component={SingleMovieComp}></Route>
            <Route path="/playlist" component={PlaylistContainer}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
