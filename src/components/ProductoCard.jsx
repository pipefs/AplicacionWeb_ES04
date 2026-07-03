function ProductoCard({nombre, imagen, masInformacion}) {
    return (
        <div class="card" style={{
            width: "18rem",
            flexShrink: 1,
            flexGrow: 1,
        }}>
            <img class="card-img-top" src={imagen} alt={nombre} style={{height: "200px",width:"100%", objectFit: "contain", padding:"10px"}}/>
            <div class="card-body">
                <h4 class="card-title">{nombre}</h4>
                <button class="btn btn-primary" onClick={masInformacion}>Mas informacion</button>
            </div>
        </div>

    )
}

export default ProductoCard