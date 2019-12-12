import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  search: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?", { params: { q: query } });
  },

  saveBook: function(bookData) {
    console.log(bookData)
    console.log("Book saved");
    return axios.post("/api/books/", bookData);
  },

  getBooks: function(){
    console.log('getting books')
    return (axios.get('/api/books/')
    );
  },
  deleteBook: function(id){
    return axios.delete('/api/books/' + id)
  }
};  