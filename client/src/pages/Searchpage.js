import React, { Component } from "react";
import API from "../utils/API";
//import { Link } from "react-router-dom";
import { Col, Container, Row } from "../components/Grid/Grid";
import { List, BookListItem } from "../components/List/List";
import { Input, FormBtn } from "../components/Search/Search";

class Books extends Component {
  state = {
    books: [],
    bookSearch: "",
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

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => {
        console.log(res.data);
        this.setState({ books: res.data });
      })
      .catch(err => console.log(err));
  };

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", description: "", image: "", link: "", date: "" })
      )
      .catch(err => console.log(err));
  };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title) {
  //     API.saveBook({
  //       title: this.state.title
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
        <>
        <Container>
          <Row>
          <Col size="md-6">
            <form>
              <Input
                value={this.state.bookSearch}
                onChange={this.handleInputChange}
                name="bookSearch"
                placeholder="Enter a title or keyword"
              />
              <FormBtn
                disabled={!(this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Find Books
              </FormBtn>
            </form>
          </Col>
          </Row>
          <Row>
            <Col size="md-6 sm-12">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <BookListItem 
                      key={book._id}
                      title={book.title}
                      thumbnail={book.image}
                      author={book.author}
                      description={book.description}
                    >
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

export default Books;