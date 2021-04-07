import "./App.css";
import styled from "styled-components";
import { SearchContextProvider } from "./Context/SearchContext";
import searchReducer, { initialState } from "./Context/SearchReducer";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Header>
        <span>Search Movie</span>
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
  justify-content: flex-start;
  align-item: center;
  background: var(--clr-primary);
  color: white;
  padding: 10px;
  font-weight: bold;
  width:100%;
`;
