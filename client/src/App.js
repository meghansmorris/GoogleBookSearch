import React from "react";
import { BrowserRouter as Router,
  Route,
  Switch
  } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Saved from "./pages/Savedpage";
import Searchpage from "./pages/Searchpage";
import NavBar from "./components/NavBar/NavBar";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
  <Router>
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/search" component={Searchpage} />
        <Route exact path="/saved/" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </>
  </Router>
  )
};


export default App;


