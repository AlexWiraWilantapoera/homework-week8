var express = require("express");
var router = express.Router();
var pool = require("./queries.js");

router.get("/", function (req, res) {
  res.send("GET route on things.");
});

router.get("/actors", function (req, res) {
  pool.query(`SELECT * FROM actor`, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

router.get("/films", (req, res) => {
  pool.query(`SELECT * FROM film`, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

router.get("/categories", (req, res) => {
  pool.query(`SELECT * FROM category`, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

router.get("/category/:id", (req, res) => {
  pool.query(`SELECT * FROM category WHERE category_id=${req.params.id}`, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

router.get("/film-by-category/:name", (req, res) => {
  pool.query(`SELECT f.title AS movie_title, c.name AS category FROM film f JOIN film_category fc ON f.film_id=fc.film_id JOIN category c ON c.category_id=fc.category_id WHERE c.name = '${req.params.name}'`, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

router.get("/actor/:id", (req, res) => {
  pool.query(`SELECT * FROM actor WHERE actor_id=${req.params.id}`, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

router.get("/film/:id", (req, res) => {
  pool.query(`SELECT * FROM film WHERE film_id=${req.params.id}`, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

router.post("/", function (req, res) {
  res.send("POST route on things.");
});

module.exports = router;
