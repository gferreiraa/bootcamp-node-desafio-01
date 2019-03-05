const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('./views', {
  autoescape: true,
  express: app,
  watch: true
})

app.set('view engine', 'njk')

app.get('/', (req, res) => {
  return res.render('index', {
    name: 'Hello World'
  })
})

/* app.get('/', (req, res) => {
  return res.send('Hello World')
})

app.get('/nome/:name', (req, res) => {
  return res.send(`Bem-vindo, ${req.params.name}`)
})

app.get('/outro', (req, res) => {
  return res.send(`Bem-vindo, ${req.query.name}`)
})

app.get('/ok/:name', (req, res) => {
  return res.json({
    message: `Bem-vindo, ${req.params.name}`
  })
}) */

app.listen(3000)
