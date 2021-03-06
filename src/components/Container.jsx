import { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResults";
import { useStateValue } from "../Context/SearchContext";
import useSearch from "../Common/useSearch";
import FilterBox from "./FilterBox";
import styled from "styled-components";
const Container = () => {
  const [newstate] = useStateValue();
  useSearch(newstate.searchText);
  const [movieList, setMovieList] = useState([]);
  let filterMovieList = [...movieList];
  const [filterMovie, setFilterMovie] = useState("");
  const [filterCollectionMovie, setFilterCollectionMovie] = useState([]);
  useEffect(() => {
    setMovieList(newstate.items);
  }, [newstate.items]);
  if (filterMovie) {
    filterMovieList = filterMovieList.filter((value) =>
      value.Year.includes(filterMovie)
    );
  }
  if (filterCollectionMovie.length > 0) {
    filterMovieList = [
      ...filterMovieList.reduce((acc, curr) => {
        if (filterCollectionMovie.filter((v) => v === curr.Year).length > 0) {
          acc.push(curr);
        }
        return acc;
      }, []),
    ];
  }
  const onTextChange = (val) => {
    setFilterMovie(val);
  };
  const handlerClick = (index) => () => {
    const p = filterCollectionMovie.indexOf(index);
    const all = [...filterCollectionMovie];
    if (p === -1) {
      all.push(index);
    } else {
      all.splice(p, 1);
    }
    setFilterCollectionMovie(all);
  };

  return (
    <>
      <SearchBox />
      <ResultContainer>
        <FilterBox onTextChange={onTextChange} handlerClick={handlerClick} />
        <SearchResult list={filterMovieList} />
      </ResultContainer>
    </>
  );
};

export default Container;

const ResultContainer = styled.div`
  display: flex;
  padding:15px;
  box-sizing:border-box;
`;
