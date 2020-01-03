import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../components/utils/API";
import { BookList, BookListItem } from "../components/BookList";
import SaveBtn from "../components/SaveBtn";


class Saved extends Component {
    state = {
        books: [],
        bookSearch: ""
      };

    componentDidMount() {
        this.loadBooks();
        console.log(this.state.books);

      };

      loadBooks = () => {
        API.getBooks()
          .then(response =>
            this.setState({books:response.data}, function () {
                console.log(this.state.books);
            })
          )
          .catch(err => console.log(err));

          console.log(this.state.books);
      };

      handleDeleteSubmit = event => {
        event.preventDefault();

        let bookId = event.target.getAttribute('value');
        console.log(bookId);

        API.deleteBook(bookId)
        .then(res => this.loadBooks())
        .catch(err => console.log(err))
      };

render() {
    return(
      <div>
        <Container>
          <Row>
        <Col size="xs-12">
        <h1 className="centered">Your Saved Books</h1>
        <BookList>
                   {this.state.books.map(book => {
                     return (
                    <div key={book._id} className="f">
                       <BookListItem
                       id= {book.id}
                       title={book.title}
                       author={book.author}
                       about={book.description}
                       thumbnail={book.image}
                       value={book}     
                        />
                        <a className="btn btn-primary" href={book.link} id="save">View</a>
                        <button onClick={this.handleDeleteSubmit} id="save" className="btn btn-light" value={book._id}>Delete</button>

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




export default Saved;