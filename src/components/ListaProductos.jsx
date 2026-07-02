import { useState } from "react"
import ProductoCard from "./ProductoCard.jsx"

function ListaProductos() {
    const [paginaActual, setPaginaActual] = useState(0)

    // "base de datos" de los productos.
    // Aqui se agregaran para que sea posible implementar la "pagination".
    let productos = [
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