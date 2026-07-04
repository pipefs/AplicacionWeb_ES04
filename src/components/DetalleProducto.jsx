function DetalleProducto({ producto }) {
    if (!producto) {
        return (<p>Oprima el boton "Mas información" para mostrar la información del producto aca.</p>)
    }

    return (
        <div>
            <img src={producto.imagen} alt={producto.nombre} style={{ width: "200px" }} />
            <div>
                <h2>{producto.nombre}</h2>
                <h3>Precio: {producto.precio}</h3>
                <p>{producto.descripcion}</p>
            </div>
        </div>
    )
}

export default DetalleProducto;
