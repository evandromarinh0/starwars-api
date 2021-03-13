import { Container } from "./styles";

interface PlanetProps {
  name: string;
  population: string;
  terrain: string;
}

export interface PPlanet {
  planet: PlanetProps
}

const Planet = (planet: PPlanet) => {

  return(
    <Container>
      <h3>{planet.planet.name}</h3>
      <p>Population - {planet.planet.population}</p>
      <p>Terrain - {planet.planet.terrain}</p>
    </Container>
  );
}

export default Planet;