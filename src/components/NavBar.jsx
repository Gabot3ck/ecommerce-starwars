import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="https://www.citypng.com/public/uploads/preview/-51608494060e1tvtjfsry.png" alt="" width="62" height="30" className="d-inline-block align-text-top">
                    </img>
                    Star Wars Store
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                        <Link className="nav-link" to={"/category/ropa"} >Ropa</Link>
                        <Link className="nav-link" to={"/category/juguetes"} >Juguetes</Link>
                        <Link className="nav-link" to={"/category/juegos"} >Juegos de mesa</Link>
                        <Link className="nav-link" to={"/contacto"} >Contacto</Link>
                    </div>
                </div>
                <CartWidget/>
            </div>
        </nav>
    );
}

export default NavBar;