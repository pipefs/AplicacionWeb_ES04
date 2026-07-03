function ProductoCard({nombre, imagen, masInformacion}) {
    return (
        <div class="card" style={{
            width: "100%",
            flexShrink: 1,
            flexGrow: 1,
        }}>
            <img class="card-img-top" src={imagen} alt={nombre} style={{height: "200px", width:"100%", objectFit: "contain", padding:"10px"}}/>
            <div class="card-body">
                <h5 class="card-title" style={{overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{nombre}</h5>
                <button class="btn btn-primary" style={{width: "100%"}}  onClick={masInformacion}>
                    <h6 style={{overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>Mas información</h6>
                </button>
            </div>
        </div>

    )
}

export default ProductoCard