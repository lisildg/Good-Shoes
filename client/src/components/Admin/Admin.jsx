import React from 'react'
import { useState } from 'react'
import Estadisticas from './Estadisticas/Estadisticas'
import Ventas from './Ventas/Ventas'
import Productos from './Productos/Productos'
import Categorias from './Categorias/Categorias'
import Clientes from './Clientes/Clientes'

const EstadisticasSVG=<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
function Admin() {
  const [selectedValue, SetSelectedValue] = useState("Estadisticas")
  const displayComponent=()=>{
    switch (selectedValue) {
      case "Ventas":
        return <Ventas/>
        break;
      case "Estadisticas":
        return <Estadisticas/>
        break;
      case "Productos":
        return <Productos/>
        break;
      case "Categorias":
        return <Categorias/>
        break;
      case "Clientes":
        return <Clientes/> 
    }
  }
  return (

    
    <div className='flex min-h-screen  '>
      <div className='flex-shrink  min-h-screen '>
        <ul className="menu menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box ">
            <li><button onClick={(e)=>SetSelectedValue(e.target.value)} value="Ventas">Ventas</button></li>
        
            <li><button onClick={(e)=>SetSelectedValue(e.target.value)} value="Estadisticas">{EstadisticasSVG} Estadisticas</button></li>
            <li><button onClick={(e)=>SetSelectedValue(e.target.value)} value="Productos">Productos</button></li>
            <li><button onClick={(e)=>SetSelectedValue(e.target.value)} value="Clientes">Clientes</button></li>
            <li><button onClick={(e)=>SetSelectedValue(e.target.value)} value="Categorias">Categorias</button></li>
        
          </ul>
      </div>
  
  <div className='flex-grow bg-base-200 min-h-screen'>
    {displayComponent()}
  </div>
  
  </div>
  )
}

export default Admin