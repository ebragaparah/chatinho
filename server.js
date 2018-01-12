const express = require('express')
const app = express()

app.use('view engine', 'ejs')

app.get('/', (request, response) => {
    response.send('tc de onde')
})

app.listen(3001, () => { console.log('fala, fio') })