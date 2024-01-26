const {Router} = require("express")
const router = new Router()
const pool = require("../db-config/db")


router.get('/', async (req, res) => {
    const users = await pool.query('SELECT * FROM users')
    return res.json(users.rows)
})


module.exports = router