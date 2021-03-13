import { useState } from "react";
import { useQuery } from "react-query";
import Planet from '../Planet/Planet';

import { Container, ButtonsContainer } from "./styles";

interface PlanetProps {
  name: string;
  population: string;
  terrain: string;
}

const getPlanets = async (page = 1) => {
  const response = await fetch(`https://swapi.dev/api/planets/?page=` + page);
  return response.json();
}

const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(['planets', page], () => getPlanets(page), { keepPreviousData : true });

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
      <h2>Planets</h2>

      <ButtonsContainer>
        {page > 1 && (
          <button onClick={handlePreviousPagination} >Previous Page</button>
        )}
        <div />
        {page < 6 && (
          <button onClick={handleNextPagination} >Next Page</button>
        )}
      </ButtonsContainer>
      
      { status === 'loading' && (
        <h2>Loading planets...</h2>
      )}

      { status === 'error' && (
        <h2>Error fetching planets</h2>
      )}

      { status === 'success' && (
        <div>
          {data.results.map((planet: PlanetProps) => (
            <Planet planet={planet}  />
          ))}
        </div>
      )}
    </Container>
  );
}

export default Planets;