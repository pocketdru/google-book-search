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
    this.myRef = React.createRef();
    API.search(this.state.bookSearch)
      .then(res => {
        console.log(res.data.items);
        this.setState({ books: res.data });
        console.log(res.data.items[0].volumeInfo.description);
        console.log(res.data.items[0].id)
        this.setState( { books: res.data.items });
        console.log(this.state.books);
        console.log(this.state.books.length);
      })
      .catch(err => console.log(err));
  }; 


//НАШЛА В ЧЕМ БАГ: ИСПРАВИТЬ ПУТИ В JSON ответе по примеру 
// line 51 is an example



  handleSaveButton = event => {
    // console.log(event.target.parent());
    event.preventDefault();
    console.log(this.state.books);
    console.log(this.state.books[1].volumeInfo.title);
    console.log(this.state.books[1].volumeInfo.authors[0]);
    console.log(this.state.books[1].volumeInfo.description);
    console.log(this.state.books[0].volumeInfo.imageLinks.smallThumbnail);

    let bookData =  JSON.parse(event.target.getAttribute('value'))
    console.log(event.target)

    bookData = {
        title: this.state.books[1].volumeInfo.title,
      author: this.state.books[1].volumeInfo.authors[0],
      about: this.state.books[1].volumeInfo.description,
      thumbnail: this.state.books[1].volumeInfo.imageLinks.smallThumbnail
    }

    API.saveBook(bookData)
    // API.saveBook({
    //   title: this.state.books[1].volumeInfo.title,
    //   author: this.state.books[1].volumeInfo.authors[0],
    //   about: this.state.books[1].volumeInfo.description,
    //   thumbnail: this.state.books[1].volumeInfo.imageLinks.smallThumbnail
    //   title: "Mary",
    //   author: "dfds",
    //   about: "dfds",
    //   image: "fdfsdf"
    // })
    .then(res => {
        console.log("Book saved!");
    })
    .catch(err => console.log(err))
    
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
                   {this.state.books && this.state.books.length && this.state.books.map((book, index) => {
                     return (
                    <div key={book.id} id="f">
                       <BookListItem
                    //    key={this.state.books[index].id}
                       id= {this.state.books[index].id}
                       title={book.volumeInfo.title}
                       author={this.state.books[index].volumeInfo.authors[0]}
                       about={this.state.books[index].volumeInfo.description}
                       thumbnail={this.state.books[index].volumeInfo.imageLinks.smallThumbnail}     
                        />
                        <SaveBtn onClick={this.handleSaveButton}/>
                    </div>
                     )
                   })
                }
               </BookList>
            {/* <BookList> */}
                   {/* {this.state.books.map(book => {
                     return (
                       <BookListItem
                       key={book.id}
                       id= {book.id}
                       title={book.title}
                       author={book.author}
                       about={book.description}
                       thumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                       onClick={this.handleSaveButton}
                        />
                    
                     )
                   })
                } */}
               {/* </BookList> */}
            </Col>
          </Row>
        </Container>
        </div>
      )
  }
}
  export default Books;
