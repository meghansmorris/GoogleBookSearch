import React, { Component } from 'react';
import { BrowserRouter as Router,
  Route,
  Switch
  } from "react-router-dom";

import Home from "./pages/Homepage";
import Saved from "./pages/Savedpage";
import Searchpage from "./pages/Searchpage";
import NavBar from "./components/NavBar/NavBar";
import NoMatch from "./pages/NoMatch";
import API from "./utils/API";


class App extends Component {

  state = {
    books: [],
    bookSearch: ""
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(this.state.bookSearch)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Searchpage} />
          <Route exact path="/saved/" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </>
    </Router>
    )
  };
}

export default App;


