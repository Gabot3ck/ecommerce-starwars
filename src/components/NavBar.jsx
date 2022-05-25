function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="https://www.starwars.com" target="blank">
                    <img src="https://www.citypng.com/public/uploads/preview/-51608494060e1tvtjfsry.png" alt="" width="62" height="30" class="d-inline-block align-text-top">
                    </img>
                    Star Wars Store
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        <a class="nav-link" href="/">Ropa</a>
                        <a class="nav-link" href="/">Juguetes</a>
                        <a class="nav-link" href="/">Juegos de mesa</a>
                        <a class="nav-link" href="/">Películas</a>
                        <a class="nav-link" href="/">Series</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;