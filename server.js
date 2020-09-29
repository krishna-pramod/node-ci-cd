const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(`${__dirname}/client/dist`));

  app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/client/dist/index.html`);
  });
}

app.get('*', (req, res) => {
  res.send('Hello World from google cloud platform');
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
