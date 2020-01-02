import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../components/utils/API";
import { BookList, BookListItem } from "../components/BookList";


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
            // console.log(response.data)
          )
          .catch(err => console.log(err));

          console.log(this.state.books);
      };

render() {
    return(
        <div className = "container">
        <h1 className="centered">Your Saved Books</h1>
        <BookList>
                   {this.state.books.map(book => {
                     return (
                    <div key={book._id} id="f">
                       <BookListItem
                       id= {book.id}
                       title={book.title}
                       author={book.author}
                       about={book.description}
                       thumbnail={book.image}
                       value={book}     
                        />
                    </div>
                     )
                   })
                }
               </BookList>
        </div>
    )
}

}




export default Saved;