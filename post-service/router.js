const {Router} = require('express');
const router = Router();
const pool = require('../db-config/db');

router.get('/', async (req, res) => {
  const posts = await pool.query('SELECT * FROM posts');
  res.json(posts.rows);
});

module.exports = router;
