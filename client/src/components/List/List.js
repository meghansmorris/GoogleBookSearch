import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import { Container, Row, Col } from "../Grid/Grid";


export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
//this is the details of the recipe item
export function BookListItem(props) {
  console.log(props);
return (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          {/* Use the or to put a back up -- if thumbnail load OR placeholder */}
          <Thumbnail src={props.thumbnail || "https://via.placeholder.com/123?text=No+Image"} />
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.title}</h3>
          <p>
            Author: {props.author}
            Description: {props.description}
          </p>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={props.href}
          >
           View Book on Google
          </a>
        </Col>
      </Row>
    </Container>
  </li>
);
}