import { useState } from "react"
import ProductoCard from "./ProductoCard.jsx"

function ListaProductos() {
    // "base de datos" de los productos.
    // Aqui se agregaran para que sea posible implementar la "pagination".
    let productos = {
        // nombre del celu
        "samsung j2 prime": {
            imagen: "https://http2.mlstatic.com/D_NQ_NP_662421-MLA31003080204_062019-O.webp",
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
                <ProductoCard 
                    nombre="Samsung J2 Prime"
                    imagen="https://http2.mlstatic.com/D_NQ_NP_900662-MLA44670054215_012021-O.webp"
                />
                
                <ProductoCard 
                    nombre="iPhone 13"
                    imagen="https://http2.mlstatic.com/D_NQ_NP_736168-MLA47781882790_102021-O.webp"
                />
                
                <ProductoCard 
                    nombre="Xiaomi Redmi Note 12"
                    imagen="https://http2.mlstatic.com/D_NQ_NP_603837-MLU72648831950_112023-O.webp"
                />
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