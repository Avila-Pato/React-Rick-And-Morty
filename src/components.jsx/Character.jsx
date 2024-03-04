

function Character({character}){
    return (
        <div className="text-ceter p-5">                          {/* cuando se recoore el elemento debemos colocar Una key por cada elemento con una Id de los personajes  */}
        <h3>{character.name}</h3>
        <img className="img-fluid rounded-pill" src={character.image} alt="imagenes" />     {/* lo que esta retornando es el personaje y la imagen  dentro del div  */}
        <p>{character.origin.name}</p>
    </div>
    )
}

export default Character