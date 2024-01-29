import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

app.get('/', (req, res) => {
    console.log('99 Bottles of beer on the wall <a href="/98">take one down, pass it around</a>');
    res.send(
      '99 Bottles of beer on the wall <a href="/98">take one down, pass it around</a>'
    );
  });
  
app.get('/:number_of_bottles', (req, res) => {
    const numBottles = parseInt(req.params.number_of_bottles, 10);
    if (numBottles === 0) {
      res.send(
        'No more bottles of beer on the wall <a href="/">start over</a>'
      );
    } else {
      res.send(
        `${numBottles} Bottles of beer on the wall <a href="/${numBottles - 1}">take one down, pass it around</a>` +
        ' <a href="/">start over</a>'
      );
    }
});

