import { useState } from "react"

import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import ListaProductos from "./components/ListaProductos.jsx"
import DetalleProducto from "./components/DetalleProducto.jsx"

function App() {
  const [ultimoProducto, setUltimoProducto] = useState(JSON.parse(localStorage.getItem("ultimoProducto")))

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
    }}>
      <Header />

      <main style={{
        flex: "1 0 100vh",
        padding: "20px"
      }}>
        <ListaProductos setUltimoProducto={setUltimoProducto} />
        <hr />
        <DetalleProducto producto={ultimoProducto} />
      </main>

      <Footer />
    </div>
  )
}

export default App
