const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="api/vi/products">Product route</a>')
})

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(port, console.log(`Server is listening to port ${port}...`));
    } catch (err) {
        console.log(err);
    }
}

start();