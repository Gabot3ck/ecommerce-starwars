import { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {

    const [active, setActive] = useState(false);

    const isActive = () => {
        setActive(!active);
        console.log(active)
    }

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container-fluid contenedor_wrap">
                <Link className="navbar-brand" to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" alt="" width="62" height="30" className="d-inline-block align-text-top me-3">
                    </img>
                    Star Wars Store
                </Link>
                <button onClick={()=> isActive()} className= {`navbar-toggler hamburger hamburger--spring ${active ? "is-active" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" aria-current="page" to={"/"}>Home</Link>
                        <Link className="nav-link" to={"/category/ropa"} >Ropa</Link>
                        <Link className="nav-link" to={"/category/juguetes"} >Juguetes</Link>
                        <Link className="nav-link" to={"/category/juegos"} >Juegos de mesa</Link>
                        <Link className="nav-link" to={"/contacto"} >Contacto</Link>
                    </div>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;