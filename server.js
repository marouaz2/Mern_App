
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mern', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/', require('./routes/home'));
app.use('/posts', require('./routes/posts'));
app.use('/users', require('./routes/users'));
app.use('/categories', require('./routes/categories'));
app.use('/comments', require('./routes/comments'));

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
