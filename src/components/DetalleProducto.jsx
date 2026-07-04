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
                <h4>Especificaciones:</h4>
                <ul>
                    {/*El signo de interrogación evita errores si alguna propiedad no existe */}
                    <li>RAM: {producto?.especificaciones?.ram}</li>
                    <li>Almacenamiento: {producto?.especificaciones?.almacenamiento}</li>
                    <li>Batería: {producto?.especificaciones?.bateria}</li>
                    <li>Cámara: {producto?.especificaciones?.camara}</li>
                </ul>
            </div>
        </div>
    )
}

export default DetalleProducto;
