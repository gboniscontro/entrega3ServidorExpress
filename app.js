const { Contenedor, Producto } = require('./contenedor')
let contenedor = new Contenedor('./productos.txt')
var http = require('http');
let connectedserver = http.createServer(function (request, response) {
	response.writeHead(200, { 'Content-Type': 'text/plain' });
	let hoy = new Date()
	let hora = hoy.getHours()
	if (hora >= 6 && hora <= 12)
		response.end(`Buenos Dias  `)
	else if (hora >= 13 && hora <= 19)
		response.end(`Buenas Tardes  `)
	else // if (hora >=20 && hora <=5)
		response.end(`Buenas Noches  `)
}).listen(8080, () => {
	console.log(`Servidor escuchando en el puerto ${connectedserver.address().port}`)
});

console.log('Server running at http://127.0.0.1:8080/');

const express = require('express')
const app = express()
const port = 3000
 
app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'))
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))
server.on('error', (error) => console.log('error de servidor', error))
