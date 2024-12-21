type CharacterProps = {
    character: {
        name: string;
        image: string;
        origin: {
            name: string;
        };
    };
};

function Character({ character }: CharacterProps) {
    return (
        <div className="text-center p-5">
            <h3>{character.name}</h3>
            <img className="img-fluid rounded-pill" src={character.image} alt="character" />
            <p className="text-bold mt-3">{character.origin.name}</p>
        </div>
    );
}

export default Character;
