import { useState } from "react"
import ProductoCard from "./ProductoCard.jsx"

function ListaProductos() {
    // "base de datos" de los productos.
    // Aqui se agregaran para que sea posible implementar la "pagination".
    let productos = {
        // nombre del celu
        "samsung j2 prime": {
            imagen: "url o direccion",
            descripcion: "blabla"
        }
    }

    return (
        <div class="bg-body-tertiary" style={{ padding: "0px 16px", borderRadius: "16px" }}>
            <h2 style={{ paddingTop: "16px" }}>Smartphones</h2>
            <div style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                overflowX: "hidden",
                paddingTop: "4px"
            }}>
                <ProductoCard />
                <ProductoCard />
                <ProductoCard />
            </div>
            <nav style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "12px"
            }}>
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Retroceder</a></li>
                    <li class="page-item"><a class="page-link" href="#">Siguiente</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default ListaProductos