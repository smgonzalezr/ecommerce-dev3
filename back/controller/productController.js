//esquema de productos
const producto=require("../models/products")

//importación de fetch (previamente instalado via npm...)
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));


//GET...
exports.getProducts=async(req,res,next) => {
    const productos = await producto.find();
    res.status(200).json({
        success:true,
        quantity: producto.length,
        productos
    })
}

//GET BY ID...
exports.getProductById = async (req,res,next) => {
    const productoID = await producto.findById(req.params.id);
    //se debe hacer verificación a fin de validar si el producto existe o no..
    if (!producto){
        return res.status(404).json({
            success: false,
            message: "Product not found..."
        })
    }
    res.status(200).json({
        success:true,
        message:"Product found!...",
        productoID
    })
}

//PUT...
exports.updateProduct = async(req,res,next) =>{
    let product = await producto.findById(req.params.id);
    //se debe hacer verificación a fin de validar si el producto existe o no..
    if (!product){
        return res.status(404).json({
            success: false,
            message: "Product not found..."
        })
    }
    //si existe se ejecuta la actualizacion...
    product = await producto.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    });
    //ok si fue actualizado...
    res.status(200).json({
        success: true,
        message: "Product updated!...",
        product
    })
}

//POST...
exports.newProduct=async (req, res, next) => {
    //const product = await product.create(req.body)
    const product = await producto.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}

//DELETE...
exports.deleteProduct = async(req,res,next)=>{
    const product = await producto.findById(req.params.id);
    //se debe hacer verificación a fin de validar si el producto existe o no..
    if (!product){
        return res.status(404).json({
            success: false,
            message: "Product not found..."
        })
    }
    await product.remove();
    res.status(200).json({
        success:true,
        message:"Product deleted..."
    })
}

//FETCH... puede reemplazar el postman
//ver productos..
function seeProducts(){
    fetch('http://localhost:4000/api/products')
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.error(err))
}
//seeProducts();

//ver productos by id..
function seeProductById(id){
    fetch('http://localhost:4000/api/products/'+id)
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.error(err))
}
//seeProductById('636878ce40786f0dc820b263')