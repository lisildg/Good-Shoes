const Product=require("./product_model")
const user=require("./user_model")
const payment=require("./payment_moedl")
const review=require("./review_model")
const variante=require("./variante.models")
const Category=require("./categoria_model")
const Imagenes=require("./imagenes_model")
const Carrito=require("./carrito_model")

//Un Producto puede tener muchas variantes 
Product.hasMany(variante)
variante.belongsTo(Product)

//Una variante puede tener muchas Imagenes
variante.hasMany(Imagenes)
Imagenes.belongsTo(variante)

//un usuario puede tener 1 carrito de compra



//un Producto puede tener muchas categorias y una categoria puede tener muchos productos

Product.belongsToMany(Category,{through:"Product/Category"})
Category.belongsToMany(Product,{through :"Product/Category"})



module.exports={
    models:{
        Product,user,payment,review,variante,Category,Imagenes,Carrito
    }
}