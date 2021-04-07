import styled from "styled-components";
const SearchResult = ({ list }) => {
  return (
    <>
      <CardContainer>
        {list && list.length > 0
          ? list.map((value, index) => (
              <Card key={value.imdbID}>
                {/* <CardTitle>
                  <div>{value.Title}</div>
                </CardTitle> */}
                <img src={value.Poster} alt={value.Title} />
                <CardContent>
                  <div>{value.Title}</div>
                  <div>Year {value.Year}</div>
                </CardContent>
              </Card>
            ))
          : ""}
      </CardContainer>
    </>
  );
};
export default SearchResult;

const Card = styled.div`
  background: var(--clr-card-primary);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  img {
    max-width: 200px;
    min-height: 250px;
    height: 250px;
    object-fit: cover;
  }

  flex: 0 1 15%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  
  :hover {
    z-index:1;
  }
`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: flex-start;
  margin: 0px;
  box-sizing: border-box;
  gap: 15px;
  padding: 15px;
`;

const CardTitle = styled.span`
  color: var(--clr-primary);
  font-size: 1rem;
  font-weight: bold;
`;

const CardContent = styled.div`
  font-size: 12px;
  font-weight: 600;
  padding:8px;
`;
