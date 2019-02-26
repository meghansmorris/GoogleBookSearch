import axios from "axios";

// The get method retrieves books from the server
// It accepts a "query" or term to search the api
export default {
  getBooks: function(query) {
    return axios.get("/api/books", { params: { q: query } });
  }
};