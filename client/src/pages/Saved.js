import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../components/utils/API";

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

      
    
      // handleInputChange = event => {
      //   // Destructure the name and value properties off of event.target
      //   // Update the appropriate state
      //   const { name, value } = event.target;
      //   this.setState({
      //     [name]: value
      //   });
      // };
    

render() {
    return(
        <div className = "container">
        <h1 className="centered">Your Saved Books</h1>
          <div>
            <ul className="list-group">
              {this.state.books.map(book => {
                    return (
                      <li className="list-group-item"
                      key={book.title}
                      title={book.title}
                      author={book.author}
                      href={book.about}
                      thumbnail={book.thumbnail}
                      value={book}
                      id={book._id}
                      >
                        <h3 id={book._id}>{book.title}</h3>
                        <h5 id={book._id}>
                          <span className="p">Authors:</span><span id="authors"> {book.author} </span>
                        </h5>
                      </li>
                    );
                  })}
            </ul>      
          </div>
        </div>
    )
}

}




export default Saved;