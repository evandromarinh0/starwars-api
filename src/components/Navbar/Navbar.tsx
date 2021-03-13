import { Container } from "./styles";

interface NavbarProps {
  setPage(info: string): void;
}

const Navbar = ({ setPage }: NavbarProps) => {
  return(
    <Container>
      <button onClick={() => setPage('planets')}>Planets</button>
      <button onClick={() => setPage('characters')}>Characters</button>
    </Container>
  );
}

export default Navbar;