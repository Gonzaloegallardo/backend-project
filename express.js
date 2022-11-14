let Container = require("./main")
const products = new Container("products.txt")
let express = require("express");
const app = express()
const server = app.listen(8080 , ()=> {
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`)
})
app.get("/productos",async (req, res,)=>{
    const allProducts = await products.getAll()
    res.send(allProducts)
})
app.get('/productoRandom', async (req, res) => {
    const product = await products.getRandom()
    res.send(product)
})

app.get('*', (req, res) => {
    res.send('<h1 style="display:flex;justify-content:center;color:red;text-align:center">error, prueba con otra ruta</h1>')
})
app.on('error', error => {
    console.error(`Error en el servidor. ${error}`)
})

server.on('error', error => {
    console.error(`Error en el servidor. ${error}`)
})