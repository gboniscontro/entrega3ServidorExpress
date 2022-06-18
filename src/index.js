const express = require('express')
const app = express();

const productosRouter = require('./routes/productsRoutes');

const path = require('path')

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, 'public')))


app.use('/api/productos',productosRouter);







app.listen(8080,()=>{
    console.log(`Escuchando en el puerto 8080`);
});