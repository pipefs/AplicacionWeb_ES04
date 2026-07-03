function ProductoCard({nombre, imagen, masInformacion}) {
    return (
        <div class="card" style={{width: "18rem"}}>

            <img class="card-img-top" src={imagen} alt={nombre}/>
            <div class="card-body">
                <h4 class="card-title">{nombre}</h4>
                <button class="btn btn-primary" onClick={masInformacion}>Mas informacion</button>
            </div>
        </div>

    )
}

export default ProductoCard