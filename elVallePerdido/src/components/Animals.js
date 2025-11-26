
const Animals= async ()=>{
    const url="http://localhost:3000/animals";
    const response=await fetch(url);
    const animalsList=await response.json();
    let animalsTable=
        `<table class="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Especie</th>
                    <th scope="col">Origen</th>
                    <th scope="col">Peso Medio</th>
                    <th scope="col">Longevidad</th>
                    <th scope="col">Acciones</th>

                </tr>
            </thead>
            <tbody>`
                animalsList.forEach(animal => {
                        animalsTable+=`<tr>
                            <td>${animal.nombre}</td>
                            <td>${animal.especie}</td>
                            <td>${animal.lugar_de_origen}</td>
                            <td>${animal.peso_medio_kg}</td>
                            <td>${animal.longevidad_anios}</td>
                            <td><a href="./About?id=${animal.id}" class="btn btn-secondary">Ver mas informacion</a></td>

                        <tr>`


                    
                })
            
        
        animalsTable+="</tbody></table>"

    return(animalsTable);
    
    

}

export {Animals};