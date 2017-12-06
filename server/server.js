const express = require('express');
const port = process.env.PORT || 3000;
const website = require('../website/index.html');

var app = express();

app.get('/', (req, res) => {
  res.send(website)
  })
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
