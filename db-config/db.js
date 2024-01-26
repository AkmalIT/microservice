const {Pool} = require("pg")

const pool = new Pool({
    host: "your_host",
    port: 5432,
    user: "your_username",
    password: "your_password",
    database: "your_database"
})

module.exports = pool