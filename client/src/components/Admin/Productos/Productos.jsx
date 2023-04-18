import React,{useState} from 'react'
import { useSelector } from 'react-redux'
function Productos() {
  const {products}=useSelector((state)=>state)
  const onSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario al servidor
  };
  const [nombreProducto, setNombreProducto] = useState('');
  const [descripcionProducto, setDescripcionProducto] = useState('');
  const [precioProducto, setPrecioProducto] = useState('');

  return (
    <div>
{/* para el caso que no haya productos */}
{products.length==0 && (<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Aun no has Cargado Ningun Producto</h1>
      <p className="py-6">Agrega algun producto cabron !</p>
      <label htmlFor="my-modal-4" className="btn">Agregar Producto</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer">
  <label className="modal-box relative" htmlFor="">
  <form onSubmit={onSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="nombreProducto" className="block font-medium text-gray-700 mb-2">
          Nombre del producto
        </label>
        <input
          type="text"
          id="nombreProducto"
          name="nombreProducto"
          value={nombreProducto}
          onChange={(e) => setNombreProducto(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="descripcionProducto" className="block font-medium text-gray-700 mb-2">
          Descripción del producto
        </label>
        <textarea
          id="descripcionProducto"
          name="descripcionProducto"
          value={descripcionProducto}
          onChange={(e) => setDescripcionProducto(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="precioProducto" className="block font-medium text-gray-700 mb-2">
          Precio del producto
        </label>
        <input
          type="number"
          id="precioProducto"
          name="precioProducto"
          value={precioProducto}
          onChange={(e) => setPrecioProducto(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Agregar producto
      </button>
    </form>
  </label>
</label>
    </div>
  </div>
</div>)

}

    </div>
  )
}

export default Productos