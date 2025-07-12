// Import the Express
const express = require('express')

// Import the body-parser middleware
const bodyParser = require('body-parser')

// Create rest object
const app = express()

app.use()
// Use the body-parser middleware to parse JSON payloads
app.use(bodyParser.json())

// Use the body-parser middleware to parse URL-encoded payloads
app.use(bodyParser.urlencoded({ extended: true }))

// Use the body-parser middleware to parse raw and text content
app.use(bodyParser.raw())
app.use(bodyParser.text())

// Define a POST route to handle form submissions or JSON payloads
app.post('/submit', (req, res) => {
    // Log the parsed request body to the console
    console.log(req.body)

    // Send a response back to the client
    res.send('Form submitted successfully!')
})

// Specify the port number to listen on
const port = 8080

// Start the Express.js application
app.listen(port, () => {
    // Log a message to the console indicating that the server has started
    console.log(`Server started on port ${port}`)
})
