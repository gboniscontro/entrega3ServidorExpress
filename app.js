const { Contenedor, Producto } = require('./contenedor')
let contenedor = new Contenedor('./productos.txt')


async function GrabarArchivo() {
    for (let i = 1; i <= 3; i++) {
        let p1 = new Producto("Titulo " + i, 150, "iconfind.png")
        await contenedor.save(p1)
    }
}




GrabarArchivo().then(
    () => {

    })



console.log('Server running at http://127.0.0.1:3000/');

const express = require('express')
const app = express()
const port = 3000
 
app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'))
app.get('/productos', (req, res) => res.send(contenedor.getAll()))
app.get('/productosRandom', (req, res) =>{ 
	let max = contenedor.productos.length
	let min = 0
	let id = Math.floor(Math.random() * (max - min+1) + min)
	res.send(contenedor.getById(id))	
	})

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))
server.on('error', (error) => console.log('error de servidor', error))
