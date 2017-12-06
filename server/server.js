const express = require('express');
const port = process.env.PORT || 3000;

var app = express();

app.use('/static', express.static('website'));
app.get('/static', (req, res) => {
  res.sendFile('index.html')
})


app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
