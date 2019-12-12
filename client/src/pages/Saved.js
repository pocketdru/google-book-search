import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Button from "../components//Button";
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";
import API from "../components/utils/API";

class Saved extends Component {
    state = {
        books: ['1', '2'],
        bookSearch: ""
      };

    componentDidMount() {
        this.loadBooks();
        console.log(this.state.books);

      }

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

      
    
      handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    

render() {
    return(
        <div className = "container">
        <h1 className="centered">Your Saved Books</h1>
          <section>
          {/* {this.state.books.map(book => {
                    return (
                      <Saved
                      key={book.title}
                      title={book.title}
                      author={book.author}
                      href={book.about}
                      thumbnail={book.thumbnail}
                      value={book}
                      id={book._id}
                      />
                    );
                  })} */}
          </section>
        </div>
    )
}

}




export default Saved;