import { useState } from "react"
import ProductoCard from "./ProductoCard.jsx"

function ListaProductos() {
    const [paginaActual, setPaginaActual] = useState(0)

    // "base de datos" de los productos.
    // Aqui se agregaran para que sea posible implementar la "pagination".
        
    let productos = [
        {
            nombre: "Samsung J2 Prime",
            imagen: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/samsung_sm_g532m_16_gld_samaung_j2_prime_g532m_1520953541_1395830.jpg",
            descripcion: "blabla"
        },
        {
            nombre: "Samsung galaxy A07",
            imagen: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQXvDGtaJ-8Kl1gRbowFx-JlefzdXqnvLS0qUFSkb5nhynb5mvaOcPYkzQMqmvEssnTX8toSkZ-21dcU1_cY8Y_tIwJ0MShvfqaZyXCaIlGfwSNs5RQPrHqbAo",
            descripcion: "blabla"
        },
        {
            nombre: "Samsung galaxy S26",
            imagen: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTlB7V2Da5oO6E7fpcv3vraoqT_5FLcqCu-fSGG79fseW-h28oGH_0uT4YbIKGBYUnzDLLKVwzLYnL8BrqtFT9gL0yj35zLaQ",
            descripcion: "blabla"
        },
        {
            nombre: "samsung j2 prime",
            imagen: "url o direccion",
            descripcion: "blabla"
        },
        {
            nombre: "samsung j2 prime",
            imagen: "url o direccion",
            descripcion: "blabla"
        },
        {
            nombre: "samsung j2 prime",
            imagen: "url o direccion",
            descripcion: "blabla"
        }, {
            nombre: "samsung j2 prime",
            imagen: "url o direccion",
            descripcion: "blabla"
        }, {
            nombre: "samsung j2 prime",
            imagen: "url o direccion",
            descripcion: "blabla"
        }, {
            nombre: "samsung j2 prime",
            imagen: "url o direccion",
            descripcion: "blabla"
        }, {
            nombre: "samsung j2 prime",
            imagen: "url o direccion",
            descripcion: "blabla"
        },
        {
            nombre: "samsung j2 prime",
            imagen: "url o direccion",
            descripcion: "blabla"
        },
        {
            nombre: "samsung j2 prime",
            imagen: "url o direccion",
            descripcion: "blabla"
        }, {
            nombre: "samsung j2 prime",
            imagen: "url o direccion",
            descripcion: "blabla"
        }, {
            nombre: "samsung j2 prime",
            imagen: "url o direccion",
            descripcion: "blabla"
        }, {
            nombre: "samsung j2 prime",
            imagen: "url o direccion",
            descripcion: "blabla"
        }, {
            nombre: "samsung j2 prime",
            imagen: "url o direccion",
            descripcion: "blabla"
        }, {
            nombre: "samsung j2 prime",
            imagen: "url o direccion",
            descripcion: "blabla"
        },{
            nombre: "samsung j2 prime",
            imagen: "url o direccion",
            descripcion: "blabla"
        },
    ]

    // ! esto no se actualiza cada frame.

    // sistema un poquito mas complicado pero asi
    // no me preocupo por paginar dentro de productos.
    const productosPorPagina = 5

    const totalPaginas = productos.length / productosPorPagina
    const inicio = paginaActual * productosPorPagina
    const productosVisibles = productos.slice(inicio, inicio + productosPorPagina)

    const productosMostrados = []
    for (let i = 0; i < productosVisibles.length; i++) {
        productosMostrados.push(<ProductoCard />)
    }

    const paginaSiguiente = (e) => {
        e.preventDefault()
        if (paginaActual < totalPaginas - 1) {
            setPaginaActual(paginaActual + 1)
        }
    }

    const paginaAnterior = (e) => {
        e.preventDefault()
        if (paginaActual > 0) {
            setPaginaActual(paginaActual - 1)
        }

    }

    return (
        <div class="bg-body-tertiary" style={{ padding: "0px 16px", borderRadius: "16px" }}>
            <h1 style={{ paddingTop: "16px" }}>Smartphones</h1>
            <div style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "4px"
            }}>
                {productosMostrados}
            </div>
            <nav style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "12px"
            }}>
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="" onClick={paginaAnterior}>Retroceder</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="" onClick={paginaSiguiente}>Siguiente</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default ListaProductos