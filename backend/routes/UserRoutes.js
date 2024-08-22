const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/AuthMiddleware");
const AsyncWrapper = require("../middleware/AsyncWrapper");
const UserModel = require("../models/UserModel");
const BookModel = require("../models/BookModel");

const router = express.Router();

// Registering the user
router.post(
  "/register",
  AsyncWrapper(async (req, res) => {
    const { name, email, password } = req.body;
    if (!email || !name || !password) {
      return res.status(400).send({ error: "Enter all fields" });
    }

    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(400).send({ error: "User exists" });
    }
    const hashedPassword = await bcrypt.hashSync(password, 8);
    const user = new UserModel({ name, email, password: hashedPassword });
    await user.save();
    return res.status(201).send({
      data: user,
      message: "User registered successfully",
    });
  })
);

// Logging in the user
router.post(
  "/login",
  AsyncWrapper(async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ _id: user._id }, "library_management");
    user.password = "";
    return res.send({ user, token });
  })
);

// Getting books burrowed by user
router.get(
  "/borrowed-books",
  authMiddleware,
  AsyncWrapper(async (req, res) => {
    await req.user.populate("borrowedBooks");
    return res.send(req.user.borrowedBooks);
  })
);

// Burrowing book
router.post(
  "/borrow-book/:bookId",
  authMiddleware,
  AsyncWrapper(async (req, res) => {
    const { bookId } = req.params;
    const book = await BookModel.findById(bookId);

    if (!book || !book.available) {
      return res.status(400).send({ error: "Book is not available" });
    }

    if (!req.user.canBorrowMoreBooks()) {
      return res.status(400).send({ error: "Borrowing limit reached" });
    }

    req.user.borrowedBooks.push(book);
    await req.user.save();

    book.available = false;
    await book.save();

    return res.send({
      message: "Book Added",
    });
  })
);

// Returning Book
router.post(
  "/return/:bookId",
  authMiddleware,
  AsyncWrapper(async (req, res) => {
    const bookId = req?.params.bookId;
    const userId = req?.user?._id;

    const user = await UserModel.findById(userId).populate("borrowedBooks");
    const book = await BookModel.findById(bookId);

    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }

    const bookIndex = user.borrowedBooks.findIndex(
      (b) => b._id.toString() === bookId
    );

    if (bookIndex === -1) {
      return res
        .status(400)
        .send({ message: "This book is not borrowed by the user" });
    }

    user.borrowedBooks.splice(bookIndex, 1);
    book.available = true;
    await user.save();
    await book.save();

    res.status(200).send({ message: "Book returned successfully" });
  })
);

module.exports = router;
