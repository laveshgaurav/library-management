const express = require("express");
const authMiddleware = require("../middleware/AuthMiddleware");
const AsyncWrapper = require("../middleware/AsyncWrapper");
const UserModel = require("../models/UserModel");
const BookModel = require("../models/BookModel");

// Router
const router = express.Router();

// Fetching all the books
router.get(
  "/",
  AsyncWrapper(async (req, res) => {
    const books = await BookModel.find();
    return res.send(books);
  })
);

// Inserting bulk data
router.post(
  "/",
  AsyncWrapper(async (req, res) => {
    let data = req.body.data;
    await BookModel.insertMany(data);
    return res.status(201).send({
      message: "Books Inserted",
    });
  })
);

// Deleting book
router.delete(
  "/:bookId",
  AsyncWrapper(async (req, res) => {
    const { bookId } = req.params;
    const book = await BookModel.findByIdAndDelete(bookId);
    if (!book) {
      return res.status(404).send({ error: "Book not found" });
    }
    return res.send(book);
  })
);

module.exports = router;
