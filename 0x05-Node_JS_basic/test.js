// first method of making a server is 

const http = require('http')
const server = http.createServer((req, res) => {
    console.log('Request made')
})

// Second method of making a server is

const app = http.createServer()

app.on('request', (_, res) => {
    console.log('Made request')
})

app.listen(3000, 'localhost', () => {
    console.log('Server is running on port 3000')
})