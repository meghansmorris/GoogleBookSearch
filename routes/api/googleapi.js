const axios = require("axios");
const router = require("express").Router();
const booksController = require("../../controllers/booksController");


router.get("/books", (req, res) => {
    const APIKey = "AIzaSyB5XQczj6S9dAd76X5Calu73SLKuOyDSHs";

  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${req.query}&key="${APIKey}`) //confirmed its working
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;


