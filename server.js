/* This is the server.js file. It is the entry point for the application. It is where we set up our
express server and connect it to MongoDB using mongoose. It also requires the routes we created in
routes/api.js. We define a PORT and set it to 3001. We'll use this later in our config file when we
set up the proxy for the client. */
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/the-socials-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost: ${PORT}`));