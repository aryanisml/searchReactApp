import { useEffect, useState } from "react";
import axios from "axios";
import API_KEY from "../config";
import {useStateValue} from  '../Context/SearchContext';
const useSearch = (searchQuery) => {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    const getMovie = async () => {
     await axios.get(
        `http://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`
      ).then((result)=> {
        const resultMovie = result.data.Search;
        dispatch({type : 'SEARCH_PRODUCTS', payload: resultMovie});
      });
    
    };
    getMovie();
  }, [searchQuery]);
};

export default useSearch;
