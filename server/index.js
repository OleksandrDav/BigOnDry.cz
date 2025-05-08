require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const errorMiddleware = require('./middleware/error-middleware');
const appealRouter = require('./routers/appeal-router');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors())
app.use(cookieParser());


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api/appeal', appealRouter);

app.use(errorMiddleware)

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
