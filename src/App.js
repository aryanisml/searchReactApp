import "./App.css";
import styled from "styled-components";
import { SearchContextProvider } from "./Context/SearchContext";
import searchReducer, { initialState } from "./Context/SearchReducer";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Header>
        <h1>Search Movie</h1>
      </Header>
      <SearchContextProvider
        initialState={initialState}
        reducer={searchReducer}
      >
        <Container />
      </SearchContextProvider>
    </>
  );
}

export default App;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
`;
