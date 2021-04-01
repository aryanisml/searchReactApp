const SearchResult = ({ list }) => {
  return (
    <>
      {list && list.length > 0
        ? list.map((value, index) => (
            <div key={value.imdbID}>{value.Title}</div>
          ))
        : ""}
    </>
  );
};
export default SearchResult;
