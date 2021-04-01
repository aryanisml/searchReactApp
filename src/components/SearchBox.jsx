import { useState } from "react";
import { useStateValue } from "../Context/SearchContext";
import styled from "styled-components";
const SearchBox = () => {
  const [newstate, dispatch] = useStateValue();
  console.log(newstate);
  const [searchText, setSearchText] = useState("India");
  const searchHandler = (e) => {
    e.preventDefault();
    dispatch({ type: `SET_SEARCH_TEXT`, payload: searchText });
  };
  return (
    <SearchContainer>
      <SearchContainerBox>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={searchHandler}>Search</button>
      </SearchContainerBox>
    </SearchContainer>
  );
};

export default SearchBox;

const SearchContainer = styled.div`
  margin-top: 2px;
  display: flex;
  width: 60%;
`;
const SearchContainerBox = styled.div`
  display: flex;
  flex: 0 0 100%;
`;
