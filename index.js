import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  res.send('This is a POST request!');
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
