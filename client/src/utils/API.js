import axios from "axios";
import apiKey from "../utils/googleAPI/key";

// export default {
//   getBooks: function() {
//     return axios.get("/api/books");
//     // return axios.get("/api/books", { params: { q: query } });
//   },

export default {
  getNewBooks: function(query) {
    const baseURL = `https://www.googleapis.com/books/v1/volumes?q=intitle:${query}&key="${apiKey}`;
    return axios.get(baseURL);
  },
  getBooks: function() {
    return axios.get("/api/books/");
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  saveBook: function(bookData) {
    return axios.post("/api/books/", bookData);
  }
};
