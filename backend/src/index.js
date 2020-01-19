const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
mongoose.connect(
  'mongodb+srv://gustavo-oministack:gustavo-oministack@cluster0-m7aos.mongodb.net/week10?retryWrites=true&w=majority',
  { 
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);