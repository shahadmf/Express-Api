const express = require("express");

const app = express();

const port = 3004;

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/products', (req, res) => {
    res.send({
        products: [
            { id: 1, name: 'Product 1', price: 10 },
            { id: 2, name: 'Product 2', price: 20 },
            { id: 3, name: 'Product 3', price: 30 },
            { id: 4, name: 'Product 4', price: 40 },
            { id: 5, name: 'Product 5', price: 50 },
            
        ]
    });
})

app.listen(port, () => {
    console.log(`server is running at ${port}`)
})