import React, { Component } from "react";
import API from "../utils/API";
//import { Link } from "react-router-dom";
import { Col, Container, Row } from "../components/Grid/Grid";
import { List, BookListItem } from "../components/List/List";

class SavedBooks extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
    date: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => console.log(res)
        // this.setState({ books: res.data, title: "", author: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.saveBook({
        title: this.state.title
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
        <>
        <Container>
          <Row>
            <Col size="md-6 sm-12">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <BookListItem key={book._id}>
    
                    </BookListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
      </>
 
    );
  }
}

export default SavedBooks;