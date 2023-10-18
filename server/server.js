const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const app = express()





// --- MIDDLEWARE --
app.use(express.json(), express.urlencoded({ extended: true }))



require("dotenv").config()

require("./config/mongoose.config")

require("./routes/routes")(app)

const mySecret = process.env.SECRET_KEY;

const port = process.env.PORT

const jwt = require("jsonwebtoken");

app.use(cookieParser)

app.use(cors({credentials: true, origin: 'http://localhost:5000'}));



app.listen(port, () => {
    console.log(`>>>>> Server is running on port ${port} `)
})