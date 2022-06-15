import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://www.starwars.com" target="blank">
                    <img src="https://www.citypng.com/public/uploads/preview/-51608494060e1tvtjfsry.png" alt="" width="62" height="30" className="d-inline-block align-text-top">
                    </img>
                    Star Wars Store
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to={"/Home"}>Home</Link>
                        <Link className="nav-link" to={"/Ropa"} >Ropa</Link>
                        <Link className="nav-link" to={"/Juguetes"} >Juguetes</Link>
                        <Link className="nav-link" to={"/Juegos"} >Juegos de mesa</Link>
                        <Link className="nav-link" to={"/Peliculas"} >Películas</Link>
                        <Link className="nav-link" to={"/Series"} >Series</Link>
                        <Link className="nav-link" to={"/Contacto"} >Contacto</Link>
                    </div>
                </div>
                <CartWidget acc={0}/>
            </div>
        </nav>
    );
}

export default NavBar;