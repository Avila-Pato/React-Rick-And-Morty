import { useEffect, useState, useMemo } from "react";
import Character from "./Character";
import NavPage from "./NavPage";

function CharacterList() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("")

  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        const data = await response.json();
        setCharacter(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [page]);

  const filteredCharacters = useMemo(() => {
    return character.filter((char) =>
      char.name.toLowerCase().includes(name.toLowerCase())
    );
  }, [name, character]);

  const filteredGender = useMemo(() => {
    if(!gender ) return filteredCharacters
    return filteredCharacters.filter((char) =>
      char.gender.toLowerCase() === gender.toLowerCase()
    );
  }, [gender, filteredCharacters]);

  if (loading) return <h1>Cargando...</h1>;
  return (
    <div className="container">
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        style={{ marginLeft: "10px" }}
      >
        <option value="">Todos</option>
        <option value="Male">Masculino</option>
        <option value="Female">Femenino</option>
        <option value="Genderless">Sin género</option>
        <option value="unknown">Desconocido</option>
      </select>

      <input className="form-control" type="text" placeholder="Buscador…" readOnly onChange={(e) => setName(e.target.value)} />
      <NavPage page={page} setPage={setPage} />

      <div className="row">
        {filteredGender.map((character) => (
          <div className="col-md-4" key={character.id}>
            <Character character={character} />
          </div>
        ))}
      </div>
      
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
