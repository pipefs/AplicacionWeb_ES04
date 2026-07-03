import { useState } from "react"
import ProductoCard from "./ProductoCard.jsx"

function ListaProductos() {
    // "base de datos" de los productos.
    // Aqui se agregaran para que sea posible implementar la "pagination".
    let productos = {
        // nombre del celu
        "samsung j2 prime": {
            nombre: "Samsung J2 Prime",
            imagen: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/samsung_sm_g532m_16_gld_samaung_j2_prime_g532m_1520953541_1395830.jpg",
            descripcion: "blabla"
        },
        "samsung galaxy a07": {
            nombre: "Samsung galaxy A07",
            imagen: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQXvDGtaJ-8Kl1gRbowFx-JlefzdXqnvLS0qUFSkb5nhynb5mvaOcPYkzQMqmvEssnTX8toSkZ-21dcU1_cY8Y_tIwJ0MShvfqaZyXCaIlGfwSNs5RQPrHqbAo",
            descripcion: "blabla"
        },
        "samsung galaxy s26": {
            nombre: "Samsung galaxy S26",
            imagen: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTlB7V2Da5oO6E7fpcv3vraoqT_5FLcqCu-fSGG79fseW-h28oGH_0uT4YbIKGBYUnzDLLKVwzLYnL8BrqtFT9gL0yj35zLaQ",
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
                nombre={productos["samsung j2 prime"].nombre}
                imagen={productos["samsung j2 prime"].imagen}
                />
                <ProductoCard
                nombre={productos["samsung galaxy a07"].nombre}
                imagen={productos["samsung galaxy a07"].imagen}
                />
                <ProductoCard
                nombre={productos["samsung galaxy s26"].nombre}
                imagen={productos["samsung galaxy s26"].imagen}
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