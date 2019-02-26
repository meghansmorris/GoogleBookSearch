import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid/Grid";
import Search from "../components/Search/Search";
import API from "../utils/API";

class Searchpage extends Component {
  state = {
    book: {}
  };
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id


//   componentDidMount() {
//     //will give us the ID of the book we want from the URL
//     API.getBook(this.props.match.params.id)
//       .then(res => this.setState({ book: res.data }))
//       .catch(err => console.log(err));
//   }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Search />
          </Col>
        </Row>
  
      </Container>
    );
  }
}

export default Searchpage;