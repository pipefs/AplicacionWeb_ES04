function Header() {
    return (
        <header class="bg-body-tertiary" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
        }}>
            <div>
                [IMAGEN]
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