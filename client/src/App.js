import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
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
      <>
        <NavBar />
        <div className="App">
          <h1>hello world!</h1>
        </div>
      </>
    );
  }
}

export default App;


