const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const user = require('./models/usermodel');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/pwdmanager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.post('/create', async (req, res) => {
    const { url, username, password } = req.body;
    console.log('Received data:', { url, username, password });
  
    try {
      const newUser = await user.create({
        url,
        username,
        password,
      });
      res.status(201).json(newUser);
      console.log('New user added:', newUser);
    } catch (err) {
      console.error('Error saving user:', err);
      res.status(500).send(err.message);
    }
  });

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('Server Is Working Fine');
});
