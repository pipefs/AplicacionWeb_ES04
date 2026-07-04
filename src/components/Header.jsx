function Header() {
    return (
        <header class="bg-body-tertiary" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px"
            }}>
                <img src="https://images.icon-icons.com/1725/PNG/512/4014657-buy-cell-online-phone-store_112888.png" alt="logo" style={{ width: "50px", height: "50px" }} />
                <h1>Tienda de Smartphones</h1>
            </div>
            <nav style={{
                display: "flex",
                gap: "20px",
                margin: "auto"
            }}>
                <button class="btn btn-primary">Inicio</button>
                <button class="btn btn-outline-secondary disabled">Buscar</button>
                <button class="btn btn-outline-secondary disabled">Contacto</button>
            </nav>
        </header>
    )
}

export default Header