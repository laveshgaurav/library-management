const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const errorHandler = require("./middleware/ErrorHandler");
const userRoutes = require("./routes/UserRoutes");
const bookRoutes = require("./routes/BookRoutes");

// App Initialized
const app = express();
// Initial Middleware
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// Routing
app.get("/", (req, res) => {
  return res.send({
    message: "Backend is up",
  });
});
app.use("/user", userRoutes);
app.use("/book", bookRoutes);

// Final Middleware
app.use(errorHandler); //Error Handling

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  mongoose
    .connect(
      "mongodb+srv://root:root@techbairn.donqm.mongodb-stage.net/E-Commerce?retryWrites=true&w=majority&appName=TechBairn"
    )
    .then(() => console.log("DB Connected"))
    .catch((e) => console.log("Error ==>", e.message));
});
