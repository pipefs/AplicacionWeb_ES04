import { useState } from "react"
import ProductoCard from "./ProductoCard.jsx"

const productos = [
    {
        nombre: "Samsung J2 Prime",
        imagen: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/samsung_sm_g532m_16_gld_samaung_j2_prime_g532m_1520953541_1395830.jpg",
        descripcion: "blabla"
    },
    {
        nombre: "Samsung Galaxy A07",
        imagen: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQXvDGtaJ-8Kl1gRbowFx-JlefzdXqnvLS0qUFSkb5nhynb5mvaOcPYkzQMqmvEssnTX8toSkZ-21dcU1_cY8Y_tIwJ0MShvfqaZyXCaIlGfwSNs5RQPrHqbAo",
        descripcion: "blabla"
    },
    {
        nombre: "Samsung Galaxy S26",
        imagen: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTlB7V2Da5oO6E7fpcv3vraoqT_5FLcqCu-fSGG79fseW-h28oGH_0uT4YbIKGBYUnzDLLKVwzLYnL8BrqtFT9gL0yj35zLaQ",
        descripcion: "blabla"
    },
    {
        nombre: "iPhone 13",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlKHSNZxA5FTIJHOhD36jo4ksXj-RlNazuavrbxjUuu8tSQZ-819MNa-4E&s=10",
        descripcion: "blabla"
    },
    {
        nombre: "Xiaomi Redmi Note 12 Pro",
        imagen: "https://storage.comprasmartphone.com/smartphones/xiaomi-redmi-note-12-pro.png",
        descripcion: "blabla"
    },
    {
        nombre: "IPhone 15 Pro",
        imagen: "https://backonline.cl/cdn/shop/files/Apple_iPhone_15_Pro_Black_Titanium_1.jpg?v=1707915103&width=1500",
        descripcion: "blabla"
    },
    {
        nombre: "Xiaomi Poco X6 Pro",
        imagen: "https://i5.walmartimages.cl/asr/056c25af-10f9-4af5-8288-4fa046331a09.c284be24d5c20bc578da5c955e6e1c4a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
        descripcion: "blabla"
    },
    {
        nombre: "Samsung Galaxy S25",
        imagen: "https://miportal.entel.cl/static/062520261722114/images/galaxy-s25-navy-01_337x671.jpg",
        descripcion: "blabla"
    },
    {
        nombre: "Samsung Galaxy A54",
        imagen: "https://cl-dam-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/3840x0/filters:quality(75)/paris/293107999/variant/images/6d4e0f6b-c98c-4f02-ab78-796371a13a09/293107999-0000-001.jpg",
        descripcion: "blabla"
    },
    {
        nombre: "IPhone 17 Pro",
        imagen: "https://msfsale.cl/wp-content/uploads/2025/09/3_22df02d4-37e2-4293-8f4a-5c8b2a0d939e.webp",
        descripcion: "blabla"
    },
]

function ListaProductos({ setUltimoProducto }) {
    const [paginaActual, setPaginaActual] = useState(0)

    // paginación
    const productosPorPagina = 5
    const totalPaginas = Math.ceil(productos.length / productosPorPagina)
    const inicio = paginaActual * productosPorPagina
    const productosVisibles = productos.slice(inicio, inicio + productosPorPagina)

    const productosMostrados = []
    for (let i = 0; i < productosVisibles.length; i++) {
        productosMostrados.push(<ProductoCard key={i} nombre={productosVisibles[i].nombre} imagen={productosVisibles[i].imagen} masInformacion={() => {
            const producto = {
                imagen: productosVisibles[i].imagen,
                nombre: productosVisibles[i].nombre,
                descripcion: productosVisibles[i].descripcion,
            }

            // actualizamos
            setUltimoProducto(producto)

            // guardamos
            localStorage.setItem("ultimoProducto", JSON.stringify(producto))
        }} />)
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