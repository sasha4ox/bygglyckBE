import express from 'express'

const PORT = process.env.PORT || 3000
const app = express();

app.get('/api', (request, response) => {
    response.send('<h1> Hello API</h1>')
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})