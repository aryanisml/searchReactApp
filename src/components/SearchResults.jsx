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
    backface-visibility: hidden;
    opacity: 1;
  }

  flex: 0 1 15%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  cursor:pointer;
  transition: all 0.3s ease-out;
  text-decoration: none;
  :hover {
    transform: translateY(-5px) scale(1.1) translateZ(0);
    box-shadow: 0 24px 36px rgba(0,0,0,0.11),
      0 24px 46px var(--box-shadow-color);
  }

`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: flex-start;
  margin: 0px;
  box-sizing: border-box;
   gap: 5px;
  margin-left:5px;
  padding :5px;
  
`;


const CardContent = styled.div`
  font-size: 12px;
  font-weight: 600;
  padding:8px;
  transition: .5s ease;
  opacity: 1;
  :hover {
   // opacity: 1;
    top:20px;
    z-index:1000;
  }
`;
