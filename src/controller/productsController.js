
const { response } = require('express')
const {productos} =  require('../model/productsModel')


module.exports={
    getAll:(request, response) =>{
          return response.status(200).json(productos)
    },
    getById:(request, response) =>{
        try {
            for (let i = 0; i < productos.length; i++)
                if (productos[i].id == id)
                   return response.status(200).json(productos[i])
            return response.status(404).json({error:'Producto no encontrado  '})
        } catch (error) {
             return response.status(404).json({error:'Producto no encontrado try'})
        }

    },
    create:(request, response) =>{ 
            let producto = request.body    
            console.log(producto) 
            producto.id = productos.length>0 ? Number(productos[productos.length-1].id) + 1: 1
            productos.push(producto)
            return response.status(201).json(producto)

    },
    update:(request, response) =>{
        try {
            let id = request.params.id
            let producto = request.body
            
            for (let i = 0; i < productos.length; i++)
                if (productos[i].id == id)
                {
                    productos[i] = producto
                    productos[i].id = id
                    return response.status(200).json(producto)
                }
            return response.status(404).json({error:'Producto no encontrado'})
        } catch (error) {
           return response.status(404).json({error:'Producto no encontrado'})
        }

    },
    delete:(request, response) =>{
        productos.forEach((element, index) => {
                if (element.id == Number(request.params.id)){ 
                    productos.splice(index, 1)
                    return response.status(200).json({message:'Producto borrado exitosamente'})
                }
            })    
         return response.status(404).json({error:'Error en borrado del producto'})
    }
}
