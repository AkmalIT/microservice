const express = require("express")
const app = express()
const port = 3000
const userRoutes = require("./router")


app.use(express.json())
app.use('/users', userRoutes)

app.listen(port, () => {console.log(`User service listening at http://localhost:${port}`)})