import { useEffect, useState } from "react"
import Character from "./Character"

function NavPage(props) {
    return (
        <div className="d-flex justify-content-between align-items-center" >
            
            <button className="btn btn-primary btn-sm"
                onClick={() => props.setPage(props.page - 1)}
                disabled={props.page === 1}
            >
                RETURN 
            </button>


            <p>Page: {props.page}</p>

            <button className="btn btn-primary btn-sm"
                onClick={() => props.setPage(props.page + 1)}
                disabled={props.page === props.totalPages}
            >
                NEXT 

            </button>


        </div>
    )
}

function CharacterList() {

    const [character, setCharacter] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(() => {
            async function fetchData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const data = await response.json()
            setLoading(false)
            setCharacter(data.results)

        }
        fetchData()
    }, [page])


    return (
        <div className="container">

            <NavPage page={page} setPage={setPage} />



            <div className="row">
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <div className="row">
                        {character.map(character => (
                            <div className="col-md-4" key={character.id}>
                                <Character character={character} />
                            </div>
                            
                        ))}
                    </div>
                    
                )}
            </div>
        
        <NavPage page={page} setPage={setPage} />
        
        

        </div>
    );
}

export default CharacterList;