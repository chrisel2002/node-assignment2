const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse JSON bodies (as middleware)
app.use(bodyParser.json());

// GET API with query and path params
app.get('/api/info/:param1', (req, res) => {
  const queryParam = req.query.q;
  const pathParam = req.params.param1;
  res.json({ queryParam, pathParam });
});

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
