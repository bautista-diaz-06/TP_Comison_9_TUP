const express = require('express')
const dotenv = require('dotenv')
const mysql = require('mysql2')

const app = express()

app.use(express.json())
dotenv.config()

export const connection = mysql.createConnection({

})

app.listen(process.env.PORT, () => {

})