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
  const keyPressHandler = (e) => {
    if(e && e.code === 'Enter'){
      e.preventDefault();
      dispatch({ type: `SET_SEARCH_TEXT`, payload: searchText });  
    }
  }
  return (
    <SearchContainer>
      <SearchContainerBox>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={keyPressHandler}
        />
        <button onClick={searchHandler}>Search</button>
      </SearchContainerBox>
    </SearchContainer>
  );
};

export default SearchBox;

const SearchContainer = styled.div`
  margin-top: 5px;
  padding:5px;
  display: flex;
  justify-content:center;
  align-items:center;
  width:50%;
  margin:auto;

`;
const SearchContainerBox = styled.div`
  display:flex;
  flex:0 0 100%;
  border:1px solid gray;
  border-radius:20px;
  input {
    margin-left:0.5rem;
    flex-grow:1;
    flex-size:1.5rem;
    line-height:1.6rem;
    background:transprent;
    border:none;
    :focus {
      outline:none;
    }
    background-color:white;
  }
  button {
    background-color: var(--clr-primary);
    border:none;
    color:white;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    width:5rem;
    cursor:pointer;
    :focus {
      outline:none;
      
    }
  }

`;
