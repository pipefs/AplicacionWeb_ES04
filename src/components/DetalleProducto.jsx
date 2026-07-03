function DetalleProducto({producto}) {
    return (
        <div>
            <img src={producto.imagen} alt={producto.nombre} style={{width: "200px"}} />
            <div>
                <h2>{producto.nombre}</h2>
              <p>{producto.descripcion}</p>
           </div>
       </div>
   )
}

export default DetalleProducto;