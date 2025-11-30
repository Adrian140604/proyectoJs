const About = async (id) => {
    const url = "http://localhost:3000/animals";
    const response = await fetch(url + "/" + id);
    const animal = await response.json();

    function addToFavorites() {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (!favorites.some(a => a.id === animal.id)) {
            favorites.push(animal);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            alert("Añadido a favoritos correctamente");
        }
    }

    let form = `
    <div class="container mt-5">
        <div class="card shadow-lg">
            <div class="card-header bg-primary text-white">
                <h4 class="mb-0">Detalles del Animal</h4>
            </div>

            <div class="card-body">
                <form id="animalForm">
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" id="nombre" value="${animal.nombre}" class="form-control" disabled>
                    </div>

                    <div class="mb-3">
                        <label for="especie" class="form-label">Especie</label>
                        <input type="text" id="especie" value="${animal.especie}" class="form-control" disabled>
                    </div>

                    <div class="mb-3">
                        <label for="origen" class="form-label">Lugar de origen</label>
                        <input type="text" id="origen" value="${animal.lugar_de_origen}" class="form-control" disabled>
                    </div>

                    <div class="mb-3">
                        <label for="peso" class="form-label">Peso medio (kg)</label>
                        <input type="number" id="peso" value="${animal.peso_medio_kg}" class="form-control" disabled>
                    </div>

                    <div class="mb-3">
                        <label for="longevidad" class="form-label">Longevidad (años)</label>
                        <input type="number" id="longevidad" value="${animal.longevidad_anios}" class="form-control" disabled>
                    </div>

                    <a href="#/animals" class="btn btn-secondary w-100">Volver atrás</a>
                    <button type="button" id="addFav" class="btn btn-warning w-100 mt-2">Añadir a favoritos ⭐</button>
                </form>
            </div>
        </div>
    </div>`;

    // Añadimos el evento después de pintar el HTML
    setTimeout(() => {
        const favBtn = document.getElementById("addFav");
        favBtn.addEventListener("click", addToFavorites);
    }, 0);

    return form;
};

export { About };
