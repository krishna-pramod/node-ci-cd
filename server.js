const app = require('express')();

const port = process.env.PORT || 3000;

app.get('*', (req, res) => {
  res.send('Hello World from google cloud platform');
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
