import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Button from "../components//Button";
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";
import API from "../components/utils/API";

class Saved extends Component {
    state = {
        book: {}
      };

    // componentDidMount() {
    //     API.saveBook(this.props.match.params.id)
    //     .then(res => this.setState({ book: res.data }))
    //     .catch(err => console.log(err));
    //   }


render() {
    return(
        <Jumbotron />
    )
}

}




export default Saved;