import React, { Component } from "react";
import API from "../utils/API";
import { Col, Container, Row } from "../components/Grid/Grid";
import { List, BookListItem } from "../components/List/List";
import { Input, FormBtn } from "../components/Search/Search";

class Books extends Component {
  state = {
    search: "",
    books: [], //results
    title: "",
    author: "",
    description: "",
    save: false,
    image: "",
    link: "",
    date: ""
  };

  // componentDidMount() {
  //   //this.loadBooks();
  // }

  handleInputChange = event => {
      // Destructure the name and value properties off of event.target
      // Update the appropriate state
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
      console.log(value);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getNewBooks(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data)
        this.setState({ books: res.data, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };


  render() {
    return (
        <>
        <Container>
          <Row>
          <Col size="md-6">
            <form>
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="bookSearch"
                placeholder="Enter a title or keyword"
              />
              <FormBtn
                // disabled={!(this.state.title)}
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