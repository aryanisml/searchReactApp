import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useStateValue } from "./Context/SearchContext";
import useSearch from "./Common/useSearch";

function App() {
  const [newstate, dispatch] = useStateValue();
  useSearch(newstate.searchText);
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    setMovieList(newstate.items);
  }, [newstate.items]);

  const [search, setSearch] = useState("India");
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch({ type: `SET_SEARCH_TEXT`, payload: search });
  };

  return (
    <>
      <Header>
        <h1>Search Movie</h1>
      </Header>
      <SearchContainer>
        <SearchContainerBox>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={clickHandler}>Search</button>
        </SearchContainerBox>
        
      </SearchContainer>
      {movieList && movieList.length > 0
         ? movieList.map((value, index) => (
              <div key={value.imdbID}>{value.Title}</div>
            ))
         : ''}
    </>
  );
}

export default App;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
`;
const SearchContainer = styled.div`
  margin-top: 2px;
  display: flex;
  width: 60%;
`;
const SearchContainerBox = styled.div`
  display: flex;
  flex: 0 0 100%;
`;
