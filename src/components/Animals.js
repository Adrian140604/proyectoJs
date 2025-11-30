
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
                    <th scope="col">Acciones</th>

                </tr>
            </thead>
            <tbody>`
                animalsList.forEach(animal => {
                        animalsTable+=`<tr>
                            <td>${animal.nombre}</td>
                            <td>${animal.especie}</td>

                            <td><a href=".#/about/${animal.id}" class="btn btn-secondary">Ver mas informacion</a></td>

                        <tr>`


                    
                })
            
        
        animalsTable+="</tbody></table>"

    return(animalsTable);
    
    

}

export {Animals};