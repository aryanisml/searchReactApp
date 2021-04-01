import { useStateValue } from "../Context/SearchContext";
import styled from "styled-components";
const FilterBox = ({ onTextChange, handlerClick }) => {
  const [newstate, dispatch] = useStateValue();
  const yearItem = newstate.items;
  return (
    <>
      <input type="text" onChange={(e) => onTextChange(e.target.value)} />
      <FilterContainer>
        Filter By Year{" "}
        {yearItem && yearItem.length > 0
          ? yearItem.map((value, index) => (
              <div key={value.imdbID}>
                <input type="checkbox" onChange={handlerClick(value.Year)} />
                <label> {value.Year}</label>
              </div>
            ))
          : ""}
      </FilterContainer>
    </>
  );
};
export default FilterBox;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  input[type="checkbox"] {
    cursor: pointer;
  }
`;
