import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import ListaProductos from "./components/ListaProductos.jsx"

function App() {
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
        <ListaProductos />
      </main>

      <Footer />
    </div>
  )
}

export default App
