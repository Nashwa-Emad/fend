// const dotenv = require('dotenv');
// dotenv.config();
// console.log(`Your API key is ${process.env.API_KEY}`);
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors');
const app = express()


app.use(cors());
app.use(express.static('dist'))
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
console.log(__dirname)

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
        //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})