const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});

userSchema.methods.canBorrowMoreBooks = function () {
  return this.borrowedBooks.length < 2;
};

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
