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
  title,
  authors,  
  about,
  thumbnail

}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-8 sm-9">
              <h3>{title}</h3>
            <p>
              <span className="p">Authors:</span> {authors}
            </p>
            <p>
              <span className="p">About:</span> {about}
            </p>
            
          </Col>
          <Col size="xs-4 sm-3">
          <div role="image">
          <img src={thumbnail} alt={title}></img>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary" id="view">View</button>
            <button type="button" className="btn btn-secondary" id="save">Save</button>
          </div>
          </div>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
