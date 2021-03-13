import { useState } from "react";
import GlobalStyle from './styles/global';

import Navbar from "./components/Navbar/Navbar";

import Characters from "./components/Characters/Characters";
import Planets from "./components/Planets/Planets";

function App() {
  const [page, setPage] = useState('planets');

  return (
    <>
      <div className="App">
        <h1>Star Wars</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === 'planets' ? <Planets /> : <Characters /> }
        </div>
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;