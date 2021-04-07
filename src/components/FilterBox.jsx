import { useStateValue } from "../Context/SearchContext";
import styled from "styled-components";
const FilterBox = ({ onTextChange, handlerClick }) => {
  const [newstate] = useStateValue();
  const yearItem = newstate.items
    ? Object.values(
        newstate.items.reduce((acc, crr, index) => {
          if (!acc[crr.Year]) {
            acc[crr.Year] = crr.Year;
          }
          return acc;
        }, {})
      )
    : [];
  return (
    <>
      <FilterContainer>
        <FilterTitle>
          <h3>Filters</h3>
          <hr />
        </FilterTitle>
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
                <div key={value}>
                  <input type="checkbox" onChange={handlerClick(value)} />
                  <label> {value}</label>
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
  // justify-content: flex-start;
  font-size: 13.1px;
  box-sizing: border-box;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  min-height: 22rem;
  height: 22rem;
  border-radius: 5px;
`;
const FilterTextSearch = styled.div`
  input {
    :focus {
      outline: none;
    }
    border: none;
    background: transpernt;
  }
  padding: 5px;
  background: transpernt;
  border-bottom: 1px solid gray;
`;
const FilterYearSearch = styled.div`
  padding: 5px;
`;
const FilterTitle = styled.div`
  padding: 5px;
  box-sizing: border-box;
`;
