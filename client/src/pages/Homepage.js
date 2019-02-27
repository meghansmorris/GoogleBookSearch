import React from "react";
import { Col, Container, Row } from "../components/Grid/Grid";


const Homepage = () => {
    return (
        <Container>
            <Row>
                <Col size="md-4"></Col>
                <Col size="md-8">
                <span>
                    <a className="btn btn-lg btn-primary" href="/search" role="button">Search for a book</a>
                    <a className="btn btn-lg btn-primary ml-2" href="/saved" role="button">View saved books</a>
                </span>
                </Col>
            </Row>
        </Container>
    )
} 

export default Homepage;