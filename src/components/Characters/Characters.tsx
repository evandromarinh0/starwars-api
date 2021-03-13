import { useState } from "react";
import { useQuery } from "react-query";
import Character from "../Character/Character";

import { Container, ButtonsContainer } from "./styles";

interface CharacterProps {
  name: string;
  gender: string;
  birth_year: string;
}

const getCharacters = async (page = 1) => {
  const response = await fetch(`https://swapi.dev/api/people/?page=` + page);
  return response.json();
}

const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(['characters', page], () => getCharacters(page), { keepPreviousData : true });

  function handlePreviousPagination() {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  function handleNextPagination() {
    if (page < 9) {
      setPage(page + 1)
    }
  }

  return(
    <Container>
      <h2>Characters</h2>
      
      <ButtonsContainer>
        {page > 1 && (
          <button onClick={handlePreviousPagination} >Previous Page</button>
        )}
        <div />
        {page < 9 && (
          <button onClick={handleNextPagination} >Next Page</button>
        )}
      </ButtonsContainer>
      
      { status === 'loading' && (
        <h2>Loading characters...</h2>
      )}

      { status === 'error' && (
        <h2>Error fetching characters</h2>
      )}

      { status === 'success' && (
        <div>
          {data.results.map((character: CharacterProps) => (
            <Character character={character}  />
          ))}
        </div>
      )}
    </Container>
  );
}

export default Planets;