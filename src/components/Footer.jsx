function Footer() {
    return (
        <footer class="bg-body-secondary" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#000",
        }}>
            <div style={{padding:"10px"}}>
                <h5>Integrantes:</h5>
                <ul class="list-group">
                    <li class="list-group-item">Felipe Salinas</li>
                    <li class="list-group-item">Kevin Broudissond</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer