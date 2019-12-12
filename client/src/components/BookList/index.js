import React from "react";
import "./style.css";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
    id,
    title,
    author,  
    about,
    thumbnail

}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
        <Col size="xs-8 sm-9" id={id}>
              <h3 id={id}>{title}</h3>
            <h5 id={id}>
              <span className="p">Authors:</span><span id="authors"> {author} </span>
            </h5>
            <p id={id}>
              <span className="p">About:</span><span id="about"> {about} </span>
            </p>
            
          </Col>
          <Col size="xs-4 sm-3">
          <div role="image" id={id}>
          <img src={thumbnail} alt={title}></img>
          <div className="btn-group" role="group" aria-label="Basic example">
          </div>
          </div>
          </Col>
          {/* <SaveBtn/> */}
        </Row>
      </Container>
    </li>
  );
}
