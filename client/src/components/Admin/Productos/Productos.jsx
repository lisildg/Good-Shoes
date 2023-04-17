import React from 'react'
import { useSelector } from 'react-redux'
function Productos() {
  const {products}=useSelector((state)=>state)
  return (
    <div>
{/* para el caso que no haya productos */}
{products.length==0 && (<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Aun no has Cargado Ningun Producto</h1>
      <p className="py-6">Agrega algun producto cabron !</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>)

}

    </div>
  )
}

export default Productos