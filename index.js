const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());    

app.get('/', (req, res) => {
    res.send('server running....')
})
app.get('/login', (req, res) => {
    res.send('login success....')
})

app.listen(port, () => {
    console.log('server listing on port', port)
})