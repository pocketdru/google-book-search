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
    clear: [],
    books: [],
    bookSearch: ""
  };
  
 handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    this.setState({ books: this.state.clear})

    API.search(this.state.bookSearch)
      .then(res => {
        console.log(res.data.items);
        const results = res.data.items;
        const collections = [];
        results.map(book => {
          const info = book.volumeInfo;
          const volume = {
            title: info.title,
            author: info.authors,
            description: info.description ? info.description : "Description is not provided",
            image: info.imageLinks.smallThumbnail ? info.imageLinks.smallThumbnail : "http://books.google.com/books/content?id=VO8nDwAAQ…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          };
          collections.push(volume)
        })
        console.log(collections)
        this.setState({ books: collections})
      })
      .catch(err => console.log(err));
  };

  handleSaveButton = event => {
    event.preventDefault();
    var bookData = JSON.parse(event.target.getAttribute("value"));
    console.log(bookData);
    console.log(this.state.books.indexOf(bookData))
    API.saveBook(bookData)
      .then(res => {
        console.log(' Book saved!!')
      })
      .catch(err => console.log(err))
    
  };
  
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
                        name="bookSearch"
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
                   {this.state.books.map(book => {
                     return (
                    <div key={book.title} id="f">
                       <BookListItem
                       id= {book.id}
                       title={book.title}
                       author={book.author}
                       about={book.description}
                       thumbnail={book.image}
                       value={book}     
                        />
                        <SaveBtn onClick={this.handleSaveButton} value={JSON.stringify(book)}/>
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
