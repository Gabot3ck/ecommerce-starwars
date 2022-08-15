import "./Footer.css"

export default function Footer() {
    return (<>
        <footer className="footer">
            <div className="footer__wrapper ">
                <aside className="pie__rrss">
                    <p>Síguenos en redes sociales</p>
                    <ul>
                        <li><a href="https://www.facebook.com/startoyschile" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://www.instagram.com/starwarsstorechile/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.youtube.com/c/StarWars" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </aside>
                <h4>© 2022 Star Wars Store, todos los derechos reservados.</h4>
                <p className="autor">Elaborado con pasión por <a href="https://www.linkedin.com/in/gabriel-castillo-frontend/" target="_blank" rel="noopener noreferrer">Gabriel Castillo</a></p>
            </div>
        </footer>
    </>)
}
