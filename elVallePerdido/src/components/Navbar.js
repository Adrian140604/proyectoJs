
const Navbar= ()=>{
return(
    ` 
        <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container">

                <!-- LOGO -->
                <a class="navbar-brand fw-bold text-light" href="#/">El valle Perdido</a>

                <!-- Botón responsive -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
                aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="mainNavbar">

                <!-- IZQUIERDA: logo + Inicio + Animales -->
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                    <a class="nav-link text-light" href="#/">Inicio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-light" href="#/animals">Animales</a>
                    </li>
                </ul>

                <!-- DERECHA: Iniciar sesión -->
                <div class="d-flex">
                    <a href="#/login" class="btn btn-outline-light">Iniciar Sesión</a>
                </div>

                </div>

            </div>
        </nav>


    
    `
)
}

export {Navbar};