import { Container } from "./styles";

interface CharacterProps {
  name: string;
  gender: string;
  birth_year: string;
}

export interface CCharacter {
  character: CharacterProps
}

const Character = (character: CCharacter) => {

  return(
    <Container>
      <h3>{character.character.name}</h3>
      <p>Gender - {character.character.gender}</p>
      <p>Birth Year - {character.character.birth_year}</p>
    </Container>
  );
}

export default Character;