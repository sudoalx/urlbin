const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static("public"))

app.get('/about', (req, res) => {
    const code = `# Welcome to UrlBin
Type your text here. You can type code and you'll 
get it highlighted automatically.`
    res.render('code-display', { code })
})

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/new', (req, res) => {
    res.render('new')
})


app.listen(3000)