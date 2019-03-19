import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../components/utils/API";
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";
import Input from "../components/Input";
import Button from "../components//Button";
import SaveBtn from "../components/SaveBtn";
import "./style.css";
import ViewBtn from "../components/ViewBtn";


class Books extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

 handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    this.setState({ bookSearch: value });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => {
        console.log(res.data.items);
        this.setState({ books: res.data });
        console.log(res.data.items[0].volumeInfo.description);
        console.log(res.data.items[0].id)
        this.setState( { books: res.data.items });
      })
      .catch(err => console.log(err));
  }; 

  handleSaveButton = event => {
    event.preventDefault();
    API.saveBook({
      title: this.state.book.title,
      author: this.state.book.author,
      about: this.state.book.about,
      thumbnail: this.state.book.thumbnail
    })
  }
  
  render() {
      return (
        <div>
          <Jumbotron/>
          <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row className="border">
                    <Col size="xs-9 sm-10">
                      <Input
                        name="recipeSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-9 sm-10">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
               <h1 className="text-center">Nothing to display</h1>
               <BookList>
                   {this.state.books && this.state.books.length && this.state.books.map((book, index) => {
                     return (
                       <div key={book.id} id="f">
                       <BookListItem
                       id= {this.state.books[index].id}
                       title={book.volumeInfo.title}
                       author={this.state.books[index].volumeInfo.authors[0]}
                       about={this.state.books[index].volumeInfo.description}
                       thumbnail={this.state.books[index].volumeInfo.imageLinks.smallThumbnail}
                       />
                       <SaveBtn onClick={this.handleFormSubmit}/>
                       <ViewBtn />

                       </div>
                     )
                   })
                }
               </BookList>
            
            </Col>
          </Row>
        </Container> 
        </div>
      )
  }
}
  export default Books;
