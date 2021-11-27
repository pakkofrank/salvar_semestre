const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/templates/index.html'));
})

app.post('/save', (req, res) => {
    console.log(req.body.msg)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})