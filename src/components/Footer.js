
const Footer = ()=> {
    return(
        `
            <footer class="bg-dark text-light pt-5 pb-3 mt-5">
  <div class="container">
    <div class="row">

      <!-- Logo / Descripción -->
      <div class="col-md-4 mb-4">
        <h5 class="text-uppercase fw-bold">Mi Sitio de Animales</h5>
        <p>
          Información, curiosidades y fichas completas de animales de todo el mundo.
          Aprende sobre su origen, peso, longevidad y más.
        </p>
      </div>

      <div class="col-md-4 mb-4">
        <h5 class="text-uppercase fw-bold">Enlaces</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-light text-decoration-none">Inicio</a></li>
          <li><a href="#" class="text-light text-decoration-none">Animales</a></li>
          <li><a href="#" class="text-light text-decoration-none">Contacto</a></li>
          <li><a href="#" class="text-light text-decoration-none">Sobre Nosotros</a></li>
        </ul>
      </div>

     

    </div>

    <div class="text-center mt-4 border-top pt-3">
      <p class="mb-0">&copy; 2025 Mi Sitio de Animales — Todos los derechos reservados.</p>
    </div>
  </div>
</footer>

        `
    )

}

export{Footer}