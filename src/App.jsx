import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }}>
      <Header />

      <main style={{
        flex: "1 0 100vh",
        padding: "20px"
      }}>
        <h1>Smartphones Galaxy</h1>
        <p>Aqui iria los items en una lista horizontal movible.</p>
        <p>Y si se oprime una de las Cards apareceria la informacion en el espacio que sobra de la pantalla.</p>
      </main>

      <Footer />
    </div>
  )
}

export default App
