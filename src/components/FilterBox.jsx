import { useStateValue } from "../Context/SearchContext";
import styled from "styled-components";
const FilterBox = ({ onTextChange, handlerClick }) => {
  const [newstate] = useStateValue();
  const yearItem = newstate.items;
  return (
    <>
      <FilterContainer>
        <FilterTextSearch>
          <input
            type="text"
            onChange={(e) => onTextChange(e.target.value)}
            placeholder="Search by Year"
          />
        </FilterTextSearch>
        <FilterYearSearch>
          {yearItem && yearItem.length > 0
            ? yearItem.map((value, index) => (
                <div key={value.imdbID}>
                  <input type="checkbox" onChange={handlerClick(value.Year)} />
                  <label> {value.Year}</label>
                </div>
              ))
            : ""}
        </FilterYearSearch>
      </FilterContainer>
    </>
  );
};
export default FilterBox;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  input[type="checkbox"] {
    cursor: pointer;
  }
  justify-content: flex-start;
  font-size: 13.1px;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-top:15px;
`;
const FilterTextSearch = styled.div`
  input {
    :focus {
      outline: none;
    }
  }
`;
const FilterYearSearch = styled.div`

`