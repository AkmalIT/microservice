const express = require('express');
const app = express();
const port = 3001;

const postRoutes = require('./router');

app.use(express.json());
app.use('/posts', postRoutes);

app.listen(port, () => {
  console.log(`Post service listening at http://localhost:${port}`);
});
