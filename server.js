const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(routes)

app.listen(3000, () => {
    console.log('Servidor Usos de IA rodando na porta 3000')
})